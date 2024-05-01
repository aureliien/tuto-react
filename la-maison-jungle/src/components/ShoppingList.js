import { plantList }  from '../datas/plantList.js';
import InfosPlantes from './infosPlantes.js';
import { useState } from 'react';

function ShoppingList({cart, updateCart}) {
   
    const [showCart, updateShowCart] = useState(true);

    return (
        <div>
            <h2 className="lmj-shopping-list-title">Liste des plantes à acheter :</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {plantList.map((plant) => (
                    <div 
                    key={plant.id} 
                    style={{ width: '200px', height: '200px', margin: '10px', backgroundColor: 'lightgray' }} 
                    >
                        <div>
                            {plant.name} ({plant.category}) <br />
                            Infos :
                            <div>
                                Informations :
                                <div>Jardinage : {plant.water}</div>
                                <div>Ensoleillement : {plant.sun}</div>
                            </div>
                            <InfosPlantes water={plant.water} sun={plant.sun} />
                            <button onClick={() => handleClickCart(plant.id, cart, updateCart)}>Ajouter</button>
                        </div>
                    </div>
                ))}
            </div>
            {!showCart && <button onClick={() => updateShowCart(true)}>Voir le panier</button>}
            {showCart && <p>Nombre de Monstera dans le panier : {cart.toto}<br /><button onClick={() => updateShowCart(false)}>Cacher le panier</button></p>}
        </div>
    )
}

function handleClickCart(plantId, cart, updateCart){
    console.log('updateCart ', plantId, cart, updateCart);
    //updateCart(cart => ({...cart, plantId: cart[plantId] + 1}))

    const index = cart.findIndex((plantItem) => plantItem.id === plantId);
    cart["toto"] = 1;
    cart["titi"] = 2;

    updateCart(cart);
    //alert("updateCart");
}

function handleClick(e){
    //console.log('click ', e);
    //alert("click");
}

export default ShoppingList;