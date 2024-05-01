import { plantList }  from '../datas/plantList.js';
import InfosPlantes from './infosPlantes.js';


function ShoppingList() {
    return (
        <div>
            <h2 className="lmj-shopping-list-title">Liste des plantes à acheter :</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {plantList.map((plant) => (
                    <div key={plant.id} style={{ width: '200px', height: '200px', margin: '10px', backgroundColor: 'lightgray' }}>
                        <div>{plant.name} ({plant.category}) <br />
                        Infos : 
                        <div>
        Informations : 
            <div>Jardinage : {plant.water}</div>
            <div>Ensoleillement : {plant.sun}</div>
        </div>
        <InfosPlantes water={plant.water} sun={plant.sun}/>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShoppingList;