import React from 'react';
import Feedback from './Feedback';
import Button from './Button';

const Form = ({ action, method }) => {
    return (
        <React.Fragment>
            <form className="form" action={action} method={method}>
                <h2>Sua opinião</h2>
                <p>Deixe abaixo sua opinião sobre nosso atendimento:</p>
                <Feedback className="form-element" /><br></br>
                <label>
                    <strong>Deixe seu comentário:</strong>
                </label>
                <textarea></textarea>
                <label>
                    <input 
                        type="checkbox"
                    /> Receber emails e ficar por dentro das <strong>novidades</strong>.
                </label>
                <Button func="enviar" />
            </form>
        </React.Fragment>
    );
}

export default Form;