import { FC } from 'react';
import styled from 'styled-components';
import { bgColor, fontFamily, fontSize, textColor } from '../../../variables';

interface Props {
	text: string;
}

export const BenefitsItem: FC<Props> = ({ text }) => {
	return (
		<>
			<Item>
				<Text>{text}</Text>
			</Item>
		</>
	);
};

const Item = styled.div`
	padding: 30px 8px;
	background-color: ${bgColor.bg2};
	border-radius: 20px;
	transition: 0.3s ease box-shadow;
	user-select: none;
	&:hover {
		box-shadow: 0 0 0 2px ${textColor.textHover};
	}
`;

const Text = styled.p`
	text-align: center;
	width: 500px;
	font-family: ${fontFamily.ledger};
	font-size: ${fontSize.xSmall};
`;
