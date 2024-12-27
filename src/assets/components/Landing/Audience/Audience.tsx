import { FC } from 'react';
import { BenefitsItem } from './BenefitsItem';
import preview from '../../../images/Audience/site-preview.png';

export const Audience: FC = () => {
	return (
		<>
			<div className="audience-container">
				<div className="audience-title title">Для всех и каждого!</div>
				<div className="audience-content">
					<div className="preview">
						<img src={preview} alt="" />
					</div>
					<div className="benefits">
						<BenefitsItem text="Здесь каждый ролевик найдет с кем сыграть!" />
						<div className="benefits-separator"></div>
						<BenefitsItem text="Авторы всегда могут поучаствовать в работе с миром" />
						<div className="benefits-separator"></div>
						<BenefitsItem text="Гейм-мастеры имеют много возможностей для развития сюжета" />
					</div>
				</div>
			</div>
		</>
	);
};
