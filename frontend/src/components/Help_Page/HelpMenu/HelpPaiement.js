
import React from 'react';
import Footer from '../../Footer';
import  Header from  "../../Header";
import  HelpHeader from '../HelpHeader';
 
const instructions = [
  {
    id:"1",title:"Etape 1",
    text:"Cliquer sur le produit de votre choix ",
    imageSrc:"/img/panier.png"
  },
  {
    id:"2", title:"Etape 2",
    text:"Cliquer sur le boutton J'achete pour être rediriger vers la gae suivantes ",
    imageSrc:"/img/categories.png"
  },
  {
    id:"3",title:"Etape 3",
    text:"Cliquer sur votre",
    imageSrc:"/img/detail.png"
  },
]



function HelpPaiement() {
  
  return (
    <div>
        <Header/>
        <HelpHeader/>
        
        {/*  composants de la page  Commandes */}
        <section className="container className bg-white">
            <div className="flex fex-col">
                <div className="spacex-2 spacey-3">

                   <div className="flex h-100 w-full flex-col items-center bg-orange border hover:border-gray-200 hover:shadow-lg">
                       <div class="md:space-x-1 space-y-1 md:space-y-0 mb-4">
                           {
                             instructions.map((etape)=>{
                               return(
                                 <div  class=" m-2  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                                     <a href={etape.id}></a>Etape {etape.id} 
                                  </div>
                               )
                             })
                           }
                        </div>
                        <div class="collapse" id="collapseExampl1">
                             <div class="block p-6 rounded-lg shadow-lg bg-white">

                                  
                              {
                                instructions.map( (instruct)=>{
                                 return(   
                                  <div class="flex justify-center ">
                                   <div class="flex flex-col md:flex-row  rounded-lg bg-white shadow-lg">
                                    
                                    <div class="p-6 flex flex-col justify-start">
                                      <h5 class="text-gray-900 text-xl font-medium p-2 rounded-lg mb-2 bg-yellow-600 "> {instruct.title}  </h5>
                                      <p class="text-gray-700 text-base mb-4">
                                         {instruct.text}
                                        </p>
                                        <img class=" w-full h-96 md:h-auto object-cover md:w-[51%]  rounded-t-lg md:rounded-none md:rounded-l-lg" 
                                        src={instruct.imageSrc} alt={instruct.text} 
                                         />
                                      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                                    </div>
                                   </div>
                                </div>
                                )})}


                             </div>
                        </div>
                   </div>

                </div>               
            </div>
        </section>

        <Footer/>
    </div>
  )
}

export default HelpPaiement ;