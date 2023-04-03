import { pageLinks, socialLinks } from "../data.js";

export const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => (
          <li id={link.id}>
            <a href={link.href} className="footer-link">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => (
          <a
            id={link.id}
            href={link.href}
            target="_blank"
            className="footer-icon"
            rel="noreferrer"
          >
            <i className={link.fabClassName}></i>
          </a>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
