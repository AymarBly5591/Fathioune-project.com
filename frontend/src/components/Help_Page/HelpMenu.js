import React from "react";
import {useNavigate , Link} from  "react-router-dom";
import {AiFillHome} from  "react-icons/ai";
import {FaMoneyBillWaveAlt} from  "react-icons/fa";
import  {RiTaskFill} from  "react-icons/ri"





function HelpHeader() {

    const navigate = useNavigate("")

     var Navigue = (lien)=>{
         navigate(lien);
        }
  return (
      <div className="container flex flex-col  my-3 border-t border-b py-3  ">
            <div  className="leading-9 font-bold flex justify-center text-4xl my-3 p-1 border-b">Options d'aide</div>
            
            <div className="container border">
               <div className=" flex  justify-center items-center">
                
                 <div onClick={()=> Navigue("/help/commands")} className="flex flex-col items-center border hover:transition-2-ease-in justify-center py-3 px-4 m-3 rounded-lg hover:shadow-lg border-orange-500 hover:border-orange-600 hover:border-3xl hover:cursor-pointer  col-md-2 col-sm-4 col-lg-3">
                    <div className="border-b my-4  ">
                        <h2 className="uppercase"><span className="font-extrabold"><AiFillHome/></span> Commandes</h2>
                    </div> 
                    <div className='w-100 h-full'>
                        <p>. <a href="#" className="underline hover:font-bold hover:text-blue-600 m-2">  livraison commandes </a></p>
                        <p>. <a href="#" className="underline hover:font-bold hover:text-blue-600 m-2">  listes de vos commandes </a></p>
                        <p>.  <a href="#" className="underline hover:font-bold hover:text-blue-600 m-2"> Derroulement de votre commandes </a></p>
                    </div>
                 </div>

                 <div onClick={()=>Navigue("/help/buy")} className="flex flex-col items-center border hover:transition-2-ease-in justify-center py-3 px-4 m-3 rounded-lg hover:shadow-lg border-orange-500 hover:border-orange-600 hover:border-3xl hover:cursor-pointer  col-md-2 col-sm-4 col-lg-3">
                    <div className="border-b my-4  ">
                        <h2 className="uppercase"><span className="font-extrabold"><FaMoneyBillWaveAlt/>paiement</span> </h2>
                    </div> 
                    <div className='w-100 h-full'>
                        <p>. <a href="#" className="underline hover:font-bold hover:text-blue-600 m-2">  livraison commandes </a></p>
                        <p>. <a href="#" className="underline hover:font-bold hover:text-blue-600 m-2">  listes de vos commandes </a></p>
                        <p>.  <a href="#" className="underline hover:font-bold hover:text-blue-600 m-2"> Derroulement de votre commandes </a></p>
                    </div>
                 </div>

                 <div onClick={()=>Navigue("/help/account")} className="flex flex-col items-center border hover:transition-2-ease-in justify-center py-3 px-4 m-3 rounded-lg hover:shadow-lg border-orange-500 hover:border-orange-600 hover:border-3xl hover:cursor-pointer  col-md-2 col-sm-4 col-lg-3">
                    <div className="border-b my-4  ">
                        <h2 className="uppercase"><span className="font-extrabold"><RiTaskFill/></span> ventes</h2>
                    </div> 
                    <div className='w-100 h-full'>
                        <p>. <a href="#" className="underline hover:font-bold hover:text-blue-600 m-2">  livraison commandes </a></p>
                        <p>. <a href="#" className="underline hover:font-bold hover:text-blue-600 m-2">  listes de vos commandes </a></p>
                        <p>.  <a href="#" className="underline hover:font-bold hover:text-blue-600 m-2"> Derroulement de votre commandes </a></p>
                    </div>
                 </div>
                 

               </div>
            </div>
           
      </div>
  )
}

export default HelpHeader;