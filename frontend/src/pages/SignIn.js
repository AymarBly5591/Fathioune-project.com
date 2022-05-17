


import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import {FaFacebookSquare} from "react-icons/fa";
import {GrSecure} from 'react-icons/gr';
import {Formik} from 'formik' ;
import  *as Yup from  "yup";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';



function SignIn() {
    const navigate=useNavigate();
  return (
      <div>
            {/* headers */}
            <Header/>
            <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8 border p-3">
                    <div className="border-b py-4">
                        <h2 class="mt-6 text-center text-2xl font-bold text-orange-900">Connexion</h2>
                    </div>
                    <Formik
                       initialValues={{  email: '' ,  password:'' }}
                       validationSchema={Yup.object({
                           email: Yup.string().email('Invalid email address').required('Required'),
                           password: Yup.string().required('Required')
                           })}
                        
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                // choix *****************************
                                axios({
                                    url :"http://localhost:8080/api/auth/login" ,
                                    method:"POST",
                                    data: JSON.stringify(values, null, 2),
                                    headers:{ "Content-Type" :"application/json"}
                                }).then((res)=>{
                                    alert("Connexion Ressi ."+JSON.stringify(values, null, 2) );
                                    alert("Enregistrement LocalStorage"+values.email);
                                    localStorage.setItem("userLogin",values.email)
                                    navigate("/profile");
                                    })
                                    .catch(()=>{alert("Connexion échoué !!!")});
                                    }, 400);
                                }}
                                >
                                {formik => (

                    <form class="mt-8 space-y-6" onSubmit={formik.handleSubmit} >
                          <input type="hidden" name="remember" value="true"/>
                          <div class="rounded-md shadow-sm -space-y-px flex flex-col space-y-5">
                              <div>
                                  <label for="email" class="sr-only">Email</label>
                                  <input {...formik.getFieldProps('email')} id="email" name="couriel" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-orange-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                              </div>
                              {formik.touched.email && formik.errors.email ? (
                                <p className="text-red-500 text-xs italic">{formik.errors.email} </p>
                              ) : null}

                              <div>
                                   <label for="password" class="sr-only">mot de passe</label>
                                   <input {...formik.getFieldProps('password')} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-orange-500 focus:z-10 sm:text-sm" placeholder="Password" />
                              </div>
                              {formik.touched.password && formik.errors.password ? (
                                <p className="text-red-500 text-xs italic">{formik.errors.password} </p>
                              ) : null}
                          </div>
                          <div class="flex items-center justify-between">
                               <div class="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">  </label>
                               </div>
                               <div class="text-sm">
                                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> mot de passe oublié ? </a>
                               </div>
                          </div>
                          <div>
                              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg class="h-5 w-5 text-orange-100 group-hover:text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                           <GrSecure />
                                        </svg>
                                    </span>
                                    se connecter
                              </button>
                          </div>
                    </form>
                                
                    )}
                    </Formik>
             </div>

             <div className="max-w-md w-full space-y-8 border-l p-3 m-3">
                  <div className="border-b py-4">
                      <h2 class="mt-6 text-center text-3xl fonimport Reactotron from 'reactotron-react-jstext-orange-900">
                          Veillez vous inscrire pour beneficiez d nouvelles offres
                      </h2>
                  </div>
                  <div className="flex flex-col ">
                      <div className="p-2">
                          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                   <svg class="h-5 w-5 text-orange-200 group-hover:text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                   </svg>
                              </span>
                              S'inscrire
                            </button>
                          
                      </div>
                      <div className="p-2">
                           <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                   <svg class="h-5 w-5 text-blue-200 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <FaFacebookSquare/>
                                   </svg>
                                </span>
                                s'inscrire avec facebook
                           </button>
                      </div>
                  </div>
            </div>
        </div>
        <Footer/>
    </div>

  )
}

export default SignIn;