export default function QuestionItem({ question }) {
  return (
    <div className="question" data-layout-structure="component">
      <details>
        <summary dangerouslySetInnerHTML={{ __html: question.title }} />
        <p className="answer" dangerouslySetInnerHTML={{ __html: question.body }} />
      </details>
    </div>
  )
}
