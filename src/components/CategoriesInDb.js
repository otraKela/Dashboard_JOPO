import React from "react";
import  '../assets/css/categories.css'

function CategoriesInDb(props) {
  const categories = props.categories;

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorías
          </h5>
        </div>

        <div className="card-body">
          <div className="fila">

            {
              categories.length > 0 && categories.map( (category, index) => {
                return (
                  <div className="category-box" key={category.name + index}>
                   
                        <div className="category-name">{category.name}</div>
                        <div className="product-qty">{category.quantity}</div>
                    
                  </div>
                )
              })
            }
            
              
          </div>
        </div>

      </div>
    </div>
  );

}

export default CategoriesInDb;
