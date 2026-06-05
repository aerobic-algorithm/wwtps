export default function TeamCard({ name, role, bio, skills }) {
  return (
    <article className="team-card">
      <div className="team-avatar" aria-hidden="true">
        {name.split(' ').map((part) => part[0]).join('')}
      </div>
      <div className="team-content">
        <h3>{name}</h3>
        <p className="team-role">{role}</p>
        <p>{bio}</p>
        <div className="team-skills">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
