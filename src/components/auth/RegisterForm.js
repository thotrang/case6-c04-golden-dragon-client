import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from '../../context/constants';
import axios from 'axios';

function RegisterForm() {
    const navigate = useNavigate();

    const [registerForm, setRegisterForm] = useState({
        userName: '',
        password: '',
        confirmPassword: '',
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const { userName, password, confirmPassword, name, email, phone, address } = registerForm;

    const onChangeRegisterForm = (event) =>
        setRegisterForm({ ...registerForm, [event.target.name]: event.target.value });

    const register = (e) => {
        e.preventDefault();
        console.warn(registerForm);
        axios
            .post(`${apiUrl}/register`, registerForm)
            .then(function (response) {
                console.log(response.data);
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);
                navigate('/login');
                return response.data;
            })
            .catch(function (error) {
                console.log(error.response.data.message);
            });
    };

    return (
        <div>
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
                                Sign up for an account
                            </h2>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" className="border-2" />
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
                                        onChange={onChangeRegisterForm}
                                    />
                                </div>
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
                                        onChange={onChangeRegisterForm}
                                    />
                                </div>
                                <div>
                                    {/* <label htmlFor="password" className="sr-only">
                                        Confirm Password
                                    </label> */}
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={onChangeRegisterForm}
                                    />
                                </div>
                                <div>
                                    {/* <label htmlFor="password" className="sr-only">
                                        Password
                                    </label> */}
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Name"
                                        value={name}
                                        onChange={onChangeRegisterForm}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Email"
                                        value={email}
                                        onChange={onChangeRegisterForm}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Phone"
                                        value={phone}
                                        onChange={onChangeRegisterForm}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Address"
                                        value={address}
                                        onChange={onChangeRegisterForm}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    onClick={register}
                                >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LockClosedIcon
                                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
