import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HelpHeader from '../components/Help_Page/HelpHeader';
import HelpMenu from '../components/Help_Page/HelpMenu';
import HelpOther from '../components/Help_Page/HelpOther';

function Help() {
  return (
    <div>
         <Header/>
         <HelpHeader/>
         <HelpMenu/>
         <HelpOther/>
         <Footer/>
    </div>
  )
}

export default Help