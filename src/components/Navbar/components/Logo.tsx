import styled from 'styled-components';
import logoIcon from '../../../assets/icons/Logo.svg';

const LogoContainer = styled.div`
  /* Estilos para el dropdown de idioma */
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <img src={logoIcon} alt="Logo" />
    </LogoContainer>
  );
};
