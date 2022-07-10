import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Post1 = () => {
return (

<section id="post">
    <div className="postImage">
        <Image className='arrowDown' src="/svg/triangleDown.svg" alt="arrow down" width="100%" height="100%" />

        <h1 className='postTitle'>Post Title Number 1</h1>

        <p className='postContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nisi doloribus, nesciunt tempore,
            deserunt asperiores fugit dignissimos error voluptate dolore non ipsum voluptates nam? Corporis?</p>
    </div>
</section>

)
}

export default Post1