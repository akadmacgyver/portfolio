import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto:wght@300;400;500;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto+Mono:wght@300;400;500;700&display=swap');
	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	html,
	body,
	#root {
		background: ${({ theme }) => theme.color.white};
		color: ${({ theme }) => theme.color.grey[950]};
		font-family: ${({ theme }) => theme.font.family};
		font-weight: ${({ theme }) => theme.font.weight.regular};
		margin: 0 !important;
		padding: 0 !important;
		height: 100vh;
		width: 100vw;
		font-size: 1rem;
		overflow-x: hidden;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-touch-callout: none;
		user-select: none;
		-ms-user-select: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-o-user-select: none;
		user-drag: none;
		-webkit-user-drag: none;
		-khtml-user-drag: none;
		-moz-user-drag: none;
		-o-user-drag: none;
	}
	
	a {
		text-decoration: none;
		color: inherit;
		outline: none;
	}

	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #fff;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
				background: ${({ theme }) => theme.color.yellow};
		border-radius: 100px;
	}
`
export default GlobalStyle
