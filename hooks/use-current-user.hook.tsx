'use client';

import { useEffect, useState } from 'react';
import * as fcl from '@onflow/fcl';

export default function useCurrentUser() {
    const [user, setUser] = useState({ addr: null });
    const [error, setError] = useState<unknown>(null);

    const logIn = async () => {
        try {
            await fcl.authenticate();
        } catch (err) {
            setError(err);
        }
    };

    const logOut = async () => {
        try {
            await fcl.unauthenticate();
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        fcl.currentUser().subscribe(setUser);
    }, []);

    return [user, user?.addr != null, logIn, logOut, error];
}