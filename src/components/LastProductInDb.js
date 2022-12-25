import {React, useEffect, useState } from 'react'; 
import {Link} from 'react-router-dom';

function LastProductInDb (props) {

    const [lastProduct, setLastProduct] = useState ('');

    useEffect ( () => {
        const products = props.products;
        let maxId = Math.max.apply ( Math, products.map ( product => {return product.id} ));
        const last = products.find ( product => product.id === maxId );
        setLastProduct (last);
    }, [])

    return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto</h5>
                    </div>
                    <div className="card-body">
                        <p className="last-prod-in-db-name">{lastProduct.name}</p>
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.img} alt=" último producto "/>
                        </div>
                        <p className="last-prod-in-db-description">{lastProduct.description}</p>
                        <Link  to={{pathname: 'detalleDeProducto',
                                state: lastProduct}} className="btn btn-danger" rel="nofollow">Detalle de producto</Link>
                    </div>
                </div>
            </div>
        
    )

}

export default LastProductInDb;
