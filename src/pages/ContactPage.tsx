import BaseLayout from "../layouts/BaseLayout";
import ContactBlock from "../blocks/ContactBlock";
import ContactItem from "../components/ContactItem";

export default function ContactPage() {
  return (
    <BaseLayout
      title="Contact Us"
      subtitle="We'd love to hear from you — reach out any time."
    >
      <div
        className="contact-info"
        data-layout-structure="block"
        data-media="container"
      >
        <h3 className="block-header">
          <span className="material-symbols-outlined">contacts</span>
          Get In Touch
        </h3>
        <ul className="contact-list">
          <ContactItem icon="location_on">
            123 Main Street, Springfield, USA
          </ContactItem>
          <ContactItem icon="phone">+1 (555) 000-1234</ContactItem>
          <ContactItem icon="mail">hello@pagelayout.dev</ContactItem>
          <ContactItem icon="schedule">Mon – Fri, 9am – 6pm</ContactItem>
        </ul>
      </div>
      <ContactBlock />
    </BaseLayout>
  );
}
