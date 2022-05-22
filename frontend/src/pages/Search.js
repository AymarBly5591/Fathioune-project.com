


import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import ListCategories from '../components/ListCategories'
import NavBarCategories from '../components/NavBarCategories'
import ProductList from '../components/ProductList'
import SearchResult from "../components/Search_Product/SearchResult" ;




const produits  = [
  {
      id:1,
      name:"ordiateur protable Lenovo Yoga C940-14IL",
      imgSrc:"https://th.bing.com/th/id/OIP.E5AkwTfa4J8uAbZrma4J7AHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7",
      imgAlt:"",
      price :"160000"
  },
  {
      id:2,
      name:"hp compaq 6550b",
      imgSrc:"https://th.bing.com/th/id/OIP.5gHT8N8kmOGvcXXy4xMC8AHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7",
      imgAlt:"",
      price :"160000"
  },
  {
      id:3,
      name:"ordiateur protable Convertible 2 en 1",
      imgSrc:"https://th.bing.com/th/id/OIP.ISsZ2Ulk6rpmejbwpy_l5AHaHa?w=151&h=191&c=7&r=0&o=5&pid=1.7",
      imgAlt:"",
      price :"160000"
  },
  {
      id:1,
      name:"ordiateur protable Lenovo Yoga C940-14IL",
      imgSrc:"https://th.bing.com/th/id/OIP.E5AkwTfa4J8uAbZrma4J7AHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7",
      imgAlt:"",
      price :"160000"
  },
  {
      id:2,
      name:"hp compaq 6550b",
      imgSrc:"https://th.bing.com/th/id/OIP.5gHT8N8kmOGvcXXy4xMC8AHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7",
      imgAlt:"",
      price :"160000"
  },
  {
      id:3,
      name:"ordiateur protable Convertible 2 en 1",
      imgSrc:"https://th.bing.com/th/id/OIP.ISsZ2Ulk6rpmejbwpy_l5AHaHa?w=151&h=191&c=7&r=0&o=5&pid=1.7",
      imgAlt:"",
      price :"160000"
  },
  {
      id:1,
      name:"ordiateur protable Lenovo Yoga C940-14IL",
      imgSrc:"https://th.bing.com/th/id/OIP.E5AkwTfa4J8uAbZrma4J7AHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7",
      imgAlt:"",
      price :"160000"
  },
  {
      id:2,
      name:"hp compaq 6550b",
      imgSrc:"https://th.bing.com/th/id/OIP.5gHT8N8kmOGvcXXy4xMC8AHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7",
      imgAlt:"",
      price :"160000"
  },
  {
      id:3,
      name:"ordiateur protable Convertible 2 en 1",
      imgSrc:"https://th.bing.com/th/id/OIP.ISsZ2Ulk6rpmejbwpy_l5AHaHa?w=151&h=191&c=7&r=0&o=5&pid=1.7",
      imgAlt:"",
      price :"160000"
  },
  {
      id:1,
      name:"ordiateur protable Lenovo Yoga C940-14IL",
      imgSrc:"https://th.bing.com/th/id/OIP.E5AkwTfa4J8uAbZrma4J7AHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7",
      imgAlt:"",
      price :"160000"
  },
  {
      id:2,
      name:"hp compaq 6550b",
      imgSrc:"https://th.bing.com/th/id/OIP.5gHT8N8kmOGvcXXy4xMC8AHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7",
      imgAlt:"",
      price :"160000"
  },
  {
      id:3,
      name:"ordiateur protable Convertible 2 en 1",
      imgSrc:"https://th.bing.com/th/id/OIP.ISsZ2Ulk6rpmejbwpy_l5AHaHa?w=151&h=191&c=7&r=0&o=5&pid=1.7",
      imgAlt:"",
      price :"160000"
  }
];

function Search() {
  return (
    <div>
       <Header/>
       <NavBarCategories/>
       <SearchResult produits={produits}/>
     
    </div>
  )
}

export default Search
