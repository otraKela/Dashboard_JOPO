import React from 'react';
import {Link} from 'react-router-dom';



function ChartRow (props) {
    const product = props.product;

    return (
                <tr>

                    <td> 
                    <Link to={ {pathname: 'detalleDeProducto',
                                state: product}} >
                    {product.name}
                    </Link>
                    </td>
                    <td>{product.description}</td>
                    <td>{product.categoryName}</td>
                   
                    <td>{product.url}</td>

                </tr>
            )
    }
    
        

export default ChartRow;