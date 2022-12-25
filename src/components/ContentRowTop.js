import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowQuantity from './ContentRowQuantity';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';
import Chart from './Chart';
import Search from './Search';
import ProductDetail from './ProductDetail';
import NotFound from './NotFound'
import { Route, Switch } from "react-router-dom";


function ContentRowTop ( props ) {

	const allData = props.allData;
    const counts = props.allData.counts;
	const products = props.allData.products;
	const categories = props.allData.categories;

	return(
		<React.Fragment>	
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					</div>

					<Switch>
					<Route path="/totales">
						<ContentRowQuantity counts={counts} />
					</Route> 
					<Route path="/ultimoProducto">
						<LastProductInDb products={products} />
					</Route> 
					<Route path="/categorias">
						<CategoriesInDb categories={categories} />
					</Route> 
					<Route path="/listaDeproductos">
						<Chart products={products} />
					</Route> 
					<Route path="/buscador" component={Search} />
					<Route path="/detalleDeProducto" component={ProductDetail} />
					<Route exact path="/">
						<ContentRowCenter allData={allData} />
					</Route>  
					<Route component={NotFound} />
				</Switch>
	
				</div>
		</React.Fragment>	 
    )

}
export default ContentRowTop;