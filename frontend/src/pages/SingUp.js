

import React from 'react'
import {Link  ,  useNavigate} from  'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {FaFacebookSquare} from 'react-icons/fa';
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from "axios";


function SingUp() {
    var choix;
    const navigate = useNavigate();
  return (
    <div>
         
         <Header/>

         {/* Formulaire d'iinscription */}
         <div className="flex flex-col items-center justify-center py-5 px-4 sm:px-3 lg:px-3 ">
              {/* Slogan singUp */}
              <div className="flex items-center text-center">
                   <h2 className="font-bold text-4xl py-1">My Fathioune</h2>                
              </div>
              <div class="max-w-md w-full space-y-8 border rounded-lg p-3 px-3 shadow-lg">
                    <div className="border-b py-4">
                        <h2 class="mt-6 text-left text-2xl leading-10  text-orange-900">Créer un compte sur My Fathioune</h2>
                    </div>
                    <Formik
                         initialValues={{ name : '', telephone :'', email: '' ,  password:'' }}
                         validationSchema={Yup.object({
                             name : Yup.string().max(100, 'Must be 15 characters or less').required('Required'),
                             telephone: Yup.number().required('Required'),
                             email: Yup.string().email('Invalid email address').required('Required'),
                             password: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
                             })}
                             
                             onSubmit={(values, { setSubmitting }) => {
                                 setTimeout(() => {
                                     alert(JSON.stringify(values, null, 2));
                                     setSubmitting(false);
                                     // choix
                                     choix =  window.confirm("Souhaiter vous faire l'enregistre de votre utilisateur ");
                                     if(choix  == true ){
                                         axios({
                                             url:"http://localhost:8080/api/auth/register" ,
                                             method:"POST",
                                             headers :{ "Content-Type" :"application/json" },
                                             data : JSON.stringify(values, null, 2)
                                             }).then((res)=>{
                                                 alert("Utilisateur cérer avec succés");
                                                 navigate("../login");
                                                 }).catch((err)=>alert("Errerur /n soit l'utilisateur existes déja "))
                                     }else{
                                         return ;
                                        }
                                        }, 400);
                                    }}
                                    >
                                    {formik => (
                                          <form onSubmit={formik.handleSubmit} class="mt-8 space-y-6" >
                                               <div class="rounded shadow-sm -space-y-px flex flex-col space-y-1">
                                                    <label className="font-bold">Nom & prénoms</label>
                                                    <input  {...formik.getFieldProps('name')}  type="text" name="name" id="name"  className="border rounded focus:border-orange-200 " />
                                                </div>
                                                {formik.touched.name && formik.errors.name ? (
                                                    <div class="text-red-500 text-xs italic">{formik.errors.name} </div>
                                                  ) : null}

                                                <div class="rounded shadow-sm -space-y-px flex flex-col space-y-1">
                                                    <label className="font-bold">email </label>
                                                    <input {...formik.getFieldProps('email')} type="email" name="email" id="email" className="border rounded focus:border-orange-200" />
                                                </div>
                                                {formik.touched.email && formik.errors.email ? (
                                                    <div class="text-red-500 text-xs italic">{formik.errors.email} </div>
                                                  ) : null}
                                                <div class="rounded shadow-sm -space-y-px flex flex-col space-y-1">
                                                    <label className="font-bold"> téléphone </label>
                                                    <input {...formik.getFieldProps('telephone')} type="number" name="telephone" id="telephone" className="border rounded focus:border-orange-200" placeholder="2250595387052" />
                                                </div>
                                                {formik.touched.telephone && formik.errors.telephone ? (
                                                    <div class="text-red-500 text-xs italic">{formik.errors.telephone} </div>
                                                  ) : null}
                                                <div class="rounded shadow-sm -space-y-px flex flex-col space-y-1">
                                                    <label className="font-bold">Mot de passe</label>
                                                    <input {...formik.getFieldProps('password')} type="password" name="password" id="password" className="border rounded focus:border-orange-200" />
                                                </div>
                                                {formik.touched.password && formik.errors.password ? (
                                                    <div class="text-red-500 text-xs italic">{formik.errors.password} </div>
                                                  ) : null}
                                                <div>
                                                    <button type="button" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                            <svg class="h-5 w-5 text-yellow-100 group-hover:text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            </svg>
                                                        </span>
                                                        verifié addresse email
                                                    </button>
                                                </div>
                                            <div>
                                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                                    <svg class="h-5 w-5 text-orange-100 group-hover:text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    </svg>
                                                </span>
                                                Créer un compte
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-center ">
                                            <h2 clasName="leading-9">
                                                <Link to={"/signin"}  className="hover:text-blue-400 hover:underline text-blue-700 underline"><p className="font-bold">Identifiez vous</p></Link>
                                                   ou créer un compte avec
                                            </h2>
                                        </div>
                                        <hr></hr>
                                        <div className="flex items-center justify-center">
                                            <div>
                                                 <button type="submit" className="group relative w-full h-full flex justify-center py-5 px-10 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                                        <FaFacebookSquare className="h-40"/>
                                                    </span>
                                                    facebook
                                                 </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ">
                                            <div>
                                                <a href="#" className="hover:text-blue-400 hover:underline">En vous incrivant vous acceptez nos conditions d'utilisations</a>
                                                     <div className="font-bold "> si vous avez déja un compte</div>
                                                     <Link to={"/signin"}  className="hover:text-blue-400 hover:underline text-blue-700 underline"><h2 className="font-bold">Identifiez vous</h2></Link>
                                            </div>
                                        </div>
                                    </form>
                                    )}
                                    </Formik>

                                </div>
                                
            </div>
         <Footer/>
    </div>
  )
}

export default SingUp
