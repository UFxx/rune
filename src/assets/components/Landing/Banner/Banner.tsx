import { FC } from 'react';
import bg from '../../../images/Main/main-bg.png';

export const Banner: FC = () => {
	return (
		<>
			<div className="banner-container">
				<div className="bg-img">
					<img src={bg} alt="" />
				</div>
				<div className="banner-content">
					<div className="logo">
						<p>Логотип</p>
					</div>
					<div className="banner-info">
						<p className="info-title title">{document.title}</p>
						<p className="info-text text">
							Платформа для текстовой онлайн ролевой игры по авторской вселенной{' '}
							{document.title}
						</p>
						<button>Прочитать подробнее</button>
					</div>
				</div>
			</div>
		</>
	);
};
