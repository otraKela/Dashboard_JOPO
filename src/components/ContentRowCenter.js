import {React} from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';
import ContentRowQuantity from './ContentRowQuantity';
import Chart from './Chart';

function ContentRowCenter (props) {

    const allData = props.allData;
    const products = allData.products;
    const categories = allData.categories;
    const counts = allData.counts;


    return (
     
            <div className="row">
                <ContentRowQuantity counts={counts} />
                <LastProductInDb products={products} />
                <CategoriesInDb categories={categories} />
                <Chart products={products} />
            </div>
        
    )
}

export default ContentRowCenter;