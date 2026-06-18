import CountItem from '../components/CountItem'

interface Props {
  title?: string
  icon?: string
  postCount?: number
  eventCount?: number
  taskCount?: number
}

export default function CountBlock({
  title = 'Overview',
  icon = 'bar_chart',
  postCount = 0,
  eventCount = 0,
  taskCount = 0,
}: Props) {
  return (
    <div
      className="count-block"
      data-layout-structure="block"
      data-media="container"
    >
      <h3 className="block-header count-title">
        <span className="material-symbols-outlined">{icon}</span>
        {title}
      </h3>
      <div className="count-wrapper">
        <CountItem
          icon="article"
          value={postCount}
          label="Posts"
          color="var(--clr-accent)"
        />
        <CountItem
          icon="event"
          value={eventCount}
          label="Events"
          color="var(--clr-info)"
        />
        <CountItem
          icon="checklist"
          value={taskCount}
          label="Tasks"
          color="var(--clr-warning)"
        />
      </div>
    </div>
  )
}
