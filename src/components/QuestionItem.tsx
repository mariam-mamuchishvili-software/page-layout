import type { Question } from "../types/question.types";

interface Props {
  question: Question;
}

export default function QuestionItem({ question }: Props) {
  const { title, body } = question;
  return (
    <div className="question" data-layout-structure="component">
      <details>
        <summary dangerouslySetInnerHTML={{ __html: title }} />
        <p className="answer" dangerouslySetInnerHTML={{ __html: body }} />
      </details>
    </div>
  );
}
