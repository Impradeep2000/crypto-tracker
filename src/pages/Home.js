import React from 'react'
import Header from '../components/Common/Header'
import MainComponent from '../components/LandingPage/MainComponent'
import Footer from '../components/Common/Footer'
import ScrollContainer from '../components/LandingPage/ScrollContainer'

function HomePage() {
  return (
    <div>
        <Header/>
        <ScrollContainer />
        <MainComponent />
        <Footer />
    </div>
  )
}

export default HomePage