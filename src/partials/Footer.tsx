import ContactItem from '../components/ContactItem'
import SocialIcon from '../components/SocialIcon'

const socialLinks = [
  { id: 1, href: '#', label: 'Facebook', iconClass: 'fab fa-facebook-f' },
  { id: 2, href: '#', label: 'Twitter', iconClass: 'fab fa-x-twitter' },
  { id: 3, href: '#', label: 'Instagram', iconClass: 'fab fa-instagram' },
  { id: 4, href: '#', label: 'GitHub', iconClass: 'fab fa-github' },
]

export default function Footer() {
  return (
    <footer data-layout-structure="partial">
      <div className="footer-map" data-layout-structure="block">
        <h3 className="block-header map-title">
          <span className="material-symbols-outlined">location_on</span>
          Georgia, Tbilisi
        </h3>
        <div className="map-embed" data-layout-structure="component">
          <iframe
            src="https://maps.google.com/maps?q=Tbilisi,Georgia&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tbilisi, Georgia"
          />
        </div>
      </div>

      <div className="footer-contact" data-layout-structure="block">
        <h3 className="block-header contact-title">
          <span className="material-symbols-outlined">contact_mail</span>
          Contact Info
        </h3>
        <ul className="contact-list">
          <ContactItem icon="location_on">
            <span>42 Component Lane, CSS City</span>
          </ContactItem>
          <ContactItem icon="mail">
            <a href="mailto:hello@layoutcomponents.dev">hello@layoutcomponents.dev</a>
          </ContactItem>
          <ContactItem icon="phone">
            <a href="tel:+15551234567">+1 (555) 123-4567</a>
          </ContactItem>
        </ul>
      </div>

      <div className="social-links" data-layout-structure="block">
        <h3 className="block-header social-title">
          <span className="material-symbols-outlined">share</span>
          Follow Us
        </h3>
        <div className="social-icons">
          {socialLinks.map((s) => (
            <SocialIcon key={s.id} href={s.href} label={s.label} iconClass={s.iconClass} />
          ))}
        </div>
      </div>
    </footer>
  )
}
