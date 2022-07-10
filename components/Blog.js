import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
return (

<section id="blog">

    <h3 className="heading">Blog</h3>

    <div className="post1">
        <Image className='arrowDown' src="/svg/triangleDown.svg" alt="arrow down" width="100%" height="100%" />

        <h4>Post Title Number 1</h4>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nisi doloribus, nesciunt tempore,
            deserunt asperiores fugit dignissimos error voluptate dolore non ipsum voluptates nam? Corporis?</p>

        <Link href="/blog/post1"><button>Read More</button></Link>
    </div>

    <div className="post2">
        <Image className='arrowDown' src="/svg/triangleDown.svg" alt="arrow down" width="100%" height="100%" />

        <h4>Post Title Number 2</h4>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nisi doloribus, nesciunt tempore,
            deserunt asperiores fugit dignissimos error voluptate dolore non ipsum voluptates nam? Corporis?</p>

        <Link href="/blog/post1"><button>Read More</button></Link>
    </div>

    <div className="post3">
        <Image className='arrowDown' src="/svg/triangleDown.svg" alt="arrow down" width="100%" height="100%" />

        <h4>Post Title Number 3</h4>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nisi doloribus, nesciunt tempore,
            deserunt asperiores fugit dignissimos error voluptate dolore non ipsum voluptates nam? Corporis?</p>

        <Link href="/blog/post1"><button>Read More</button></Link>
    </div>
</section>
)
}

export default Blog