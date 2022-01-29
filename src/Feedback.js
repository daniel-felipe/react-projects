import React from 'react';

const Feedback = () => {
    return (
        <React.Fragment>
            <div className="feedback-wrapper">
                <div className="feedback-icon">
                    <div>
                        <i class="far fa-laugh"></i>
                        <strong>Excelente</strong>
                    </div>
                </div>
                <div className="feedback-icon">
                    <div>
                        <i class="far fa-grin"></i>
                        <strong>Bom</strong>
                    </div>
                </div>
                <div className="feedback-icon">
                    <div>
                        <i class="far fa-meh"></i>
                        <strong>Razoável</strong>
                    </div>
                </div>
                <div className="feedback-icon">
                    <div>
                        <i class="far fa-frown"></i>
                        <strong>Ruim</strong>
                    </div>
                </div>
                <div className="feedback-icon">
                    <div>
                        <i class="far fa-dizzy"></i>
                        <strong>Terrível</strong>
                    </div>   
                </div>
            </div>
        </React.Fragment>
    );
}

export default Feedback;