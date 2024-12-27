import { FC } from 'react';
import { IAuthReducerProps } from '../../../types';

export const CTO: FC<IAuthReducerProps> = ({ dispatch }) => {
	return (
		<>
			<div className="cto-container">
				<div className="cto-item">
					<p>Уже есть аккаунт? Войди!</p>
					<p>Мы тебя тут уже заждались если честно</p>
					<button
						className="button"
						onClick={() => dispatch({ type: 'openLogin' })}
					>
						Войти
					</button>
				</div>
				<div className="cto-item-separator"></div>
				<div className="cto-item">
					<p>Ещё нет аккаунта? Создай!</p>
					<p>Это не займёт много времени</p>
					<button
						className="button"
						onClick={() => dispatch({ type: 'openRegistration' })}
					>
						Регистрация
					</button>
				</div>
			</div>
		</>
	);
};
