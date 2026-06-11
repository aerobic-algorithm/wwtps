import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL = 'https://chat.whatsapp.com/HweVVeixxJHHWKQSap3ARn'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <span className="floating-whatsapp-ring" aria-hidden="true" />
      <FaWhatsapp />
    </a>
  )
}
