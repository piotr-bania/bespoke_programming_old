import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import CanvasHero from '../components/canvas/CanvasHero'
import CanvasServices from '../components/canvas/CanvasServices'
import Overlay1 from '../components/overlay/Overlay1'
import Blog from '../components/blog/Blog'

export default function Home() {
return (

<div>
  {/* ---------------------- Head ---------------------- */}

  <Head>
    <title>Bespoke Programming | Freelance Web Developer | London</title>
    <meta name="description" content="Bespoke Programming | Freelance Web Developer | London" />
    <link rel="icon" href="/svg/logo.svg" />
  </Head>

  {/* ---------------------- Canvas ---------------------- */}
  <CanvasHero />
  <CanvasServices />

  {/* ---------------------- Hero ---------------------- */}
  <section id="hero">

    <Overlay1 />

    <div className="div1">
      <h1>I Solve Business <br />Problems <br /> Through Medium <br />of Web <br />Development.</h1>
    </div>

    <div className="div2">
      <p className='gradientBorder'>I am a web developer who builds custom web-applications right from consulting,
        development, maintenance and
        support.</p>
      <Link href="/quote"><button>Get A Free Quote</button></Link>
    </div>

    <div className="div3">
      <p>Scroll down</p>
      <Image className='arrowDown' src="/svg/triangleDown.svg" alt="arrow down" width={22} height={34} />
    </div>

  </section>


  {/* ---------------------- My Services ---------------------- */}
  <section id="myServices">

    <h3 className="heading">My <br />Services</h3>

    <div className="div2">
      <Image className='icon' src="/svg/servicesLanding.svg" alt="icon" width={60} height={60} />
      <h4>Landing Page <abbr className='purple'>⇀</abbr></h4>
      <p>A standalone web page that a person lands on after clicking through from an email, ad, or other digital
        location.</p>
    </div>

    <div className="div3">
      <Image className='icon' src="/svg/servicesSPA.svg" alt="icon" width={60} height={60} />
      <h4>Single Page Application <abbr className='purple'>⇀</abbr></h4>
      <p>A website that interacts with the user by dynamically rewriting the current web page with new data from the
        web
        server, instead of the default method of a web browser loading entire new pages.</p>
    </div>

    <div className="div4">
      <Image className='icon' src="/svg/servicesBespoke.svg" alt="icon" width={60} height={60} />
      <h4>Bespoke Website <abbr className='purple'>⇀</abbr></h4>
      <p>Sometimes ideas go beyond what existing systems are capable of. A tailor-made solution make your ideas a
        reality. </p>
    </div>

  </section>

  {/* ---------------------- Quote ---------------------- */}
  <section id="quote">

    <h2 className='quote'>All applications are <abbr className='purple'>hand-coded </abbr>from scratch <abbr
        className='magenta'>without
        using </abbr>any Content Management System.</h2>

  </section>

  {/* ---------------------- My Process ---------------------- */}
  <section id="myProcess">

    <h3 className="heading">My <br />Process</h3>

    <div className="div1">
      <h4 className="number">01</h4>
      <Image className='icon' src="/svg/processPlanning.svg" alt="icon" width={60} height={60} />
      <h4>Gathering information & planning</h4>
      <p>I define your goals and make schedule for the project. I then make requirement for documents, wireframe of
        pages and sitemap.</p>
    </div>

    <div className="div2">
      <h4 className="number">02</h4>
      <Image className='icon' src="/svg/processBuild.svg" alt="icon" width={60} height={60} />
      <h4>Build</h4>
      <p>I design the website that support good looks and responsive layout.
        Then, I build HTML templates, CSS styles and add functionality to the site.</p>
    </div>

    <div className="div3">
      <h4 className="number">03</h4>
      <Image className='icon' src="/svg/processTesting.svg" alt="icon" width={60} height={60} />
      <h4>Testing</h4>
      <p>When the build is finalized I will need to test it to make sure that everything is working correctly. <br />I
        launch the beta release and check both: the page speed and w3c validation.</p>
    </div>

    <div className="div4">
      <h4 className="number">04</h4>
      <Image className='icon' src="/svg/processLaunch.svg" alt="icon" width={60} height={60} />
      <h4>Launch & Maintenance</h4>
      <p>Once both parties are happy, website is then unveiled to the awaiting public. Upon request, I keep up to date
        website with content and technologies.</p>
    </div>

  </section>

  {/* ---------------------- Featured Work ---------------------- */}
  <section id="featuredWork">

    <div className="heading">
      <h3>Featured <br />Work</h3>
      <p className='uppercase'>Selected Projects</p>
    </div>

    <div className="div1">
      <div className="project">
        <Image src="/images/project-1.jpg" alt="icon" width={400} height={250} />
      </div>
      <h4><abbr className='purple'>000</abbr> Personal Portfolio</h4>
      <p>This is my personal portfolio website.</p>
      <div className="gradientBorder">
        <p className='whiteText'>Technologies used:</p>
        <p>Html, CSS, Sass, JavaScript, Three.js</p>
      </div>
    </div>

    <div className="div2">
      <div className="project">
        <Image src="/images/project-2.jpg" alt="icon" width={400} height={250} />
      </div>
      <h4><abbr className='purple'>001</abbr> Second Project</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div className="gradientBorder">
        <p className='whiteText'>Technologies used:</p>
        <p>Html, CSS, Sass, JavaScript, Three.js</p>
      </div>
    </div>

    <div className="div3">
      <div className="project">
        <Image src="/images/project-1.jpg" alt="icon" width={400} height={250} />
      </div>
      <h4><abbr className='purple'>002</abbr> Third Project</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <div className="gradientBorder">
        <p className='whiteText'>Technologies used:</p>
        <p>Html, CSS, Sass, JavaScript, Three.js</p>
      </div>
    </div>

  </section>

  {/* ---------------------- Quote ---------------------- */}
  <section id="quote">

    <h2 className='quote'>Ready to make your <abbr className='purple'>idea </abbr>come to <abbr className='magenta'>life
      </abbr>?</h2>

  </section>

  {/* ---------------------- About Me ---------------------- */}
  <section id="about">

    <div className="heading">
      <h3>About <br />Me</h3>
    </div>

    <div className="description upper">
      <p className='uppercase'>Myself</p>
      <p>I am a self-taught web developer from Poland.
        <br /><br />
        Since May 2021 my focus went entirely into programming. I have a passion for coding, web development, 3d
        environments and UI. I translate designs to front-end code and easily work with cross-functional teams to define
        and develop any product roadmaps.
        <br /><br />
        I am based in London, UK.
        <br />
        I am experienced with HTML5, CSS3, JavaScript, Node.js, React.js, Next.js. I also have +7 years of experience
        with WordPress.
        <br /><br />
        My personal portfolio website: <a href="https://piotrbania.dev" target="_blank" rel="noreferrer"><abbr
            className='link'>piotrbania.dev</abbr></a>
        <br />
        GitHub profile: <a href="https://github.com/piotr-bania" target="_blank" rel="noreferrer"><abbr
            className='link'>Piotr-Bania</abbr></a>
      </p>
    </div>

    <div className="description lower">
      <p className='uppercase'>The Company</p>
      <p>Bespoke Programming is a Private Limited Company incorporated in United Kingdom on 6th of June 2022.
        <br /><br />
        It was
        created in order to help local companies with their growth, through a medium of web presence and search engine
        optimization.
        <br /><br />
        Find out more about my workflow and approach to the projects on the
        <Link href="/process"><a><abbr className='link'> Process Page</abbr></a></Link>.</p>
    </div>
  </section>

  {/* ---------------------- Recent Posts ---------------------- */}
  <section id="recentPosts">

    <div className="heading">
      <h3>Recent <br />Posts</h3>
    </div>
  </section>
  
  <Blog />

</div>
)
}