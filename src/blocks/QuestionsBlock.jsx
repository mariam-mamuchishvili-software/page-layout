import { useState, useEffect } from 'react'
import QuestionItem from '../components/QuestionItem'
import { getQuestions } from '../services/api'

export default function QuestionsBlock({ title = 'Questions', icon = 'help_outline' }) {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    getQuestions().then((data) => setQuestions(data))
  }, [])

  return (
    <div className="questions-block" data-layout-structure="block" data-media="container">
      <h3 className="block-header">
        <span className="material-symbols-outlined">{icon}</span>
        {title}
      </h3>
      <div className="questions-wrapper">
        {questions.map((q) => (
          <QuestionItem key={q.id} question={q} />
        ))}
      </div>
    </div>
  )
}
