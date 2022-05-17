import React from 'react'
import {AnimateSharedLayout  ,  AnimatePresence ,motion} from "framer-motion"


const help=[
    {
        id:"1",
        title:"Page d'accueil (Landing Page)",
        imgSrc:"./img/landing.png",
        text:"La page d'accueil vous présentera les produits de première nécéssité tels que les nouveaux articles en ventes d'autres produits encore ."
    },
    {
        id:"2",
        title:"Page des catégories (Landing Page)",
        imgSrc:"./img/categories.png",
        text:"La page des catégories comporte les différents acticles un peu comme la page d'accueil mais elles sont disposé par catégories avec des indicatif sur le prix et le type d'article souhaités tels que le prix , la livraison "
    },
    
    {
        id:"3",
        title:"Details du produit (panier Page)",
        imgSrc:"./img/detail_image.png",
        text:"Cette page présente plus details sur le produits tel que le prix , le nom du produit , le promo , la fiche téchnique et les instructions pour son utilisation ce qui peut être très utilie pour le client qui voudrait plus de renseignement avant de l'acheter"
    },
    
    {
        id:"4",
        title:"Panier des produits",
        imgSrc:"./img/panier.png",
        text:"Une fois que votre produit est ajouter au panier il est mis ici  , ensuite une fonctionnabilité calcul le prix de tout les produit ainsi que leur quantité"
    },
    
    {
        id:"5",
        title:" recherche du produit souhaités (Landing Page)",
        imgSrc:"./img/search.png",
        text:"Dans la barre de recherche , vous pourré faire une recherche du produit que vous souhaité pour plus de pouvoir soit l'acheter ou al'ajouter à votre panier "
    },
    
    {
        id:"6",
        title:"page dinscription  (Signup Page)",
        imgSrc:"./img/signin.png",
        text:"L'utilisateur a la possibilté de s'inscrire pour être menbre du site et pourvoir vendre ses produits "
    },
    
    {
        id:"7",
        title:"Page de connexion (signin Page)",
        imgSrc:"./img/signup.png",
        text:"Pour vous connecter a votre compte pourpouvoire vendre vos produit il vous faut connecter a votre espce en y renseignat dan les champs vous information de connecxion "
    },
    
    {
        id:"8",
        title:"Profile de l'utilisateur (Landing Page)",
        imgSrc:"./img/profile.png",
        text:"C'est ici que que vous pourai voir les informations de votre profil . Ce qui vous donne le droit de modifier vos information de mettre vos produits en ligne et de voir vos différents ventes réalisées "
    },

]



function HelpArticle() {
  return (
      <div className="container-fluid flex  flex-col w-full ">
          <div classNem="flex items-center justify-center">
              <div className="relative flex items-center">
                  <img src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg" className="cover w-full h-[500px] "/>
                  <div className="absolute flex flex-col  "> 
                     <div className="text-6xl top-10 font-bold text-gray-100 "> A propos de nous sur Fathioune.com</div>
                     <div className="flex m-6">
                          <a className="m-2 rounded px-3 py-2 bg-orange-400 hover:bg-orange-500 text-gray-100 cursor-pointer col-3" href='#1'> Accueil</a>
                          <a className="m-2 rounded px-3 py-2 bg-orange-400 hover:bg-orange-500 text-gray-100 cursor-pointer col-3" href='#2'> voir articles par catégories</a>
                          <a className="m-2 rounded px-3 py-2 bg-orange-400 hover:bg-orange-500 text-gray-100 cursor-pointer col-3" href='#3'> details sur l'article</a>
                          <a className="m-2 rounded px-3 py-2 bg-orange-400 hover:bg-orange-500 text-gray-100 cursor-pointer col-3" href='#4'> Panier du client</a>
                          <a className="m-2 rounded px-3 py-2 bg-orange-400 hover:bg-orange-500 text-gray-100 cursor-pointer col-3" href='#5'> recherche produit</a>
                          <a className="m-2 rounded px-3 py-2 bg-orange-400 hover:bg-orange-500 text-gray-100 cursor-pointer col-3" href='#6'> Inscription</a>
                          <a className="m-2 rounded px-3 py-2 bg-orange-400 hover:bg-orange-500 text-gray-100 cursor-pointer col-3" href='#7'> connexion</a>
                          <a className="m-2 rounded px-3 py-2 bg-orange-400 hover:bg-orange-500 text-gray-100 cursor-pointer col-3" href='#8'> profile</a>
                          
                     </div>
                  </div>
               </div>

               <div className="flex container items-center justify-center">
                    <div className="row">
                         <div className="border h-20 w-20 col-4">
                             <img src="" className="rounded-lg"/> 
                         </div>
                    </div>
                    
               </div>


               <div class="grid grid-cols-2 gap-4 flex ">
                   
                   {
                       help.map((article)=>{
                           return(
                               <div  class="bg-blue-300 w-full m-2  rounded-lg ">
                                    <div class="bg-white w-full h-[500px]  hover:m-0  rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                                       <h1 id={article.id} class="m-4 text-2xl font-bold">{article.title}</h1>
                                       <hr class="m-4 rounded-2xl border-t-2"/>
                                       <p class="m-4 text-sm">{article.text}</p>
                                       <img src = {article.imgSrc} className=""/>
                                    </div>
                                </div>
                           )

                       } 
                    )}
                </div>
              
          </div>
      </div>
  )
}

export default HelpArticle