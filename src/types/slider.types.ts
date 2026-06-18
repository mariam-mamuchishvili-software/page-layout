export interface SliderItem {
  id: number;
  src: string;
  alt?: string;
  title: string;
  excerpt: string;
}

export interface SliderConfig {
  items: SliderItem[];
}
