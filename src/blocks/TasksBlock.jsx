import { useState, useEffect } from 'react'
import TaskCard from '../components/TaskCard'
import { getTasks } from '../services/api'

export default function TasksBlock({ title = 'Team Tasks', icon = 'checklist' }) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks().then((data) => setTasks(data))
  }, [])

  return (
    <div className="tasks-block" data-layout-structure="block" data-media="container">
      <h3 className="block-header task-title">
        <span className="material-symbols-outlined">{icon}</span>
        {title}
      </h3>
      <div className="tasks-wrapper">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
