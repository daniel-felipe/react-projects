import React from 'react';

const Form = ({ type, toggleFormType }) => {
    return (
        <form className="w-5/12 p-6">
            <div className="text-center text-gray-500 mb-12">
                {type === 'login' ? (
                    < >
                        <h2 className="text-2xl capitalize font-semibold mb-3">Welcome back!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod assumenda.</p>
                    </>
                ) : (
                    < >
                        <h2 className="text-2xl capitalize font-semibold mb-3">Create your account!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod assumenda.</p>
                    </>
                )}

            </div>
            <div>
                {type === 'register' && (
                    <div className="grid grid-cols-2 gap-3 mb-5">
                        <div>
                            <label className="block mb-3 uppercase font-semibold text-gray-400" htmlFor="">first name</label>
                            <input className="w-full h-12 px-3 border text-gray-500" type="text" placeholder="Enter your first name" name="name" />
                        </div>
                        <div>
                            <label className="block mb-3 uppercase font-semibold text-gray-400" htmlFor="">last name</label>
                            <input className="w-full h-12 px-3 border text-gray-500" type="text" placeholder="Enter your last name" name="second_name" />
                        </div>
                    </div>
                )}
                <div className="mb-5">
                    <label className="block mb-3 uppercase font-semibold text-gray-400" htmlFor="">Email</label>
                    <input className="w-full h-12 px-3 border text-gray-500" type="text" placeholder="Enter your email" name="email" />
                </div>
                <div className="mb-5">
                    <label className="block mb-3 uppercase font-semibold text-gray-400" htmlFor="">Password</label>
                    <input className="w-full h-12 px-3 border text-gray-500" type="text" placeholder="Enter your email" name="password" />
                </div>
                {type === 'login' && (
                    <div className="mb-5">
                        <label className="text-gray-400 font-semibold flex items-center" htmlFor="">
                            <input className="w-5 h-5 cursor-pointer mr-3" type="checkbox" name="remember" /> Remember-me
                        </label>
                    </div>
                )}
            </div>
            <div>
                <button type="submit" className="w-full h-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white uppercase shadow-lg rounded-lg transition hover:shadow-indigo-500/50 focus:scale-95">
                    {type === 'login' ? 'log in' : 'sign up'}
                </button>
            </div>
            <div className="mt-6 text-center">
                <a onClick={toggleFormType} className="uppercase text-indigo-400 cursor-pointer">
                    {type === 'login' ? 'sign up' : 'log in'}
                </a>
            </div>
        </form>
    )
}

export default Form;