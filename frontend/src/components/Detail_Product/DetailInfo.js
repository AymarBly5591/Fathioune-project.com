import React from "react";


export default function DetailInfo(){
    return(
        <div className="rounded-lg shadow-md py-2 m-2 mx-5">
           <div className="border-b py-3">
              <h2 className="font-bold px-5 py-1">Details</h2>
           </div>
           <div className="p-2">
              <p>cet Produits est un produits qui permet de bien s'assoire confortablement , Aprés une longue marche sur le soleil , ne serai -il pas profitable de se reposer sur une chaise bien confortable</p>
              <p>Pour plus s'information vellez contacter ce numéro <span  className="border font-bold">+225 92 929 290 20</span></p>
           </div>
        </div>
    )
}