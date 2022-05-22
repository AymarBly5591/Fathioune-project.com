import React , {useState} from "react";
import {Link ,  useNavigate } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";
import CartList from "../components/CartList";

const Header = () => {
  const  navigate  =  useNavigate();
  const  [btnCart , setCart] =  useState(false);

  return (
    <div className="relative bg-white border border-b">
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex align-center justify-between py-6">
          {/* Logo */}
          <Link to="/"><h1 className="text-1xl text-orange-700">My Fatihoune</h1></Link>
          <div className="flex align-center space-x-4">
            {/* Search Bar */}
            <div className="flex align-center space-x-2 h-14 border">
              <button type="button" onClick={()=>{
                setCart(!btnCart);
                console.log(btnCart);
              }} onHoverStart={()=>{setCart(true) ;  console.log(btnCart)}}
              onHoverEnd={()=>{setCart(false) ;  console.log(btnCart)}}
               className="bg-gray-200 rounded p-2">
                 catégories
              </button>
              {
                btnCart == true ? <CartList/> : null
              }
              
              <input
                className="text-lg border p-2 w-full h-12  lg:w-[350px] rounded-md"
                type="text"
                placeholder="Rechercher un produit"
              />
              <button onClick={()=>{ navigate("/search")}} className="text-lg bg-orange-500 h-12 text-white rounded-md px-2">
                Rechercher
              </button>
            </div>
            {/* Se connecter */}
            <Link to="/signin"
              className=" xs:invisible sm:visible md:visible lg:visible  py-2 flex align-center text-center hover:text-orange-500"
            >
              Se connecter
            </Link>
            {/* S'enregistrer */}
            <Link to={"/signup"}
              className="text-lg xs:invisible sm:visible md:visible lg:visible py-2 flex align-center text-center hover:text-orange-500"
              href="#/"
            >
              S'enregistrer
            </Link>
            <Link to="/profile"
              className="text-lg xs:invisible sm:visible md:visible lg:visible py-2 flex align-center text-center hover:text-orange-500"
            >
              profile
            </Link>
            <Link to="/help"
              className="text-lg xs:invisible sm:visible md:visible lg:visible py-2 flex align-center text-center hover:text-orange-500"
            >
              aide
            </Link>
            {/* Mon Compte */}
            {/* <a
              className="text-lg py-2 flex align-center text-center hover:text-orange-500"
              href="#/"
            >
              <RiUserLine className="w-7 h-7" />
              <span>Aymar Bly</span>
            </a> */}
            {/* Mon panier' */}
            <Link to={"/panier"}
              href="#/"
              className="text-lg p-2 flex align-center space-x-2 text-center hover:text-orange-500"
            >
              <div className="relative">
                <BiCart className="w-7 h-7" />
                <span className="text-[10px] absolute top-[-5px] right-[-5px] z-10 bg-orange-500 text-white w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
              </div>
              <span>Mon panier</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
