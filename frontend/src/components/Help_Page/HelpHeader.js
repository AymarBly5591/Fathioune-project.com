import React from 'react'



function HelpHeader() {
  return (
      <div className='container-fluid px-2 flex flex-col items-center justify-center'>
          {/* Image de arrièreplan */}
          <div className="h-[40] py-20 w-full  flex flex-col items-center justify-center" style={{ backgroundImage:"url('img/cinéma.jpg')" , backgroundSize:"cover" }}>
              
              <div className="font-bold text-5xl text-gray-100 ">Bienvenue sur la page 'd'assitance d'aide</div>
          </div>
          {/* Message de la page d'accueil */}
          <div className="container relative border rounded flex items-center col-sm-4 col-md-2 col-lg-3 border-green-300 text-gray-700 p-2 hover:text-orange-800 hover:border-orange-400">
              <div className="absolute top-0 left-2 rounded-lg bg-red-400 h-5 w-6 flex items-center justify-center text-gray-100">X</div>
             <p className=" leading-9 font-bold text-1xl py-3 ">Dans cette partie de cette page vous pourrer vous renseigner
              sur certaines fonctionnnabilté de la plateforme telque les commandes  ,
               les paiments  , l'inscription  , l'identification  ,<span  className="font-extrabold text-2xl hover:text-blue-500 hover:bg-green-600 hover:text-green-100 cursor-pointer"> vos ventes en visitant Les diffrents items ci dessous </span>
             </p>             
          </div>
          
      </div>
  )
}

export default HelpHeader;