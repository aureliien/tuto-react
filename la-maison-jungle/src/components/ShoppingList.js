import { plantList } from "../datas/plantList.js";
import InfosPlantes from "./infosPlantes.js";
import { useEffect, useState } from "react";

import "../styles/ShoppingList.css";

function ShoppingList({ cart, updateCart }) {
  const [showCart, updateShowCart] = useState(true);

  useEffect(() => {
    document.title = `Tuto: ${cart.reduce((acc, item) => acc + item.quantity * plantList.find((plant) => plant.id === item.id).price, 0)}€ dans le panier`;
  });

  return (
    <div>
      <h2 className="lmj-shopping-list-title">Liste des plantes à acheter :</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {plantList.map((plant) => (
          <div key={plant.id} className="plantItem">
            <div>
              {plant.name} ({plant.category}) <br />
              {plant.price}€<br />
              Infos :
              <div>
                Informations :<div>Jardinage : {plant.water}</div>
                <div>Ensoleillement : {plant.sun}</div>
              </div>
              <div>
                Achetés :{" "}
                {cart.findIndex((item) => item.id === plant.id) !== -1
                  ? cart.find((item) => item.id === plant.id).quantity
                  : 0}
              </div>
              <InfosPlantes water={plant.water} sun={plant.sun} />
              <button
                style={{
                  borderRadius: "50%",
                  backgroundColor: "green",
                  border: "2px solid black",
                }}
                onClick={() => handleClickCart(plant.id, cart, updateCart)}
              >
                Ajouter
              </button>
            </div>
          </div>
        ))}
      </div>
      {!showCart && (
        <button onClick={() => updateShowCart(true)}>Voir le panier</button>
      )}
      {showCart && (
        <p>
          Nombre de plantes dans le panier :{" "}
          {cart.reduce(
            (acc, item) =>
              acc +
              item.quantity *
                plantList.find((plant) => plant.id === item.id).price,
            0
          )}
          €<br />
          <button onClick={() => updateShowCart(false)}>
            Cacher le panier
          </button>
        </p>
      )}
      <button onClick={() => updateCart([])}>Vider le panier</button>
    </div>
  );
}

function handleClickCart(plantId, cart, updateCart) {
  const updatedCart = [...cart];
  const existingPlantIndex = updatedCart.findIndex(
    (item) => item.id === plantId
  );
  if (existingPlantIndex !== -1) {
    updatedCart[existingPlantIndex] = {
      ...updatedCart[existingPlantIndex],
      quantity: updatedCart[existingPlantIndex].quantity + 1,
    };
  } else {
    updatedCart.push({ id: plantId, quantity: 1 });
  }

  updateCart(updatedCart);
}

export default ShoppingList;
