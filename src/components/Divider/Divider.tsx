import styled from 'styled-components';

const DividerContainer = styled.hr`
	border: 1px solid var(--neutral200);
	width: 100%;
	margin: 24px 0;
`;

export const Divider = () => {
	return <DividerContainer />;
};
