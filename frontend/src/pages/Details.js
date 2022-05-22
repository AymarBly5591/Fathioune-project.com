import React from 'react'
import DetailImage from '../components/Detail_Product/DetailImage';
import DetailsOptions from '../components/Detail_Product/DetailsOptions'
import Header from '../components/Header'
import NavBarCategories from '../components/NavBarCategories'
import DetailFiche from  "../components/Detail_Product/DetailFiche";
import DetailInfo from  "../components/Detail_Product/DetailInfo";
import Footer from "../components/Footer";
import CategoriesAll from  "../components/CategoriesAll";
import ProductsCategories from  "../components/Categorie_Products/ProductsCategories";

function Details() {
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
    <div >
           {/*Header */}
           <Header/>
           {/* NavBarCategories */}
           <NavBarCategories/>
       
       <div className=' flex flex-row shadow-md rounded'>
               {/* DetailsImages */}
                <div clasName="flex flex-col"> 
                     <DetailImage />
                     <DetailInfo/>
                     <DetailFiche/>
                     <ProductsCategories products={products} title={"Produits que vous apprécirez aussi"}/>
                     <ProductsCategories products={products} title={"vu recement"}/>
       {/* CategoriesAll */}
       <CategoriesAll/>
                </div>
               {/*ListCategories */}
               <DetailsOptions/>  
       </div>
       
       {/* Footer */}
       <Footer/>
    </div>
    <div>
       
    </div>
    </div>
  )
}

export default Details