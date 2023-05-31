import styled from "styled-components";
import EditIcon from '/src/assets/icons/EditIcon.svg';
import DeleteIcon from '/src/assets/icons/DeleteIcon.svg';

const TermDefinitionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 526px;
  max-height: 370px;
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0px 20px 25px -5px #0000001A;
  box-shadow: 0px 8px 10px -6px #0000001A;
  overflow-y: auto;
  padding: 16px 24px 24px 24px;
  gap: 16px;
  z-index: 7;
`;

const TermDefinitionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .header-title {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;

    h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      margin-top: 2px;
    }

    div.edition-buttons img {
      cursor: pointer;

      &:focus-visible,
      &:hover {
        opacity: .8;
      }

      &:active {
        opacity: 1;
      }
    }
  }

  .header-badge {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--neutral500)
  }
`;

const TermDefinitionBody = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--neutral800);
`;

const TermDefinitionFooter = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--neutral800);

  span.definition-by {
    color: var(--blue500);
    font-weight: 5 00;
  }
`;


export const GlossaryTermDefinition = () => {
  return (
    <TermDefinitionContainer>
      <TermDefinitionHeader>
        <div className="header-title">
          <h2>Adjectival</h2>
          <div className="edition-buttons">
            <img src={EditIcon} alt="Edit Icon" />
            <img src={DeleteIcon} alt="Delete Icon" />
          </div>
        </div>
        <div className="header-badge">
          {/* <img src={} alt="" /> */}
          <span>Non-conformity</span>
        </div>
      </TermDefinitionHeader>
      <TermDefinitionBody>
        <p>
          (of an International Standard as a regional or national standard): publication of a national or
          regional normative document based on a relevant International Standard, or endorsement of an International
          Standard as having the same status as a national normative document, with any deviations from the
          International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005,
          definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).
        </p>
      </TermDefinitionBody>
      <TermDefinitionFooter>
        <span>Definition by</span>
        <span className="definition-by">Alejandra Aguilar Escobar</span>
      </TermDefinitionFooter>
    </TermDefinitionContainer>
  );
};
