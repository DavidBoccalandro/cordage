import { ReactNode } from 'react';
import styled from 'styled-components';

const GlossaryItemContainer = styled.span`
  display: inline-block;
`
interface GlossaryItemProps {
  children: ReactNode;
}

export const GlossaryItem = ({ children }: GlossaryItemProps) => {
  return (
    <GlossaryItemContainer>
      {children}
    </GlossaryItemContainer>
  );
};
