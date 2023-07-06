import styled from 'styled-components';

const DividerContainer = styled.hr`
	border: 1px solid var(--neutral200);
	width: 100%;
	margin: 20px 0 28px 0;
`;

export const Divider = () => {
	return <DividerContainer />;
};
