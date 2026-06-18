import type { Post } from "./post.types";
import type { Event } from "./event.types";
import type { Task } from "./task.types";
import type { ContactFormConfig } from "./form.types";

export interface Database {
  posts: Post[];
  events: Event[];
  tasks: Task[];
}

export interface AppConfig {
  contactForm: ContactFormConfig;
}
