import React, { useState } from 'react';
import ListCategories  from '../ListCategories'
import {Link} from  "react-router-dom"
import SearchProducts from './SearchProducts';





export default function SearchResult({produits}) {
    


  return (
    <div>
      <section class="bg-white dark:bg-gray-100">
        <div class="container px-6 py-8 mx-auto">
            <div class="flex lg:-mx-2">
                <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                    <ListCategories/>
                </div>
                <SearchProducts produits={produits} />
                
            </div>
        </div>
    </section>

    </div>
  )
}
