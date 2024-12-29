import { FC } from 'react';
import styled from 'styled-components';
import { fontFamily, fontSize, textColor } from '../../../variables';

interface Props {
	text: string;
	extended?: boolean;
}

export const AboutItem: FC<Props> = ({ text, extended }) => {
	return (
		<>
			{!extended ? (
				<Item>
					<Text>{text}</Text>
				</Item>
			) : (
				<Item>
					<ItemExtendedContainer>
						<Text>{text}</Text>
						<Button className="button">Читать подробнее</Button>
						<ExtendedText>
							{document.title} - фэнтези мир меча и магии, в котором каждое
							существо - маленькая песчинка в огромной пустыни истории. Тысячи
							лет, миллионы разных существ, государств, войн, “концов света” и
							много чего другого. Действия развернуться на материке Название
							материка. Несколько рас, которые поделили территорию между собой и
							устроили военно-политические “игры” за право зваться “Королями”
							этой земли. Каждая раса имеет свои земли, свои преимущества и
							рычаги давления на “конкурентов”. Для каждого эта “игра” важнее
							жизни своей. Но не каждый в ней “игрок”. Вряд ли обычный фермер
							как то может повлиять на судьбу государства, правда? Только вот
							каждый фермер имеет возможность стать “больше” чем просто
							фермером, взращивая свою монополию на рынке и устремляясь в высшие
							сословия. Каждый строит свою судьбу по своему, все в ваших руках!
						</ExtendedText>
					</ItemExtendedContainer>
				</Item>
			)}
		</>
	);
};

const Text = styled.p`
	width: 624px;
	text-align: center;
	font-size: ${fontSize.xSmall};
	font-family: ${fontFamily.ledger};
`;

const Item = styled.div`
	p {
		width: 624px;
		text-align: center;
		font-size: ${fontSize.xSmall};
	}
`;

const ExtendedText = styled.p`
	opacity: 0;
	font-size: ${fontSize.medium} !important;
	transform: translateY(-140px);
`;

const ItemExtendedContainer = styled.div`
	position: absolute;
	top: calc(100% + 20px);
	height: 165px;
	overflow-y: hidden;
	padding-right: 90px;
	border-right: 2px solid ${textColor.textHover};
	transition: 0.3s ease height;
	p {
		position: relative;
		transition: 0.3s ease width, 0.3s ease opacity;
	}
	&:hover {
		transition-delay: 0.9s;
		height: 260px;
	}
	&:hover ${Text} {
		opacity: 0;
	}
	&:hover ${ExtendedText} {
		transition-delay: 0.3s, 0.6s;
		width: 1712px;
		opacity: 100;
	}
`;

const Button = styled.button`
	position: absolute;
	top: 200px;
	left: 50%;
	transform: translateX(-50%);
`;
