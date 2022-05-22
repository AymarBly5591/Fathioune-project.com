import React from 'react'
import {Link} from  "react-router-dom" ;


function CartList() {
  return (
    <div  className=" absolute rounded top-20  z-10 border p-10 bg-white">
                   
                   {/* prémiére categories */}
                   <div>
                      <div><h2 className="font-bold underline "><Link to={"/cart"}>Infomatiques</Link></h2></div>
                      <div>
                         <ul>
                             <li className="border-t border-b p-2 my-1"><Link to={"/cart"}>accessoires </Link></li>
                             <li className="border-t border-b p-2 my-1"><Link to={"/cart"}>stokage </Link></li>
                             <li className="border-t border-b p-2 my-1"><Link to={"/cart"}>Audio </Link></li>
                         </ul>
                      </div>
                   </div>
                   {/* deuxième catégories */}
                   <div>
                      <div><h2 className="font-bold underline "><Link to={"/cart"}>Santé</Link></h2></div>
                      <div>
                         <ul>
                             <li className="border-t border-b p-2 my-1"><Link to={"/cart"}>Biomédical </Link></li>
                             <li className="border-t border-b p-2 my-1"><Link to={"/cart"}>pharcetiques </Link></li>
                             <li className="border-t border-b p-2 my-1"><Link to={"/cart"}>naturelle </Link></li>
                         </ul>
                      </div>
                   </div>
              </div>
  )
}

export default CartList