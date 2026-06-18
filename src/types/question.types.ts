export interface Question {
  id: number;
  title: string;
  body: string;
  tags?: string[];
  votes?: number;
  views?: number;
  answers?: number;
}
