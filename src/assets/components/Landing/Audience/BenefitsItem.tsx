import { FC } from 'react';

interface Props {
	text: string;
}

export const BenefitsItem: FC<Props> = ({ text }) => {
	return (
		<>
			<div className="benefits-item">
				<p className="text">{text}</p>
			</div>
		</>
	);
};
