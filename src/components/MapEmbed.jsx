export default function MapEmbed() {
  return (
    <div className="map-wrapper">
      <iframe
        title="Office location"
        src="https://www.openstreetmap.org/export/embed.html?bbox=38.7578%2C9.0320%2C38.7618%2C9.0360&amp;layer=mapnik&amp;marker=9.0340%2C38.7598"
        width="100%"
        height="220"
        style={{ border: 0, borderRadius: 16 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="map-credit">
        <a href="https://www.openstreetmap.org/?mlat=9.0340&amp;mlon=38.7598#map=18/9.0340/38.7598" target="_blank" rel="noopener noreferrer">
          View larger map
        </a>
      </p>
    </div>
  )
}
