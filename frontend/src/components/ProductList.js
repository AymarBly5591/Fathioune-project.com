import React from "react";
import {Link } from  "react-router-dom"

const ProductList = ({ products, title }) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          { products.map( (produit)=>{
                    
            return(
                <div key={produit.id} class="flex flex-col items-center justify-center w-full h-[200] p-3 mx-auto hover:shadow-lg hover:border m-2 ">
                    <Link to="../details"

                      onClick={()=>{
                         var prod = [produit.id  ,  produit.name , produit.imageSrc ,  produit.imageAlt , produit.price ];
                         localStorage.setItem("produit" ,prod );
                        }} >
                        <img class="cover  w-full h-100 rounded-md " src={produit.imageSrc} alt={produit.imageAlt}/>
                        <div class="float-right h-20">
                            <h4 class="mt-2 text-lg   font-medium text-gray-700 ">{produit.name}</h4>
                        </div>
                        <div class="text-blue-500"> {produit.price}  Francs cfa</div>
                    </Link>
                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <Link to={"../panier"}><span class="mx-1">Ajouter au panier</span></Link>
                    </button>
                </div>
            )
        })
          }
        </div>
      </div>
    </div>
  );
};

export default ProductList;
