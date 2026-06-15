import BaseLayout from '../layouts/BaseLayout'
import PostsBlock from '../blocks/PostsBlock'
import QuestionsBlock from '../blocks/QuestionsBlock'
import ContactBlock from '../blocks/ContactBlock'
import EventsBlock from '../blocks/EventsBlock'
import TasksBlock from '../blocks/TasksBlock'

export default function HomePage() {
  return (
    <BaseLayout
      title="Page Layout Components"
      subtitle={
        <>
          Understanding the main layout block concepts —{' '}
          <code>page</code>, <code>builder</code>, <code>partial</code>,{' '}
          <code>block</code> &amp; <code>component</code>.
        </>
      }
    >
      <div className="row" data-layout-structure="builder">
        <div className="col" data-layout-structure="builder" data-content="main">
          <main data-layout-structure="partial">
            <PostsBlock />
            <QuestionsBlock />
            <ContactBlock />
          </main>
        </div>
        <div className="col" data-layout-structure="builder" data-content="aside">
          <aside data-layout-structure="partial">
            <EventsBlock />
            <TasksBlock />
          </aside>
        </div>
      </div>
    </BaseLayout>
  )
}
