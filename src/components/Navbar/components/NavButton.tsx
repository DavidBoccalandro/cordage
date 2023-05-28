import { Link } from 'react-router-dom';
import styled from 'styled-components';
import configStyles from '../../../assets/styles/configStyles.json';

interface NavButtonProps {
  to: string;
  isSelected?: boolean;
  children: React.ReactNode;
}

const NavButtonContainer = styled(Link) <NavButtonProps>`
  text-decoration: none;
  font-size: 20px;
  padding: 18px 0;

  ${({ isSelected }) =>
    isSelected &&
    `
      color: ${configStyles.colors['--celeste600']};
      border-bottom: 4px solid ${configStyles.colors['--celeste600']};
    `}
`;

export const NavButton = ({ to, isSelected, children }: NavButtonProps) => {
  return (
    <NavButtonContainer to={to} isSelected={isSelected}>
      {children}
    </NavButtonContainer>
  );
};
