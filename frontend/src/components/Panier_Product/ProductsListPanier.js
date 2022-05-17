

import React, { useState } from "react";
import {BiCart } from "react-icons/bi"

function ProductsListPanier() {
    const [show, setShow] = useState(false);
    return (
        
            <div>
                
                
                    <div className="border w-full h-full p-10 top-0  sticky-0" id="chec-div">
                   
                        <div className="w-full  h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                           
                            <div className="flex md:flex-row flex-col justify-end rounded" id="cart">
                                <div className="border w-full  pr-1 md:pr-4 md:py-5 py-8 bg-white  rounded " id="scroll">
                                    <div className="flex items-center text-gray-500 border-b hover:text-gray-600 cursor-pointer pb-2" >
                                    <p className="text-5xl font-bold underline leading-10 text-gray-800 pt-3 py-3 flex"><BiCart className="w-10 h-10 mx-2 font-bold" /> votre panier</p>
                                    </div>
                                   <div class="overflow-y overflow-x-hidden h-screen">
                                    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                                        <div className="w-1/6">
                                            <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png" alt className="w-full h-full object-center object-cover" />
                                        </div>
                                        <div className="md:pl-3 md:w-3/4 w-full">
                                            <div className="flex items-center justify-between">
                                               <p className="text-base font-black leading-none text-gray-800 thro">Bague en diamant</p>
                                               <p className="text-base font-black  leading-none text-gray-800">$9,000</p>
                                            </div>  
                                            
                                            <div className="flex items-center justify-between pt-10">
                                                 <div className="flex itemms-center">
                                                   <button type="button" className="text-xs leading-9 text-white bg-red-400 rounded hover:bg-red-600 mx-5 px-5 cursor-pointer">Supprimer</button>
                                                </div>
                                                <div className="flex  ">
                                                    <div className="flex py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                                        <button type="button" className="leading-15 text-white font-bold rounded bg-orange-500 hover:bg-orange-800 mr-2 text-white h-10 w-10">-</button>
                                                        <p className="text-black justify-content center aligns-item-center mx-3 py-2 font-bold">2</p>
                                                        <button type="button" className="leading-15 text-white font-bold rounded bg-orange-500 hover:bg-orange-800 ml-2 mr-1 text-white h-10 w-10">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:flex items-center py-8 border-t border-gray-200">
                                        <div className="w-1/6">
                                            <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller2.png" alt className="w-full h-full object-center object-cover" />
                                        </div>
                                        <div className="md:pl-3 md:w-3/4 w-full">
                                            <div className="flex items-center justify-between">
                                               <p className="text-base font-black leading-none text-gray-800">Bague en diamant</p>
                                               <p className="text-base font-black  leading-none text-gray-800">$9,000</p>
                                            </div>  
                                            
                                            <div className="flex items-center justify-between pt-10">
                                            <div className="flex itemms-center">
                                                <button type="button" className="text-xs leading-9 text-white bg-red-400 rounded hover:bg-red-600 mx-5 px-5 cursor-pointer">Supprimer</button>
                                            </div>
                                            <div className="flex  ">
                                              <div className="flex py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                                <button type="button" className="leading-15 text-white font-bold rounded bg-orange-500 hover:bg-orange-800 mr-2 text-white h-10 w-10">-</button>
                                                <p className="text-black justify-content center aligns-item-center mx-3 py-2 font-bold">2</p>
                                                <button type="button" className="leading-15 text-white font-bold rounded bg-orange-500 hover:bg-orange-800 ml-2 mr-1 text-white h-10 w-10">+</button>
                                             </div>
                                           </div>
                                            
                                        </div>
                                        </div>
                                    </div>
                                    <div className="md:flex items-center py-3 border-t border-b border-gray-200">
                                        <div className="h-full w-1/6">
                                            <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller1.png" alt className="w-full h-full object-center object-cover" />
                                        </div>
                                        <div className="md:pl-3 md:w-3/4 w-full">
                                            <div className="flex items-center justify-between">
                                               <p className="text-base font-black leading-none text-gray-800">Luxe Signature Shoes</p>
                                               <p className="text-base font-black  leading-none text-gray-800">$9,000</p>
                                            </div>                                            
                                             
                                            <div className="flex items-center justify-between pt-10">
                                                <div className="flex itemms-center">
                                                    <button type="button" className="text-xs leading-9 text-white bg-red-400 rounded hover:bg-red-600 mx-5 px-5 cursor-pointer">Supprimer</button>
                                                </div>
                                                <div className="flex  ">
                                                  <div className="flex py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                                    <button type="button" className="leading-15 text-white font-bold rounded bg-orange-500 hover:bg-orange-800 mr-2 text-white h-10 w-10">-</button>
                                                    <p className="text-black justify-content center aligns-item-center mx-3 py-2 font-bold">2</p>
                                                    <button type="button" className="leading-15 text-white font-bold rounded bg-orange-500 hover:bg-orange-800 ml-2 mr-1 text-white h-10 w-10">+</button>
                                                 </div>
                                               </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full m-2 rounded">
                                    <div className="flex flex-col md:h-30 px-14 py-5 justify-between ">
                                        <div>
                                            <p className="text-2xl font-black leading-1 text-gray-800">Résumé du panier</p>
                                            <hr  className="w-full"/>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800 border">total</p>
                                                <p className="text-base leading-none text-gray-800 border">$10,240</p>
                                            </div>
                                        </div>
                                        <div className="border rounded py-3">
                                           <div className="border-b"><input type="checkbox"/> Livraison Rapide</div>
                                           <div className="border-b"><input type="checkbox"/> Livraison à domicile</div>
                                           
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-1 justify-between lg:pt-5 pt-5">
                                                <p className="text-2xl leading-normal text-gray-800">Total:</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">$10,240</p>
                                            </div>
                                            <button className="text-base rounded hover:bg-gray-600 leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Commander ($10,240)
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
            </div>

          
    );
}



export default ProductsListPanier