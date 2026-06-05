export default function TeamCard({ name, role, bio, skills, avatar }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <article className="team-card">
      <div className="team-avatar" aria-hidden={!avatar}>
        {avatar ? <img src={avatar} alt={`${name} photo`} /> : initials}
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
