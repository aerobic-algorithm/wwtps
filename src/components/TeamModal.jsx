import { useEffect, useCallback } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineXMark, HiOutlineEnvelope } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function TeamModal({ member, onClose }) {
  const { t } = useTranslation()

  const handleKey = useCallback(
    (e) => { if (e.key === 'Escape') onClose() },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (!member) return null

  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={member.name}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <HiOutlineXMark size={24} />
        </button>

        <div className="modal-avatar">{initials}</div>
        <h2 className="modal-name">{member.name}</h2>
        <p className="modal-role">{member.role}</p>
        <p className="modal-bio">{member.bio}</p>

        {member.skills && (
          <div className="modal-skills">
            {member.skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        )}

        <div className="modal-actions">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-linkedin"
              aria-label={`${member.name} on LinkedIn`}
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
          )}

          <Link to="/contact" className="modal-contact-btn" onClick={onClose}>
            <HiOutlineEnvelope size={18} />
            {t('team.contactCta')}
          </Link>
        </div>
      </div>
    </div>
  )
}
