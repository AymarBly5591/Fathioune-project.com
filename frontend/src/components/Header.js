import React from "react";
import {Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="relative bg-white border border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex align-center justify-between py-6">
          {/* Logo */}
          <Link to="/"><h1 className="text-2xl text-orange-700">My Fatihoune</h1></Link>
          <div className="flex align-center space-x-4">
            {/* Search Bar */}
            <div className="flex align-center space-x-2 border">
              <select className=" text-lg border p-2 w-[150px] rounded-md">
                  <option><Link to={"/cart"}><button>Tout catégories</button></Link></option>
                  <option> <Link to={"/cart"}><button>Informatique</button></Link></option>
              </select> 
              <input
                className="text-lg border p-2 w-[350px] rounded-md"
                type="text"
                placeholder="Rechercher un produit"
              />
              <button className="text-lg bg-orange-500 text-white rounded-md px-2">
                Rechercher
              </button>
            </div>
            {/* Se connecter */}
            <Link to="/signin"
              className="text-lg py-2 flex align-center text-center hover:text-orange-500"
            >
              Se connecter
            </Link>
            {/* S'enregistrer */}
            <Link to={"/signup"}
              className="text-lg py-2 flex align-center text-center hover:text-orange-500"
              href="#/"
            >
              S'enregistrer
            </Link>
            <Link to="/help"
              className="text-lg py-2 flex align-center text-center hover:text-orange-500"
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
