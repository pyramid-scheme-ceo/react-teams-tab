import React from 'react';
import { AuthHelper } from '../../helpers';

export default function Login() {
    return <button onClick={AuthHelper.Login}>Click to log in</button>
}