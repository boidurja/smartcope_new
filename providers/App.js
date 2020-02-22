import React from 'react';
import { AuthProviders } from './Auth';

export function AppProviders ( { children, ...props } ) {

	return (
		<AuthProviders {...props}>
			{ children }
		</AuthProviders>
	);

}
