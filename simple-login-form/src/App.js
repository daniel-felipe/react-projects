import { useState } from 'react';

import Form from './components/Form';

const App = () => {
    const [formType, setFormType] = useState('register');
    
    const toggleFormType = () => {
        setFormType(formType === 'login' ? 'register' : 'login');
    }

    return (
        < >
            <main className="w-full h-screen flex justify-center items-center bg-slate-200 p-3">
                <Form type={formType} toggleFormType={toggleFormType} />
            </main>
        </>  
    );
}

export default App;