import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {BsTelephone} from  'react-icons/bs';
import {AiOutlineMail} from  "react-icons/ai";
import {MdOutlineDriveFileRenameOutline} from  "react-icons/md";
import {FiEdit} from  "react-icons/fi" ;
import {MdOutlineProductionQuantityLimits} from  "react-icons/md";
import {SiGithubactions} from  "react-icons/si" ;


function Profile() {
  return (

      <div className="bg-white block ">
          <Header/>
          
          <div className="w-full p-3 mx-auto py-3 flex flex-col ">

              <div style={{backgroundImage:"url('')"}} className="container-fluid rounded bg-orange-300 relative w-full h-80 bg-gray-200 flex flex-col items-center justify-center">
                  <div className="text-6xl border rounded-lg p-2">profile</div>
                  <div className="text-3xl font-bold text-white">Jana Strassman</div>
                  <div className="text-white">Enregistrer le jj-MM-AAAA</div>
                  <button type="button" className="flex absolute text-white bg-gray-300 py-2 px-4 rounded  transparent hover:bg-gray-400 top-1 right-3 ">edit <MdOutlineDriveFileRenameOutline className="h-5 w-5"/></button>
              </div>

              <div className="lg:flex md-flex-col xs:flex-col">
                   
                    <div className="flex flex-col border px-3 w-[1/2]">
                        <div className="font-bold text-2xl">Contact Details</div>

                        <div className="flex flex-col w-full">
                            <div className="border-b my-2">
                                <div className="text-gray-500">Nom et prénoms</div>
                                <div className="text-black font-bold">Edoir Fracklin <MdOutlineDriveFileRenameOutline className="h-5 w-5"/></div>
                            </div>

                            <div className="border-b my-2">
                                 <div className="text-gray-500">email</div>
                                 <div className="text-black font-bold">edoir@gmail.com <AiOutlineMail className="h-5 w-5"/></div>
                            </div>

                            <div className="border-b my-2">
                                <div className="text-gray-500">téléphone</div>
                                <div className="text-black font-bold">+225 0567275618   <BsTelephone className="h-5 w-5"/></div>
                            </div>
                        </div>
                    </div>        
                    
                    <div className="flex flex-col">
                          <div className="flex flex-row">
                               <div class="border py-3 px-5 flex items-center justify-center font-bold"><FiEdit className="h-5 w-5"/> Edit profile</div>
                               <div class="border py-3 px-5 flex items-center justify-center font-bold"><MdOutlineProductionQuantityLimits className='h-5 w-5' /> Produits</div>
                               <div class="border py-3 px-5 flex items-center justify-center font-bold"><SiGithubactions className="h-5 w-5"/> acitvités</div>
                          </div>
                          <div class="border h-20 lg:w-full ">
                          </div>
                    </div>
              </div>
             


          </div>
          
          <Footer/>
    </div>
  )
}

export default Profile