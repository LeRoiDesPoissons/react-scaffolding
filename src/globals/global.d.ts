import { router } from '../router';

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__?: DevToolsEnhancerOptions;
	}
}
