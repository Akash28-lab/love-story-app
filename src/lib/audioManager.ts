const BGM_SRC = "/music/love-song.mp3";

let bgm: HTMLAudioElement | null = null;
let story: HTMLAudioElement | null = null;
let bgmStarted = false;
let bgmWasPlayingBeforeStory = false;
let bgmWasPlayingBeforeVideo = false;

const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

export function subscribeToAudioChanges(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getBgm(): HTMLAudioElement {
  if (!bgm) {
    bgm = new Audio(BGM_SRC);
    bgm.loop = true;
    bgm.volume = 0.5;
  }
  return bgm;
}

export function isBgmPlaying(): boolean {
  return !!bgm && !bgm.paused;
}

export async function startBackgroundMusic(): Promise<void> {
  bgmStarted = true;
  stopStoryAudio();
  try {
    await getBgm().play();
    notifyListeners();
  } catch (error) {
    console.error(error);
  }
}

export async function resumeBgm(): Promise<void> {
  if (!bgmStarted) return;

  stopStoryAudio();

  try {
    await getBgm().play();
    notifyListeners();
  } catch (error) {
    console.error(error);
  }
}

export async function toggleBgm(): Promise<boolean> {
  const audio = getBgm();

  if (!audio.paused) {
    audio.pause();
    notifyListeners();
    return false;
  }

  bgmStarted = true;
  stopStoryAudio();

  try {
    await audio.play();
    notifyListeners();
    return true;
  } catch (error) {
    console.error(error);
    notifyListeners();
    return false;
  }
}

function stopStoryAudio() {
  if (!story) return;

  story.pause();
  story.currentTime = 0;
  story = null;
  notifyListeners();
}

export async function playStorySong(src: string): Promise<void> {
  const bgmAudio = getBgm();

  if (!story) {
    bgmWasPlayingBeforeStory = bgmStarted && !bgmAudio.paused;
  }

  stopStoryAudio();
  bgmAudio.pause();

  const storyAudio = new Audio(src);
  storyAudio.volume = 0.7;
  story = storyAudio;

  const handleStoryEnd = () => {
    if (story !== storyAudio) return;

    story = null;

    if (bgmWasPlayingBeforeStory) {
      bgmWasPlayingBeforeStory = false;
      void resumeBgm();
    } else {
      notifyListeners();
    }
  };

  storyAudio.addEventListener("ended", handleStoryEnd, { once: true });

  try {
    await storyAudio.play();
    notifyListeners();
  } catch (error) {
    if (story === storyAudio) {
      story = null;

      if (bgmWasPlayingBeforeStory) {
        bgmWasPlayingBeforeStory = false;
        void resumeBgm();
      } else {
        notifyListeners();
      }
    }

    throw error;
  }
}

export function pauseForVideo() {
  const bgmAudio = getBgm();
  bgmWasPlayingBeforeVideo = bgmStarted && !bgmAudio.paused;

  stopStoryAudio();
  bgmAudio.pause();
  notifyListeners();
}

export function resumeAfterVideo() {
  if (bgmWasPlayingBeforeVideo) {
    bgmWasPlayingBeforeVideo = false;
    void resumeBgm();
  } else {
    notifyListeners();
  }
}
