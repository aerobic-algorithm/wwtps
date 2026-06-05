import TeamCard from '../components/TeamCard'
import { team } from '../data/team'

export default function Team() {
  return (
    <section className="team-page">
      <div className="section-header">
        <p className="eyebrow">Our Team</p>
        <h1>Experienced operators and process engineers.</h1>
        <p>
          A collaborative team of treatment specialists, field engineers, and
          training professionals committed to helping your plant perform.
        </p>
      </div>
      <div className="team-grid">
        {team.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  )
}
