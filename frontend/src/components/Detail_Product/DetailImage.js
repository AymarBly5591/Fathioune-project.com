import React from 'react'
import {FaShareAlt ,  FaFacebookSquare , FaMoneyBill} from "react-icons/fa";


function DetailImage() {
     const prod =  localStorage.getItem("produit").split(',')
  return (
    


    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-5 md:py-12 md:px-2 py-9 px-2">
        <div class="flex justify-center shadow-md lg:flex-row flex-col gap-1">
            <div class="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 flex lg:flex-col flex-col 4 border-r p-1">
                <div class="w-full lg:w-8/12 bg-gray-100 flex justify-center items-center border-black hover:border-black">
                    <img src={prod[2]} alt="Wooden Chair Previw" />
                </div>
                <div class="w-full lg:w-1/2 grid lg:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-6 py-2">
                    <div class="bg-gray-100 flex justify-center items-center py-4 border-black hover:border-black ">
                        <img src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png" alt="Wooden chair - preview 1" />
                    </div>
                    <div class="bg-gray-100 flex justify-center items-center py-4 border-black hover:border-black">
                        <img src="https://i.ibb.co/7zv1N5Q/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-2.png" alt="Wooden chair - preview 2" />
                    </div>
                    <div class="bg-gray-100 flex justify-center items-center py-4 border-black hover:border-black">
                        <img src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png" alt="Wooden chair- preview 3" />
                    </div>
                </div>
            </div>
            
            <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-left px-3">
                <div className="py-2 border-b">
                     <h2 className="font-bold text-2xl leading-10">{prod[1]}</h2>
                </div>
                <div className="flex flex-row py-3">
                     <span> Marque : </span>
                     <span className="text-gray-500"> Bois </span>
                </div>
                <div className=" shadow rounded">
                    <div className="text-white bg-red-400 border py-2">Promos expolisives <span className="font-extrabold text-white ">temps dispoinible : 2h:25min:26s </span></div>
                    <div className="flex-col items-center border-red-300 py-5"><h1 className="font-extrabold  "> {prod[4]} Francs Cfa <span className="text-white bg-yellow-400 py-1 px-2 ">- 60%</span></h1><h1 className="line-through px-2"> 6500 Fcfa</h1></div>
                </div>
                <div className="border-b py-1 ">Livraison gratuite {"(vous économise 850 Fcfa)"} </div>
                <button className="flex my-1 flex-row items-center justify-center rounded bg-orange-500 py-2 w-full px-3 hover:border-orange-200 text-white hover:bg-orange-600  "><FaMoneyBill className="h-10 w-5 mx-3 "/>  <span className="font-extrabold text-white mx-2"> Ajouter au panier </span></button>
                <button className="flex my-1 flex-row items-center justify-center rounded bg-gray-700 py-2 w-full px-3 hover:border-gray-300 text-white hover:bg-gray-800  "><FaMoneyBill className="h-10 w-5 mx-3 "/> J'achète <span className="font-extrabold text-white mx-2"> {prod[4]} Fcfa</span></button>
            <div className="flex flex-row py-6"> <button type="button" className="text-white bg-blue-400 hover:bg-blue-500 py-3 px-2 rounded-lg flex "><FaShareAlt className="h-4 w-full" /><FaFacebookSquare className="w-full h-5 px-1"/> partager</button></div>
        </div>
    </div>
</div>



  

    
  )
}

export default DetailImage;






