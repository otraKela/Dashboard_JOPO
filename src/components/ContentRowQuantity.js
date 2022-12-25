import React from 'react';
import SmallCard from './SmallCard';

function ContentRowQuantity (props) {
    const counts = props.counts;


// /* <!-- Cantidad de productos --> */
    let productsCount = {
        title: 'Productos en base de datos',
        color: 'primary', 
        quantity: counts.productCount,
        icon: 'fa-clipboard-list'
    }
    
//  /* <!-- Cantidad de clientes --> */
    let clientsCount = {
        title:'Clientes en base de datos', 
        color:'success', 
        quantity: counts.userCount,
        icon:'fa-user-check'
    }
    
//  /* <!-- Cantidad de categorías --> */
    let categoriesCount = {
        title:'Categorias en base de datos' ,
        color:'warning',
        quantity: counts.categoryCount, 
        icon:'fa-fw fa-folder'
    }
    
    let countsArray = [productsCount, clientsCount, categoriesCount];
	

    return (
    
        <div className="row">
            
            {countsArray.map( (number, i) => {

                return <SmallCard {...number} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowQuantity;