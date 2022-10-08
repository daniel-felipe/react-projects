import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import Input from './Input';

const Form = ({ type, toggleFormType }) => {
    return (
        <form className="max-w-lg bg-white rounded-lg p-12">
            <div className="text-center text-gray-600 mb-12">
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
                            <Input name="first_name" placeholder="Enter your first name" />
                        </div>
                        <div>
                            <Input name="last_name" placeholder="Enter your last name" />
                        </div>
                    </div>
                )}
                <div className="mb-5">
                    <Input name="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="mb-5">
                    <Input name="password" type="password" placeholder="Enter your password" />
                </div>

                {type === 'login' && (
                    <div className="mb-5">
                        <Checkbox name="remember" label="Remember-me" />
                    </div>
                )}
            </div>
            
            <div>
                <Button type="submit">
                    {type === 'login' ? 'log in' : 'sign up'}
                </Button>
            </div>

            <div className="mt-6 text-center">
                <button type="button" onClick={toggleFormType} className="uppercase text-indigo-400 cursor-pointer">
                    {type === 'login' ? 'sign up' : 'log in'}
                </button>
            </div>
        </form>
    )
}

export default Form;