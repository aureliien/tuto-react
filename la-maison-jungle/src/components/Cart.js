import { useState } from 'react';


function Cart({cart, updateCart}) {
    
    

    return (<div>
        
          <h2>Formulaire</h2>
            <QuestionForm />
          </div>
          
        
        )
    }

    function QuestionForm(){
        const [inputValue, setInputValue] = useState('');
        const isNotAurelien = inputValue.toLowerCase() !== 'aurelien';

        return (
            <form>
                <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Entrez votre email'
                type="text"
                />
                <button onClick={() => alert(inputValue)}>Valider</button>
                {isNotAurelien && <p>Vous n'êtes pas Aurélien</p>}
            </form>
        )
    }

export default Cart;
    