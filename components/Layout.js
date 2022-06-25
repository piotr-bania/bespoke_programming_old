import React from 'react'
import Navbar from './Navbar'
import Strips from './Strips'

const Layout = ({children}) => {
return (
<div>
    <Navbar />
    <Strips />
    { children }
</div>
)
}

export default Layout