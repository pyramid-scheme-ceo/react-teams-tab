import React from 'react';
import { AuthHelper } from '../../helpers';

export default function SignInEnd() {
    AuthHelper.EndSignIn();
    return <h1>Ending sign in...</h1>
}