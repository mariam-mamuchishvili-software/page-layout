import { useState } from "react";
import database from "../storage/database";
import BaseLayout from "../layouts/BaseLayout";
import CountBlock from "../blocks/CountBlock";
import PostsBlock from "../blocks/PostsBlock";
import QuestionsBlock from "../blocks/QuestionsBlock";
import ContactBlock from "../blocks/ContactBlock";
import EventsBlock from "../blocks/EventsBlock";
import TasksBlock from "../blocks/TasksBlock";

export default function HomePage() {
  const [posts, setPosts] = useState(database.posts);
  const [events, setEvents] = useState(database.events);
  const [tasks, setTasks] = useState(database.tasks);

  function handleDeletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  function handleDeleteEvent(id) {
    setEvents(events.filter((event) => event.id !== id));
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <BaseLayout
      title="Page Layout Components"
      subtitle={
        <>
          Understanding the main layout block concepts — <code>page</code>,{" "}
          <code>builder</code>, <code>partial</code>, <code>block</code> &amp;{" "}
          <code>component</code>.
        </>
      }
    >
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
            <PostsBlock posts={posts} onDelete={handleDeletePost} />
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
            <EventsBlock events={events} onDelete={handleDeleteEvent} />
            <TasksBlock tasks={tasks} onDelete={handleDeleteTask} />
          </aside>
        </div>
      </div>
    </BaseLayout>
  );
}
