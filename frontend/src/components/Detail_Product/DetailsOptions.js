import React from 'react'
import {AiFillCar} from  "react-icons/ai";
import {BsFillFileEarmarkPersonFill} from  "react-icons/bs";

function DetailsOptions() {
  return (
    <div className="rounded  p-2">
        <div className="border py-1 px-1 rounded shadow">
           <div className="font-bold py-2 border-b flex "><AiFillCar className="mx-1 h-5 w-5"/>Livraison et retours</div>
           <div className="border-b">
               Livrason en 24h a Abidjan <a href="#" className="hover:text-blue-400 text-blue-300">Details</a>
           </div>
           <div className="py-2">
              <h2 className="font-bold">Choisir lieu de la livraison</h2>
           </div>
           <div className="py-2 my-2">
              <select className="border rounded text-black w-full py-3">
                 <option className="border-b" value="">Abidjan</option>
                 <option className="border-b" value="">Abidjan</option>
                 <option className="border-b" value="">Abidjan</option>
                 <option className="border-b" value="">Abidjan</option>
              </select>
           </div>
           
           <div className="py-2 my-2">
              <select className="border rounded text-black w-full py-3">
                 <option className="border-b" value="">Agence Abidjan</option>
                 <option className="border-b" value="">Agence Abidjan</option>
                 <option className="border-b" value="">Agence Abidjan</option>
                 <option className="border-b" value="">Agence Abidjan</option>
              </select>
           </div>
        </div>

        <div className="border py-1 px-1 rounded shadow my-5">
           <div className="font-bold py-2 border-b realtive"><a href="#"> <BsFillFileEarmarkPersonFill className="mx-2 h-5 w-5"/>Informaton vendeurs <span className="absolute ">{">"}</span></a></div>
           <div className="border-b">
               Livrason en 24h a Abidjan <a href="#" className="hover:text-blue-400 text-blue-300">Details</a>
           </div>
           <div className="py-2 border-b">
              <h2 className="font-bold">David & Daniel & Pierre</h2>
              <div className="flex flex-row items-center justify-center">  
                   <div>
                      <p><span className="font-bold">96% </span> Evaluation <div><span>7215 </span> Abonnés</div></p>
                   </div>
                   <div>
                     <button className="shadow bg-orange-500 hover:bg-orange-700  m-2 px-5 py-2 rounded text-white">Suivre</button>
                   </div>
              </div>
           </div>
           <div>
             <div className="py-2 border-b"><h2 className="uppercase ">perfomance vendeur <span/></h2></div>
             <div className="flex flex-col items-center">
                <p>Taux d'expédition des commandes <span className="font-bold">Excellent</span></p>
                <p>Source qualit <span className="font-bold">Excellent</span></p>
                <p>Avis de consommation <span className="font-bold">Bon</span></p>                
             </div>
           </div>
        </div>
        
        <div className="border py-1 px-1 rounded shadow my-5">
           <div className="font-bold py-2 border-b realtive"><a href="#"> voir fiche technique <span className="realtive left-10 ">{">"}</span></a></div>
        </div>
        
        <div className="border py-1 px-1 rounded shadow my-5 hover:bg-gray-200">
           <div className="font-bold py-2 border-b realtive"><a href="#">Informaton vendeurs <span className="realtive left-10 ">{">"}</span></a></div>
        </div>
        
        <div className="border py-1 px-1 rounded shadow my-5">
           <div className="flex flex-row">
              <div>
                <img classname="w-10 h-10 rounded" src =""/>
              </div>
              <div>
                 <h2>David & Daniel & Pierre  </h2>
              </div>              
           </div>
           <button type="button" className="bg-gray-700 text-white rounded-md hover:bg-gray-900 w-full py-3 px-2">J'achète <span> 5000 Fcfa</span></button>
        </div>

        
    </div>
  )
}

export default DetailsOptions