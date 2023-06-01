import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import GreatBritain from '/src/assets/icons/GreatBritain.svg';
import Spain from '/src/assets/icons/Spain.png';
import ArrowDown from '/src/assets/icons/ArrowDown.svg';

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  border: none;
  outline: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 113px;
  height: 32px;
  background-color: var(--gray100);
  border-radius: 40px;
  padding: 6px 13px 6px 11px;
  margin-top: 4px;
  cursor: pointer;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: var(--gray600);
    margin: 0 8px 0 4px;
  }

  &:hover {
    background-color: var(--gray200);
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 113px;
  z-index: 1;
  background-color: #ffffff;
  list-style-type: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: var(--gray600);

  &:hover {
    background-color: var(--neutral100);
  }
`;

const FlagIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const ArrowIcon = styled.img<{ isOpen: boolean }>`
  transition: transform 0.3s;

  ${({ isOpen }) => isOpen && 'transform: rotate(180deg);'}
`;

const languages = [
  { code: 'en', name: 'English', src: GreatBritain },
  { code: 'es', name: 'Spanish', src: Spain },
];

interface Language {
  code: string;
  name: string;
  src: string;
}

export const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        <FlagIcon src={selectedLanguage.src} alt={selectedLanguage.name} />
        <span>{selectedLanguage.name}</span>
        <ArrowIcon isOpen={isOpen} src={ArrowDown} alt="Dropdown Arrow" />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {languages.map((language) => (
            <DropdownItem key={language.code} onClick={() => selectLanguage(language)}>
              <FlagIcon src={language.src} alt={language.name} />
              <span>{language.name}</span>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};
