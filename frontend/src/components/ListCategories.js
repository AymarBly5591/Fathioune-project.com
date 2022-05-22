import React from 'react'
import { BsSearch } from "react-icons/bs";


function ListCategories() {
  return (
    <div className="py-10 pl-2 box shadow sm bg-gray-50">

       <div >
       <h2>Catégories</h2>
       <ul className="menu bg-base-100 w-56 p-2 rounded lg border ">
           <li className="menu-title border w-full bg-black text-white rounded">
         <span className=" ">informatique</span>
           </li>
               <li className='hover:bg-gray-200 rounded hover:underline '><a>Item 1</a></li>
              <li className='hover:bg-gray-200 rounded hover:underline '><a>Item 2</a></li>
               <li className="menu-title border w-full bg-black text-white rounded ">
        <span >Santé</span>
           </li>
           <li className='hover:bg-gray-200 rounded hover:underline '><a>Item 1</a></li>
           <li className='hover:bg-gray-200 rounded hover:underline '><a>Item 2</a></li>
       </ul>
       </div>


        <div>
       <h2 className="font-bold">Livraison Rapides</h2>
       <ul className="menu bg-base-100 w-56 p-2 rounded lg border flex-row">
          <input type="checkbox" />
          <label>Fathioune</label>
       </ul>
       </div>

       <div>
       <h2 className="font-bold">Marques</h2>
         <ul className="menu bg-base-100 w-56 p-2 rounded lg border flex-row scroll-y">
          <div className="border">
            <div className="border"><button type="button"><BsSearch/></button><input type="text" placeholder='Nom articles' className="rounded sm border"/> </div>
            
            <label className=''></label>
         </div>
           <div className="overflow-y-scroll h-22">
           <li>
           <input type="checkbox" />
           <label>Portables</label>
         </li>
         <li>
           <input type="checkbox" />
           <label>Portables</label>
         </li>
         <li>
           <input type="checkbox" />
           <label>Portables</label>
         </li>
         <li>
           <input type="checkbox" />
           <label>Portables</label>
         </li>
         <li>
           <input type="checkbox" />
           <label>Portables</label>
         </li>
         <li>
           <input type="checkbox" />
           <label>Portables</label>
         </li>
         <li>
           <input type="checkbox" />
           <label>Portables</label>
         </li>
         <li>
           <input type="checkbox" />
           <label>Portables</label>
         </li>
         <li>
           <input type="checkbox" />
           <label>Portables</label>
         </li>
         <li>
           <input type="checkbox" />
           <label>Portables</label>
         </li>
           </div>
               
               
             <div className="border">
             <div>Prix (Fcfa) <span className='pl-12'>100</span></div>
              <input type="range" className="rounded h-10 bg-orange-300 w-full px-3" />
               <label className='flex flex-row border '> <input type="number" className='rounded border w-20 ' value ="100"/> <input type="number" className='rounded border w-20 ml-7' value ="100"/> </label>
             </div>

            
        </ul>
        </div>

        <div>
       <h2 className="font-bold ">EXPEDIER DEPUIS</h2>

         <ul className="menu bg-base-100 w-56 p-2 rounded lg border flex-row scroll-y">
           <div className="overflow-y-scroll h-22"> 
        
         <li>
           <input type="checkbox" />
           <label>Expédiers depuis la Côte d'Ivoire</label>
         </li>
         <li>
           <input type="checkbox" />
           <label>Portables</label>
         </li>
           </div>
         </ul>

         </div>

        


       
         

    </div>
  )
}

export default ListCategories