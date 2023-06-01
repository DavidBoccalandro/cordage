import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface INavButtonProps {
  to: string;
  children: React.ReactNode;
  activeClassName?: string;
}

const NavButtonContainer = styled(NavLink) <INavButtonProps>`
  text-decoration: none;
  font-size: 20px;
  padding: 18px 4px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: var(--neutral400);

  &.active {
    color: var(--celeste600);
    box-shadow: inset 0px -4px 0px var(--celeste600);
    transition: box-shadow 0.2s ease-in-out;
  }

  &:hover:not(.active), :focus-visible:not(.active) {
    color: var(--neutral500);
    transition: all 0.4s ease-in-out;
  }

  &:active {
    color: var(--celeste700);
    box-shadow: inset 0px -2px 0px var(--celeste700);
    transition: all 0.0s ease-in;
  }
`;

export const NavButton = ({ to, children }: INavButtonProps) => {
  return (
    <NavButtonContainer to={to}>
      {children}
    </NavButtonContainer>
  );
};
