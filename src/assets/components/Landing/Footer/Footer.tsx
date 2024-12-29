import styled from 'styled-components';

import { FC } from 'react';
import social1 from '../../../images/SocialNetworks/social1.png';
import social2 from '../../../images/SocialNetworks/social2.png';
import social3 from '../../../images/SocialNetworks/social3.png';
import { fontFamily, fontSize } from '../../../variables';

export const Footer: FC = () => {
	return (
		<>
			<Container>
				<Info className="info">
					<Text>{document.title}</Text>
					<Text>Разработано Димой</Text>
					<Text>2024-2025</Text>
				</Info>
				<ContainerItem className="links">
					<Text>Тут еще будут ссылки на другие страницы</Text>
				</ContainerItem>
				<ContainerItem className="social">
					<Text>Ссылки на соц. сети</Text>
					<SocialItems>
						<SocialItem>
							<img src={social1} alt="" />
						</SocialItem>
						<SocialItem>
							<img src={social2} alt="" />
						</SocialItem>
						<SocialItem>
							<img src={social3} alt="" />
						</SocialItem>
					</SocialItems>
				</ContainerItem>
			</Container>
		</>
	);
};

const Container = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 50px 66px;
`;

const Text = styled.p`
	font-size: ${fontSize.xSmall};
	font-family: ${fontFamily.ledger};
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 30px;
`;

const ContainerItem = styled.div`
	align-self: flex-start;
`;

const SocialItems = styled.div`
	margin-top: 20px;
	display: flex;
	column-gap: 20px;
`;

const SocialItem = styled.div`
	background-color: #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	padding: 3px;
	transition: 0.3s ease background-color;
	&:hover {
		background-color: #d9d9d9ac;
	}
`;
