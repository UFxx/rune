import { FC } from 'react';
import social1 from '../../../images/SocialNetworks/social1.png';
import social2 from '../../../images/SocialNetworks/social2.png';
import social3 from '../../../images/SocialNetworks/social3.png';

export const Footer: FC = () => {
	return (
		<>
			<footer>
				<div className="info">
					<p>{document.title}</p>
					<p>Разработано Димой</p>
					<p>2024-2025</p>
				</div>
				<div className="links">
					<p>Тут еще будут ссылки на другие страницы</p>
				</div>
				<div className="social">
					<p>Ссылки на соц. сети</p>
					<div className="social-items">
						<div className="social-item">
							<img src={social1} alt="" />
						</div>
						<div className="social-item">
							<img src={social2} alt="" />
						</div>
						<div className="social-item">
							<img src={social3} alt="" />
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
