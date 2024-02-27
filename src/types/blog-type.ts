import { StaticImageData } from "next/image";
import { Key } from "react";

export interface IBlog {
  id: Key | null | undefined;
  // date: ReactNode;
  _id: string;
  img: StaticImageData;
  title: string;
  type: number;
  video_url: string;
  text: string;
  button_text: string;
}