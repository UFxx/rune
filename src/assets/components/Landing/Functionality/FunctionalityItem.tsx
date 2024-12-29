import styled from 'styled-components';

import { FC } from 'react';
import {
	bgColor,
	fontFamily,
	fontSize,
	fontWeight,
	textColor
} from '../../../variables';

interface Props {
	iconClass: string;
	title: string;
	text: string;
}

export const FunctionalityItem: FC<Props> = ({ iconClass, title, text }) => {
	return (
		<>
			<Card>
				<i className={`fas fa-${iconClass}`}></i>
				<Content>
					<Title>{title}</Title>
					<Text>{text}</Text>
				</Content>
			</Card>
		</>
	);
};

const Card = styled.div`
	display: inline-block;
	text-align: center;
	row-gap: 15px;
	transition: 0.3s ease transform;
	&:hover {
		transform: translateY(-8px);
	}
	&:hover div {
		box-shadow: 0 0 0 2px ${textColor.textHover};
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${bgColor.bg3};
	padding: 47px 15px;
	height: 270px;
	border-radius: 15px;
	margin-top: 40px;
	transition: 0.3s ease box-shadow;
	p {
		user-select: none;
	}
`;

const Title = styled.p`
	font-size: ${fontSize.xLarge};
	font-weight: ${fontWeight.bold};
	color: ${textColor.header};
	font-family: ${fontFamily.ysabeauSC};
`;

const Text = styled.p`
	width: 333px;
	margin-top: 15px;
	font-size: ${fontSize.small};
	font-family: ${fontFamily.ledger};
`;
