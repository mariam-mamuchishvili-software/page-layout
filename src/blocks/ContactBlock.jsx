import { useState } from 'react'
import FormInput from '../components/FormInput'
import FormTextarea from '../components/FormTextarea'
import { sendContact } from '../services/api'

export default function ContactBlock() {
  const [flash, setFlash] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    await sendContact(data)
    setFlash('Your message has been sent!')
    e.target.reset()
  }

  return (
    <div className="contact-block" data-layout-structure="block" data-media="container">
      <h3 className="block-header">
        <span className="material-symbols-outlined">send</span>
        Contact Us
      </h3>
      {flash && <div className="alert alert--success">{flash}</div>}
      <form
        className="contact-form"
        data-layout-structure="component"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <FormInput
            id="contact-name"
            name="name"
            label="Name"
            placeholder="Your name"
            autoComplete="name"
            required
            minLength={2}
            requiredMsg="Name is required."
            invalidMsg="At least 2 characters required."
            successMsg="Looks good!"
          />
          <FormInput
            id="contact-email"
            name="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            requiredMsg="Email is required."
            invalidMsg="Enter a valid email address."
            successMsg="Valid email address."
          />
        </div>
        <FormInput
          id="contact-subject"
          name="subject"
          label="Subject"
          placeholder="What's this about?"
          required
          minLength={3}
          requiredMsg="Subject is required."
          invalidMsg="At least 3 characters required."
          successMsg="Looks good!"
        />
        <FormTextarea
          id="contact-message"
          name="message"
          label="Message"
          placeholder="Your message…"
          rows={5}
          required
          minLength={10}
          requiredMsg="Message is required."
          invalidMsg="At least 10 characters required."
          successMsg="Great, thanks!"
        />
        <button className="form-submit" type="submit">
          <span className="material-symbols-outlined">send</span>
          Send Message
        </button>
      </form>
    </div>
  )
}
