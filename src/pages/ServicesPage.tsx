import { useState } from "react";
import type { Post } from "../types/post.types";
import type { Event } from "../types/event.types";
import database from "../storage/database";
import HeaderBlock from "../blocks/HeaderBlock";
import CountBlock from "../blocks/CountBlock";
import EventsBlock from "../blocks/EventsBlock";
import PostsBlock from "../blocks/PostsBlock";

export default function ServicesPage() {
  const [posts, setPosts] = useState<Post[]>(database.posts);
  const [events, setEvents] = useState<Event[]>(database.events);

  return (
    <>
      <HeaderBlock
        title="Our Services"
        subtitle="Posts, events, and task tracking — everything we offer in one place."
      />
      <CountBlock
        postCount={posts.length}
        eventCount={events.length}
        taskCount={database.tasks.length}
      />
      <div className="row" data-layout-structure="builder">
        <div
          className="col"
          data-layout-structure="builder"
          data-content="main"
        >
          <main data-layout-structure="partial">
            <EventsBlock
              events={events}
              onDelete={(id) => setEvents(events.filter((e) => e.id !== id))}
            />
          </main>
        </div>
        <div
          className="col"
          data-layout-structure="builder"
          data-content="aside"
        >
          <aside data-layout-structure="partial">
            <PostsBlock
              posts={posts}
              onDelete={(id) => setPosts(posts.filter((p) => p.id !== id))}
            />
          </aside>
        </div>
      </div>
    </>
  );
}
