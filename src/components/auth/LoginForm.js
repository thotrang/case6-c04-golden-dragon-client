import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from '../../context/constants';
import axios from 'axios';

function LoginForm() {
    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({
        userName: '',
        password: '',
    });
    const { userName, password } = loginForm;
    const [formErrors, setFormErrors] = useState({});

    const onChangeLoginForm = (event) => setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
    const validate = (values) => {
        const errors = {};
        if (!values.userName) {
            errors.userName = 'Username is required!';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const login = (e) => {
        e.preventDefault();
        console.warn(loginForm);
        setFormErrors(validate(loginForm));
        axios
            .post(`${apiUrl}/login`, loginForm)
            .then(function (response) {
                console.log(response.data);
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);
                navigate('/home');
                return response.data;
            })
            .catch(function (error) {
                console.log(error.response.data.message);
            });
    };
    return (
        <div>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="user-name" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="user-Name"
                                    name="userName"
                                    type="text"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="User name"
                                    value={userName}
                                    onChange={onChangeLoginForm}
                                />
                            </div>
                            <p>{formErrors.userName}</p>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                    value={password}
                                    onChange={onChangeLoginForm}
                                />
                            </div>
                            <p>{formErrors.password}</p>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={login}
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon
                                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                        aria-hidden="true"
                                    />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
