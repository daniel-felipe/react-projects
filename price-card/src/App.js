import React, { useState } from 'react';
import Button from './components/Button';
import DownloadsMonth from './components/DownloadsMonth';
import Figure from './components/Figure';
import Price from './components/Price';
import data from './data';

const App = () => {
    const [plans, setPlans] = useState(data);
    const [currentPlan, setCurrentPlan] = useState(1);

    return (
        <main>
            <Figure plan={plans[currentPlan - 1]} />
            <Price plan={plans[currentPlan - 1]} />
            <DownloadsMonth 
                plans={plans} 
                currentPlan={currentPlan} 
                setCurrentPlan={setCurrentPlan} 
            />
            <Button />
        </main> 
    );
}

export default App;