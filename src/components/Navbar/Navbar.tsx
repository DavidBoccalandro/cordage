import styled from 'styled-components';
import { Logo, NavButton, ProfileAvatar, LanguageDropdown } from './components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 36px;
  background-color: var(--white);
  height: 64px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: var(--gray300);
`;

const NavButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
`

const ProfileContainer = styled.div`
  display: flex;
  gap: 29px;
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <NavButtonsContainer>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/users">Users</NavButton>
        <NavButton to="/glossary">Glossary</NavButton>
        <NavButton to="/log">Log</NavButton>
      </NavButtonsContainer>
      <ProfileContainer>
        <LanguageDropdown />
        <ProfileAvatar src="" alt="" />
      </ProfileContainer>
    </NavbarContainer>
  );
};
