import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBarCategories from '../components/NavBarCategories';
import ProductsListPanier from '../components/Panier_Product/ProductsListPanier';
import ProductsCategories from '../components/Categorie_Products/ProductsCategories';

function Panier() {
    const products = [
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
      
      const product2s = [
        {
          id: 1,
          name: "Earthen Bottle",
          href: "#",
          price: "$48",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
          imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
          id: 2,
          name: "Nomad Tumbler",
          href: "#",
          price: "$35",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 3,
          name: "Focus Paper Refill",
          href: "#",
          price: "$89",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
          imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
        },
        {
          id: 4,
          name: "Machined Mechanical Pencil",
          href: "#",
          price: "$35",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
          imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
        },
        // More products...
      ];
  return (
    <div>
       {/* Headers */} 
        <Header/>
        {/* navbar catégory */}
              
       <NavBarCategories/>     
       <div className='flex flex-col'>
         {/*  Listes des catégories */}
           <ProductsListPanier products={products}  />
         {/* Listes Produits  */}
         <ProductsCategories products={products} title="Vous allez adorez" />
       </div>
      
       
       {/*  Footer */}
       <Footer/>

    </div>
  )
}

export default Panier
