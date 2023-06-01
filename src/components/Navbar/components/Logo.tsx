import { Link } from 'react-router-dom';
import logoIcon from '/src/assets/icons/Logo.svg';

export const Logo = () => {
  return (
    <Link to="/glossary">
      <img src={logoIcon} alt="Logo" />
    </Link>
  );
};
