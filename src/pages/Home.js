import React, { lazy } from 'react'
// import Hero from '../components'

const Hero = lazy(() => import('../components/Hero'));


const Home = () => {
    return (
        <main>
            <Hero></Hero>
        </main>
    )
}


export default Home