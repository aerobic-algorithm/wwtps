import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineClipboardDocument, HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2'

const FORM_ENDPOINT = 'https://formspree.io/f/your-form-id'
const WHATSAPP_NUMBER = '1234567890' // Replace with your WhatsApp number
const TELEGRAM_USERNAME = 'your_telegram_username' // Replace with your Telegram username

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [copied, setCopied] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  async function handleCopy(value) {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(value)
        setCopied(value)
        window.setTimeout(() => setCopied(''), 1800)
      } catch (err) {
        console.error('Copy failed', err)
      }
    }
  }

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
          href={`https://chat.whatsapp.com/HweVVeixxJHHWKQSap3ARn`}
          target="_blank"
          rel="noopener noreferrer"
          className="channel-card whatsapp"
        >
          <div className="channel-icon">
            <FaWhatsapp size={28} />
          </div>
          <h3>WhatsApp</h3>
          <p>Chat with us on WhatsApp for quick responses</p>
        </a>

        <a
          href={`https://t.me/+5k6XF0ezsPwzZGM0`}
          target="_blank"
          rel="noopener noreferrer"
          className="channel-card telegram"
        >
          <div className="channel-icon">
            <FaTelegramPlane size={28} />
          </div>
          <h3>Telegram</h3>
          <p>Reach us on Telegram for instant messaging</p>
        </a>

        <div className="channel-card email">
          <div className="channel-icon">
            <HiOutlineEnvelope />
          </div>
          <h3>Email</h3>
          <div className="contact-line">
            <a href="mailto:hubs4solutions@gmail.com" className="contact-link">
              hubs4solutions@gmail.com
            </a>
            <button
              type="button"
              className="copy-icon-button"
              onClick={() => handleCopy('hubs4solutions@gmail.com')}
              aria-label="Copy email address"
            >
              <HiOutlineClipboardDocument />
            </button>
          </div>
          {copied === 'hubs4solutions@gmail.com' && <span className="copy-feedback">Copied!</span>}
        </div>

        <div className="channel-card phone">
          <div className="channel-icon">
            <HiOutlinePhone />
          </div>
          <h3>Phone</h3>
          <div className="contact-line">
            <a href="tel:+251946776979" className="contact-link">
              +251-946-776-979
            </a>
            <button
              type="button"
              className="copy-icon-button"
              onClick={() => handleCopy('+251-946-776-979')}
              aria-label="Copy phone number"
            >
              <HiOutlineClipboardDocument />
            </button>
          </div>
          {copied === '+251-946-776-979' && <span className="copy-feedback">Copied!</span>}
          <div className="contact-line">
            <a href="tel:+251913112204" className="contact-link">
              +251-913-110-204
            </a>
            <button
              type="button"
              className="copy-icon-button"
              onClick={() => handleCopy('+251-913-112-204')}
              aria-label="Copy phone number"
            >
              <HiOutlineClipboardDocument />
            </button>
          </div>
          {copied === '+251-913-110-204' && <span className="copy-feedback">Copied!</span>}
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
