import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';
import {
	bgColor,
	textColor,
	fontFamily,
	fontSize,
	fontWeight
} from './assets/variables.ts';

export const GlobalStyles = createGlobalStyle`
* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: $ledger;
		color: white;
	}

	body {
		background-color: ${bgColor.bg3};
	}

	a {
		text-decoration: none;
		font-family: ${fontFamily.inter};
		transition: 0.3s ease color;
		&:hover {
			color: ${textColor.header};
		}
	}

	.title {
		font-family: ${fontFamily.ysabeauSC};
		font-size: ${fontSize.large};
		color: ${textColor.header};
	}

	.text {
		font-family: ${fontFamily.ledger};
		font-size: ${fontSize.medium};
		font-weight: ${fontWeight.medium};
		color: ${textColor.text};
	}

	.button {
		font-family: ${fontFamily.ysabeauSC};
		font-weight: ${fontWeight.semibold};
		font-size: ${fontSize.medium};
		color: ${textColor.header};
		padding: 13px 60px;
		border-radius: 10px;
		border: none;
		background-color: rgba(0, 0, 0, 0.5);
		transition: 0.3s ease background-color, 0.3s ease box-shadow,
			0.3s ease color;
		&:hover {
			background-color: black;
			color: ${textColor.textHover};
			box-shadow: 0 0 0 2px ${textColor.textHover};
		}
	}

	.fas {
		color: ${textColor.header};
		font-size: ${fontSize.xLarge};
	}
`;

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<GlobalStyles />
		<App />
	</StrictMode>
);
