import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import TeamCard from '../components/TeamCard'
import TeamModal from '../components/TeamModal'
import AnimatedSection from '../components/AnimatedSection'
import { team } from '../data/team'

export default function Team() {
  const { t } = useTranslation()
  const translatedMembers = t('team.members', { returnObjects: true })
  const [modalMember, setModalMember] = useState(null)

  const members = team.map((member, idx) => ({
    ...member,
    name: translatedMembers[idx]?.name || member.name,
    role: translatedMembers[idx]?.role || member.role,
    bio: translatedMembers[idx]?.bio || member.bio,
    skills: translatedMembers[idx]?.skills || member.skills,
  }))

  return (
    <section className="team-page">
      <Seo title="Team" description={t('team.description')} path="/team" />

      <AnimatedSection className="section-header">
        <p className="eyebrow">{t('team.eyebrow')}</p>
        <h1>{t('team.title')}</h1>
        <p>{t('team.description')}</p>
      </AnimatedSection>
      <div className="team-grid">
        {members.map((member, idx) => (
          <AnimatedSection key={member.name} style={{ animationDelay: `${idx * 0.1}s` }}>
            <button
              type="button"
              className="team-card-btn"
              onClick={() => setModalMember(member)}
              aria-label={`View ${member.name} details`}
            >
              <TeamCard {...member} />
            </button>
          </AnimatedSection>
        ))}
      </div>

      {modalMember && (
        <TeamModal member={modalMember} onClose={() => setModalMember(null)} />
      )}
    </section>
  )
}
