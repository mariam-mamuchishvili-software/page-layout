import BaseLayout from "../layouts/BaseLayout";
import QuestionsBlock from "../blocks/QuestionsBlock";

export default function AboutPage() {
  return (
    <BaseLayout
      title="About Us"
      subtitle="Learn who we are, what we do, and why we do it."
    >
      <QuestionsBlock title="Frequently Asked Questions" icon="help_outline" />
    </BaseLayout>
  );
}
