import React from 'react';

const DownloadsMonth = ({ plans, currentPlan, setCurrentPlan }) => {
    const changePlan = (e) => {
        let newItem = Number.parseInt(e.target.getAttribute('data-key'));
        let idExists = plans.map((plan) => plan.id === newItem);
        
        if (!idExists.includes(true)) {
            return false;
        }
        setCurrentPlan(newItem);
    }
    
    return (
        <section className="downmonth-container">
            <div className="downmonth-btns">
                {plans.map((plan) => {
                    return (
                        <div 
                            key={plan.id} 
                            data-key={plan.id}
                            className={plan.id === Number.parseInt(currentPlan) ? 
                                                        'downloads-selected' : 'downloads'}
                            onClick={(e) => changePlan(e)}
                        >
                        
                            { plan.amount }
                        </div>
                    )
                })}
            </div>
            <p>
                <small>
                    Downloads per month
                </small>
            </p>
        </section>
    )
}

export default DownloadsMonth;
