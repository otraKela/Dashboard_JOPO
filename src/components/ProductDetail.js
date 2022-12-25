import {React, useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/productDetail.css';

function ProductDetail (props) {

    const product = props.location.state;
    const colors = product.colors;

    return (
       
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                { product &&
                    <h5 className="m-0 font-weight-bold text-gray-800" id="product-name">{product.name}</h5>    
                }            
                    
                </div>
                <div className="card-body product-body">
                    <div className="text-center product-img">
                        {
                            product &&
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={product.img} alt=" tocadiscos-4 " />
                        }
                        
                    </div>
                    {
                    product &&
                    <div id="product-data">

                        <ul id="ul-product-data">
                            
                            <li id="description"> {product.description}</li>

                            <li>Precio: ${product.price}</li>
                           
                            <li>Descuento: {product.discount? product.discount : 0}</li>
                           
                            <li>Url: {product.url}</li>

                        </ul>

                        <div id="div-colores">
                            <p id="p-colores">Colores:</p>

                            <ul id="ul-colors"> 
                                {
                                colors.map ( (color, index) => {
                                    return  <li key={index}>{index === 0 ? color.name:', '  + color.name}</li>
                                }) 
                                }
                            </ul>
                            
                        </div>   
                       

                    </div>
                    }
                    <div id="div-boton">
                        <Link to="/listaDeProductos" id="boton-lista" className="btn btn-danger" rel="nofollow">Lista completa</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail;