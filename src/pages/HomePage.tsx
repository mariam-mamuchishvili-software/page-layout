import { useState } from "react";
import type { Post } from "../types/post.types";
import type { Event } from "../types/event.types";
import type { Task } from "../types/task.types";
import database from "../storage/database";
import HeaderBlock from "../blocks/HeaderBlock";
import CountBlock from "../blocks/CountBlock";
import PostsBlock from "../blocks/PostsBlock";
import QuestionsBlock from "../blocks/QuestionsBlock";
import ContactBlock from "../blocks/ContactBlock";
import EventsBlock from "../blocks/EventsBlock";
import TasksBlock from "../blocks/TasksBlock";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>(database.posts);
  const [events, setEvents] = useState<Event[]>(database.events);
  const [tasks, setTasks] = useState<Task[]>(database.tasks);

  function handleDeletePost(id: number) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  function handleDeleteEvent(id: number) {
    setEvents(events.filter((event) => event.id !== id));
  }

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleToggleCompleteTask(id: number) {
    setTasks(
      tasks.map((task): Task => {
        if (task.id !== id) return task;
        if (task.status === "done") {
          return {
            ...task,
            status: "in_progress",
            progress: 50,
            completed: false,
          };
        }
        return { ...task, status: "done", progress: 100, completed: true };
      }),
    );
  }

  return (
    <>
      <HeaderBlock
        title="Page Layout Components"
        subtitle={
          <>
            Understanding the main layout block concepts — <code>page</code>,{" "}
            <code>builder</code>, <code>partial</code>, <code>block</code> &amp;{" "}
            <code>component</code>.
          </>
        }
      />
      <CountBlock
        postCount={posts.length}
        eventCount={events.length}
        taskCount={tasks.length}
      />
      <div className="row" data-layout-structure="builder">
        <div
          className="col"
          data-layout-structure="builder"
          data-content="main"
        >
          <main data-layout-structure="partial">
            <EventsBlock events={events} onDelete={handleDeleteEvent} />
            <QuestionsBlock />
            <ContactBlock />
          </main>
        </div>
        <div
          className="col"
          data-layout-structure="builder"
          data-content="aside"
        >
          <aside data-layout-structure="partial">
            <PostsBlock posts={posts} onDelete={handleDeletePost} />
            <TasksBlock
              tasks={tasks}
              onDelete={handleDeleteTask}
              onToggleComplete={handleToggleCompleteTask}
            />
          </aside>
        </div>
      </div>
    </>
  );
}
