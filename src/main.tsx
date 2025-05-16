import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { Provider as StoreProvider } from 'react-redux';
import 'normalize.css';

import { router, queryClient } from '@globals';
import { store } from '@store';

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
	const root = createRoot(rootElement);
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<StoreProvider store={store}>
					<RouterProvider router={router} />
				</StoreProvider>
			</QueryClientProvider>
		</StrictMode>,
	);
}
