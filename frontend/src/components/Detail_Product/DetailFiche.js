import React from "react";

export default function DeatailFiche(){
    return(
        <div className="px-2 rounded shadow border m-5">
           <div className="border-b py-3 mx-2">
               <h2 className="font-bold"> <span></span> Fiche technique</h2>              
           </div>
           <div className="">
              <ul classNema="m-2">
                <li className="m-2" ><p>Instruction 1 </p></li>
                <li className="m-2" ><p>Instruction 2 </p></li>
                <li className="m-2" ><p>Instruction 3 </p></li>
                <li className="m-2" ><p>Instruction 4 </p></li>
                <li className="m-2" ><p>Instruction 5 </p></li>
              </ul>
           </div>
        </div>
    )
}