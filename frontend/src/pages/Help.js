import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HelpArticle from '../components/Help/HelpArticle'

function Help() {
  return (
    <div>
         {/*  Header */}
         <Header/>
         <HelpArticle/>
         { /* Footer */}
         <Footer/>
    </div>
  )
}

export default Help