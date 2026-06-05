import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2'

const FORM_ENDPOINT = 'https://formspree.io/f/your-form-id'
const WHATSAPP_NUMBER = '1234567890' // Replace with your WhatsApp number
const TELEGRAM_USERNAME = 'your_telegram_username' // Replace with your Telegram username

export default function Contact() {
  const [status, setStatus] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  async function onSubmit(data) {
    setStatus(null)
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact-page">
      <div className="section-header">
        <p className="eyebrow">Contact</p>
        <h1>Send a project brief or request an operations review.</h1>
        <p>
          Use the form below to request a proposal, schedule a consultation,
          or ask about a plant survey.
        </p>
      </div>

      <div className="contact-channels">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Bluefield%20Solutions`}
          target="_blank"
          rel="noopener noreferrer"
          className="channel-card whatsapp"
        >
          <div className="channel-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 0C7.2 0 0 7.2 0 16c0 2.8.8 5.6 2.2 8l-2.2 6.4L8 26.8c2.4 1.4 5.2 2.2 8 2.2 8.8 0 16-7.2 16-16S24.8 0 16 0zm0 29c-2.6 0-5.2-.6-7.4-1.8l-.6-.3L3 28l.8-2.3-.2-.6C2.2 21.2 1.6 18.6 1.6 16c0-7.8 6.4-14.2 14.4-14.2s14.2 6.4 14.2 14.2-6.4 14.2-14.2 14.2zm7.8-10.6c-.4-.2-2.6-1.3-3-1.4-.4-.2-.8-.2-1.2.2-.4.4-1.4 1.4-1.8 1.8-.4.4-.8.4-1.2.2-.4-.2-1.6-.6-3.2-2-1.2-1-2-2.4-2.2-2.8-.2-.4 0-.8.2-1 .2-.2.4-.6.6-.8.2-.2.2-.4.4-.8.2-.4.2-.8 0-1.2-.2-.4-1.2-2.8-1.6-3.8-.4-1-.8-.8-1.2-.8h-1c-.4 0-1 .2-1.6.8-1.4 1.4-1.8 3.2-1.8 5 0 1.8.8 4.2 2.2 6.2 2.8 4.2 7.2 5.8 10 5.8 1 0 2-.2 2.8-.6 1-.4 1.8-.8 2-.8.6 0 .8-.4.8-.8 0-1.6-1-3.2-1.4-3.4z" />
            </svg>
          </div>
          <h3>WhatsApp</h3>
          <p>Chat with us on WhatsApp for quick responses</p>
        </a>

        <a
          href={`https://t.me/${TELEGRAM_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="channel-card telegram"
        >
          <div className="channel-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm6.6-13.4l-9.2-3.6c-.8-.4-1.4-.2-1.4.8v2.2l-5 2.4c-.6.2-.6.6 0 .8l5 2.4v2.2c0 1 .6 1.2 1.4.8l9.2-3.6c.8-.4.8-1 0-1.4z" />
            </svg>
          </div>
          <h3>Telegram</h3>
          <p>Reach us on Telegram for instant messaging</p>
        </a>

        <div className="channel-card email">
          <div className="channel-icon">
            <HiOutlineEnvelope />
          </div>
          <h3>Email</h3>
          <p>hubs4solutions@gmail.com</p>
        </div>

        <div className="channel-card phone">
          <div className="channel-icon">
            <HiOutlinePhone />
          </div>
          <h3>Phone</h3>
          <p>+251-946-776-979</p>
          <p>+251-913-110-204</p>
        </div>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name
            <input type="text" {...register('name', { required: true })} />
            {errors.name && <span className="field-error">Required</span>}
          </label>
          <label>
            Email
            <input
              type="email"
              {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors.email && <span className="field-error">Enter a valid email</span>}
          </label>
          <label>
            Company
            <input type="text" {...register('company')} />
          </label>
          <label>
            Message
            <textarea rows="6" {...register('message', { required: true })} />
            {errors.message && <span className="field-error">Required</span>}
          </label>
          <button type="submit" className="form-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>
          {status === 'success' && <p className="form-status success">Message received — we will reply shortly.</p>}
          {status === 'error' && <p className="form-status error">Unable to send message. Please try again later.</p>}
        </form>

        <aside className="contact-details">
          <div>
            <h2>Office</h2>
            <p>Addis Ababa</p>
            <p>Ethiopia</p>
          </div>
          <div>
            <h2>Office hours</h2>
            <p>Mon–Fri, 8:00 AM – 5:00 PM PT</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
