import React from 'react'
import Navbar from './Navbar'
import Strips from './Strips'
import Footer from './Footer'

const Layout = ({children}) => {
return (
<div>
    <Navbar />
    <Strips />
    { children }
    <Footer />
</div>
)
}

export default Layout