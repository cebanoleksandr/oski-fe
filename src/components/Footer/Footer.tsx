import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="footer bg-primary">
      <Link to="/contacts" className="text-light">
        Contacts
      </Link>
    </div>
  );
}
