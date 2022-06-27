import React from 'react'
import Navbar from './Navbar'
import Strips from './Strips'
import Overlay from './Overlay'

const Layout = ({children}) => {
return (
<div>
    <Navbar />
    <Strips />
    <Overlay />
    { children }
</div>
)
}

export default Layout