import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { FC } from 'react';

export const RootPage: FC = () => {
	return (
		<>
			<Outlet />
			<TanStackRouterDevtools />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
};
