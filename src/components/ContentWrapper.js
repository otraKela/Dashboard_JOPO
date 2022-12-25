import {React, useState, useEffect} from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';

function ContentWrapper () {
 
    const [ allData, setAllData ] = useState ('');

    useEffect ( () => {   
  
      // fetch products and categories from db 
        async function getProducts () { 
            const response = await fetch("http://localhost:3040/api/products/");
            return await response.json();
        };
  
      // fetch users from db 
        async function getUsers () {
            const response = await fetch("http://localhost:3040/api/users/");
            return await response.json();
        }
  
        Promise.all ( [ getProducts(), getUsers()] )
          .then ( ( [productData, userData] ) => {
              let products = productData.data.products;
              let categories = productData.data.countByCategory;
              let users = userData.data.users;
  
              const productCount = products.length;
              const categoryCount = categories.length;
              const userCount = users.length;
  
              const propsData = {
                          products: products, 
                          categories: categories, 
                          users: users,
                          counts: {
                                    productCount: productCount,
                                    categoryCount: categoryCount, 
                                    userCount: userCount 
                                  }
                          };

              setAllData (propsData);
         })
    }, [] )   

    return (
       
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    { allData && <ContentRowTop  allData={allData} /> }
                    <Footer />
                </div>
            </div>    

    )
}
export default ContentWrapper;