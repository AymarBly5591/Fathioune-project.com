import React from 'react'



function HelpHeader() {
  return (
      <section className="container flex mt-6 border-b border-t items-center ">
        <div className="my-4 mx-8">

            <div className="flex items-center   justify-left my-2 border-b pt-5">
               <h2 className="leading-9 font-bold text-2xl uppercase"> autres rubriques d'aides </h2>
            </div>
            <hr></hr>

            <div className="">
               <form>
                 <div className="">
                    <input type={"text"} className="rounded-lg h-[1/2] border w-full border-md focus:bg-gray-300  py-2 px-2  " placeholder="enoncé votre problème ...."/>
                 </div>
                 <button type="submit" className="rounded m-2 bg-gray-200 text-gray-700 hover:bg-gray-300 px-3 py-2  "> envoyer</button>
                 <div className="">
                    <div className="leading-9 text-bold ">
                       autres rubriques d'aide
                    </div>
                    <div className="font-bold py-3">
                       <select className="w-200px border">
                         <option value={"1"}> Je voudrais passer ma commande par téléphone et payer en espèces a la livraisons</option>
                         <option value={"2"}> Je voudrais passer ma commande par téléphone et payer en espèces a la livraisons</option>
                         <option value={"2"}> Je voudrais passer ma commande par téléphone et payer en espèces a la livraisons</option>
                       </select>
                    </div>

                    <div className="font-bold py-3">
                       <select className="w-200px border">
                         <option value={"1"}> Je voudrais passer ma commande par téléphone et payer en espèces a la livraisons</option>
                         <option value={"2"}> Je voudrais passer ma commande par téléphone et payer en espèces a la livraisons</option>
                         <option value={"2"}> Je voudrais passer ma commande par téléphone et payer en espèces a la livraisons</option>
                       </select>
                    </div>
                    <div className="font-bold py-3">
                       <select className="w-200px border">
                         <option value={"1"}> Je voudrais passer ma commande par téléphone et payer en espèces a la livraisons</option>
                         <option value={"2"}> Je voudrais passer ma commande par téléphone et payer en espèces a la livraisons</option>
                         <option value={"2"}> Je voudrais passer ma commande par téléphone et payer en espèces a la livraisons</option>
                       </select>
                    </div>
                 </div>
               </form>
            </div>

        </div>         
      </section>
  )
}

export default HelpHeader;