import { FC } from 'react';
import { IAuthReducerProps } from '../../../types';

export const Header: FC<IAuthReducerProps> = ({ dispatch }) => {
	function scroll(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void {
		switch (e.currentTarget.innerText) {
			case 'Функционал':
				scrollTo({ top: 965, behavior: 'smooth' });
				break;
			case 'Для кого':
				scrollTo({ top: 1510, behavior: 'smooth' });
				break;
			case 'О проекте':
				scrollTo({ top: 2450, behavior: 'smooth' });
				break;
			default:
				scrollTo({ top: 0, behavior: 'smooth' });
				break;
		}
	}

	return (
		<>
			<header>
				<div className="header-left-container">
					<div className="logo"></div>
					<nav>
						<ul>
							<li onClick={(e) => scroll(e)}>
								<a href="#">Функционал</a>
							</li>
							<li onClick={(e) => scroll(e)}>
								<a href="#">Для кого</a>
							</li>
							<li onClick={(e) => scroll(e)}>
								<a href="#">О проекте</a>
							</li>
						</ul>
					</nav>
				</div>
				<button
					id="header-login-button"
					className="button"
					onClick={() => dispatch({ type: 'openLogin' })}
				>
					Войти
				</button>
			</header>
		</>
	);
};
