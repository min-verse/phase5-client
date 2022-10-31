import React from 'react';

function SignupForm() {

    return (
        <div className="mt-10 sm:mt-0">
            <div className="">
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">

                                    <div className="col-span-6">
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"
                                            className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                            Create Password
                                        </label>
                                        <input
                                            type="password"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;