import { FC, useEffect, useReducer } from 'react';
import { Header } from './Header/Header';
import { Login } from './Auth/Login';
import { Registration } from './Auth/Registration';
import { ConfirmEmail } from './Auth/ConfirmEmail';
import { Banner } from './Banner/Banner';
import { Functionality } from './Functionality/Functionality';
import { Audience } from './Audience/Audience';
import { About } from './About/About';
import { CTO } from './CTO/CTO';
import { Footer } from './Footer/Footer';

import { HeaderReducerAction } from '../../types';

export const Landing: FC = () => {
	interface IReducerState {
		loginOpened: boolean;
		registrationOpened: boolean;
		forgotPasswordOpened: boolean;
		confirmEmailOpened: boolean;
	}

	const initialState: IReducerState = {
		loginOpened: false,
		registrationOpened: false,
		forgotPasswordOpened: false,
		confirmEmailOpened: false
	};

	function reducer(
		state: IReducerState,
		action: { type: HeaderReducerAction }
	): IReducerState {
		switch (action.type) {
			case 'openLogin':
				return {
					loginOpened: true,
					registrationOpened: false,
					forgotPasswordOpened: false,
					confirmEmailOpened: false
				};
			case 'openRegistration':
				return {
					loginOpened: false,
					registrationOpened: true,
					forgotPasswordOpened: false,
					confirmEmailOpened: false
				};
			case 'openForgotPassword':
				return {
					loginOpened: false,
					registrationOpened: false,
					forgotPasswordOpened: true,
					confirmEmailOpened: false
				};
			case 'openConfirmEmail':
				return {
					loginOpened: false,
					registrationOpened: false,
					forgotPasswordOpened: false,
					confirmEmailOpened: true
				};
			case 'closeForm':
				return {
					loginOpened: false,
					registrationOpened: false,
					forgotPasswordOpened: false,
					confirmEmailOpened: false
				};
			default:
				return state;
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		if (
			state.confirmEmailOpened ||
			state.loginOpened ||
			state.registrationOpened ||
			state.forgotPasswordOpened
		) {
			document.body.style.overflow = 'hidden';
			// To prevent content from moving when scrollbar hidden
			document.body.style.marginRight = '22px';
		} else {
			document.body.style.overflow = 'auto';
			document.body.style.marginRight = '0';
		}
	}, [state]);

	return (
		<>
			<Header dispatch={dispatch} />
			{state.loginOpened && <Login dispatch={dispatch} />}
			{state.registrationOpened && <Registration dispatch={dispatch} />}
			{state.confirmEmailOpened && <ConfirmEmail dispatch={dispatch} />}
			<main>
				<Banner />
				<Functionality />
				<Audience />
				<About />
				<CTO dispatch={dispatch} />
			</main>
			<Footer />
		</>
	);
};
