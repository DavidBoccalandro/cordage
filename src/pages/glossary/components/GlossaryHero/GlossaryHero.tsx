import { ChangeEvent, useRef } from 'react';
import styled from 'styled-components';
import heroImage from '/src/assets/images/hero-image.png';
import searchbarIcon from '/src/assets/icons/MagnifyingGlass.svg';
import { Divider } from '../../../../components';

const GlossaryHeroContainer = styled.div`
	margin-bottom: 24px;
	border: 1px solid var(--neutral200);
	background: radial-gradient(
		77.73% 932.35% at 22.27% 59.56%,
		rgba(254, 249, 195, 0.69) 0%,
		rgba(254, 249, 195, 0) 100%
	);
	border-radius: 8px;
	padding: 24px;
	height: 342px;

	hr {
		margin: 16px 0 24px 0;
	}
`;

const GlossaryHeroHeader = styled.div`
	display: flex;
	justify-content: space-between;

	h1 {
		font-weight: 700;
		font-size: 28px;
		line-height: 37.8px;
		color: var(--neutral800);
		margin-top: 1px;
	}

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 20px;
		width: 110px;
		height: 40px;
		background: var(--celeste600);
		color: var(--white);
		border-radius: 4px;
		flex-grow: 0;
		border: none;
		font-weight: 700;
		font-size: 14px;
		line-height: 19px;
		letter-spacing: 0.1px;
	}
`;

const GlossaryHeroBody = styled.div`
	display: flex;
	justify-content: space-between;

	img[alt='Hero Image'] {
		margin: 0 calc(133.94px - 24px) calc(38.77px - 25px) 0;
	}
`;

const SearchbarContainer = styled.div`
	width: 534px;
	margin-left: 8px;

	h2 {
		font-family: var(--fontA);
		font-size: 32px;
		font-weight: 700;
		line-height: 41px;
		color: var(--neutral800);
		margin-bottom: 8px;
	}

	p {
		font-size: 16px;
		font-weight: 400;
		line-height: 22px;
		text-align: left;
		margin-bottom: 24px;
	}
`;

const SearchbarInputContainer = styled.div`
	display: flex;
	width: 534px;
	height: 40px;
	background-color: var(--white);
	border: 1px solid var(--slate200);
	border-radius: 4px;
	padding: 8px 14px;
	cursor: text;

	input {
		flex: 1;
		border: none;
		outline: none;
		font-size: 14px;
		color: var(--neutral800);

		&::placeholder {
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: var(--gray400);
		}
	}

	img {
		margin-right: 8px;
	}
`;

interface IGlossaryHeroProps {
	setSearchInput: (searchValue: string) => void;
}

export const GlossaryHero = ({ setSearchInput }: IGlossaryHeroProps) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleClick = () => {
		inputRef.current?.focus();
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const searchValue = e.target.value;
		setSearchInput(searchValue);
	};

	return (
		<GlossaryHeroContainer>
			<GlossaryHeroHeader>
				<h1>Glossary</h1>
				<button>New Word</button>
			</GlossaryHeroHeader>
			<Divider />
			<GlossaryHeroBody>
				<SearchbarContainer>
					<h2>If you are looking for definitions of a term, find it here</h2>
					<p>
						If you need clarification on a word or just want to brush up on your team knowledge, our glossary is here
						for you.
					</p>
					<SearchbarInputContainer onClick={handleClick}>
						<img src={searchbarIcon} alt="Searchbar Icon" />
						<input
							onChange={handleInputChange}
							ref={inputRef}
							type="search"
							placeholder="Search Words by name or keyword..."
						/>
					</SearchbarInputContainer>
				</SearchbarContainer>
				<img src={heroImage} alt="Hero Image" />
			</GlossaryHeroBody>
		</GlossaryHeroContainer>
	);
};

export default GlossaryHero;
