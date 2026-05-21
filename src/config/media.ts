/**

 * Surprise video — put your file in: public/videos/

 * Default name: last-surprise.mp4 (MP4 with H.264 works everywhere)

 */

export const SURPRISE_VIDEO_SOURCES = [

  "/videos/last-surprise.mp4",

  "/videos/surprise.mp4",

] as const;



export const WEDDING_BG_VIDEO = "/videos/wedding-bg.mp4";



/** Bust browser / Next.js image cache when replacing files with the same name */

export function withMediaCacheBust(

  src: string,

  version: number | string

): string {

  const base = src.split("?")[0];

  return `${base}?v=${version}`;

}


