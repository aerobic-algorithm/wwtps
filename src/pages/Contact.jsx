import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineClipboardDocument, HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2'

const FORM_ENDPOINT = 'https://formspree.io/f/your-form-id'

export default function Contact() {
  const { t } = useTranslation()
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
        <p className="eyebrow">{t('contact.eyebrow')}</p>
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.description')}</p>
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
          <h3>{t('contact.whatsappTitle')}</h3>
          <p>{t('contact.whatsapp')}</p>
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
          <h3>{t('contact.telegramTitle')}</h3>
          <p>{t('contact.telegram')}</p>
        </a>

        <div className="channel-card email">
          <div className="channel-icon">
            <HiOutlineEnvelope />
          </div>
          <h3>{t('contact.emailTitle')}</h3>
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
          {copied === 'hubs4solutions@gmail.com' && <span className="copy-feedback">{t('contact.copied')}</span>}
        </div>

        <div className="channel-card phone">
          <div className="channel-icon">
            <HiOutlinePhone />
          </div>
          <h3>{t('contact.phoneTitle')}</h3>
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
          {copied === '+251-946-776-979' && <span className="copy-feedback">{t('contact.copied')}</span>}
          <div className="contact-line">
            <a href="tel:+251913112204" className="contact-link">
              +251-913-112-204
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
          {copied === '+251-913-112-204' && <span className="copy-feedback">{t('contact.copied')}</span>}
        </div>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label>
            {t('contact.formName')}
            <input type="text" {...register('name', { required: true })} />
            {errors.name && <span className="field-error">{t('contact.formErrorRequired')}</span>}
          </label>
          <label>
            {t('contact.formEmail')}
            <input
              type="email"
              {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors.email && <span className="field-error">{t('contact.formErrorEmail')}</span>}
          </label>
          <label>
            {t('contact.formCompany')}
            <input type="text" {...register('company')} />
          </label>
          <label>
            {t('contact.formMessage')}
            <textarea rows="6" {...register('message', { required: true })} />
            {errors.message && <span className="field-error">{t('contact.formErrorRequired')}</span>}
          </label>
          <button type="submit" className="form-submit" disabled={isSubmitting}>
            {isSubmitting ? t('contact.formSending') : t('contact.formSend')}
          </button>
          {status === 'success' && <p className="form-status success">{t('contact.formSuccess')}</p>}
          {status === 'error' && <p className="form-status error">{t('contact.formError')}</p>}
        </form>

        <aside className="contact-details">
          <div>
            <h2>{t('contact.office')}</h2>
            <p>{t('contact.city')}</p>
            <p>{t('contact.country')}</p>
          </div>
          <div>
            <h2>{t('contact.officeHours')}</h2>
            <p>{t('contact.officeHoursValue')}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
