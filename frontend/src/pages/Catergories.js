

import React from 'react'
import ImageSlider from '../components/ImageSlider';
import Headers from '../components/Header'
import NavBarCategories from '../components/NavBarCategories';
import Footer from '../components/Footer';
import ListCategories from '../components/ListCategories';
import ProductsCategories from '../components/Categorie_Products/ProductsCategories';
import CategoriesAll from  "../components/CategoriesAll";


function Catergories() {
    const products = [
        {
          id: 1,
          name: "Ordinateur portable",
          href: "#",
          imageSrc:"https://images.frandroid.com/wp-content/uploads/2021/01/asus-zenbook-13-oled-um325-frandroid-2021.png",
          price: "$35",
          color: "Black",
        },
        {
          id: 1,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 1,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 1,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        // More products...
      ];
      
      
  return (
    <div>
       {/* Headers */} 
        <Headers/>
       {/* navbar catégory */}
       <NavBarCategories/>            
       { /* Images Slider  */}
       <ImageSlider />
       <NavBarCategories/>     
       <div className='flex flex-row'>
         {/*  Listes des catégories */}
        
           <ListCategories/>
        
         {/* Listes Produits  */}
         <div>
         <ProductsCategories products={products} title={"Meilleurs offres"}/>
         <ProductsCategories products={products} title={"Livraions gratuites "}/>
         <ProductsCategories products={products} title={"Nouvelles offres "}/>
         </div>
          
       </div>
       <CategoriesAll/>
      
       
       {/*  Footer */}
       <Footer/>

    </div>
  )
}

export default Catergories;
