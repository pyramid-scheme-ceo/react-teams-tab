import React from 'react';
import { AuthHelper } from '../../helpers';

export default function SignInStart() {
    AuthHelper.StartSignIn();
    return <h1>Starting sign in...</h1>
}