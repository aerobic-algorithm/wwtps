import { useTranslation } from 'react-i18next'
import TeamCard from '../components/TeamCard'
import { team } from '../data/team'

export default function Team() {
  const { t } = useTranslation()
  const translatedMembers = t('team.members', { returnObjects: true })

  return (
    <section className="team-page">
      <div className="section-header">
        <p className="eyebrow">{t('team.eyebrow')}</p>
        <h1>{t('team.title')}</h1>
        <p>{t('team.description')}</p>
      </div>
      <div className="team-grid">
        {team.map((member, idx) => (
          <TeamCard
            key={member.name}
            {...member}
            name={translatedMembers[idx]?.name || member.name}
            role={translatedMembers[idx]?.role || member.role}
            bio={translatedMembers[idx]?.bio || member.bio}
            skills={translatedMembers[idx]?.skills || member.skills}
          />
        ))}
      </div>
    </section>
  )
}
