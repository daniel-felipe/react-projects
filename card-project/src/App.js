import React from 'react';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';

const App = () => {
    return (
        <main>
            <section className="card-container">
                <Info />
                <About />
                <Interests />
            </section>
        </main>
    );
}

export default App;