import { FC } from 'react';

interface Props {
	iconClass: string;
	title: string;
	text: string;
}

export const FunctionalityItem: FC<Props> = ({ iconClass, title, text }) => {
	return (
		<>
			<div className="functionality-card">
				<i className={`fas fa-${iconClass}`}></i>
				<div className="functionality-content">
					<p className="item-title title">{title}</p>
					<p className="item-text text">{text}</p>
				</div>
			</div>
		</>
	);
};
