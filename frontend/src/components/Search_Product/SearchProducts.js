import React from 'react';
import {Link} from  "react-router-dom";
import {FaMoneyBillWave} from  "react-icons/fa";

function SearchProducts({produits}) {
  return (
    <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
         
         {/* Nombre d'element dsan le recherche */}

        <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
            <div class="text-gray-500 dark:text-gray-700">{produits.length} résultats</div>
            <div class="flex items-center">
                <p class="text-gray-500 dark:text-gray-300">Sort</p>
                <select class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                    <option value="#">Recommended</option>
                    <option value="#">Size</option>
                    <option value="#">Price</option>
                </select>
            </div>
        </div>


        { /* Listes de produits recherchés */}

        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                produits.map( (produit)=>{
                    
                    return(
                        <div key={produit.id} class="flex flex-col items-center justify-center w-full max-w-lg mx-auto hover:shadow-lg hover:border m-2 ">
                            <Link to="../details"

                              onClick={()=>{
                                 var prod = [produit.id  ,  produit.name , produit.imgSrc ,  produit.imgAlt , produit.price ];
                                 localStorage.setItem("produit" ,prod );
                                }} >
                                <img class="cover  w-full rounded-md h-40 xl:h-50" src={produit.imgSrc} alt={produit.imgAlt}/>
                                <div class="float-right h-20">
                                    <h4 class="mt-2 text-lg   font-medium text-gray-700 ">{produit.name}</h4>
                                </div>
                                <p class="text-blue-500"> {produit.price}  Francs cfa</p>
                            </Link>
                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <Link to={"../panier"}><span class="mx-1">Ajouter au panier</span></Link>
                            </button>
                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <Link to={"../panier"}><FaMoneyBillWave/><span class="mx-1">J'achète</span></Link>
                            </button>
                        </div>
                    )
                })
            }
        
        </div>





    </div>







    
  )
}

export default SearchProducts
