import { ReactNode } from "react";
import styled from "styled-components";

const GlossaryTermContainer = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--neutral800);
  padding: 8px 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface GlossaryTermProps {
  children: ReactNode;
}

export const GlossaryTerm = ({ children }: GlossaryTermProps) => {
  return <GlossaryTermContainer>{children}</GlossaryTermContainer>;
};
