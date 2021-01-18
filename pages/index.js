import React from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  const [open, setOpen] = React.useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="bg-gray-50">
      <Head>
        <title>JPG Streaming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`fixed overflow-hidden w-full h-full px-5 pt-2 bg-blue-900 lg:hidden ${
          open ? "top-0" : "top-full"
        }`}
        id="menu"
      >
        <div className="flex flex-row items-center justify-between ">
          <a href="#" className="focus:outline-red">
            <img className="p-1 h-14 md:h-16" src="video-logo.png" />
          </a>
          <a href="#" onClick={toggleMenu} className="text-white">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </a>
        </div>
        <nav className="flex flex-col pt-10 place-items-center">
          <ul className="flex flex-col w-full pb-10 space-y-6 text-xs tracking-widest text-center text-white uppercase border-0 border-b border-gray-600">
            <li>Tickets and Events</li>
            <li>Visit</li>
            <li>Contact Us</li>
          </ul>
          <div className="pt-4 pb-4 font-serif text-sm text-center text-white">
            Connect with JPG
          </div>
          <div className="flex pb-6 space-x-8 text-center text-gray-900 place-items-center">
            <a href="#">
              <svg
                className="w-6 h-6"
                viewBox="0 0 16.5 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 17.7 27 V 17 h 3.4 l 0.5 -3.9 h -3.9 v -2.5 c 0 -1.1 0.3 -1.9 1.9 -1.9 l 2.1 0 V 5.2 c -0.4 0 -1.6 -0.2 -3 -0.2 c -3 0 -5 1.8 -5 5.2 v 2.9 h -3.4 V 17 h 3.4 v 10 H 17.7 Z"
                  fill="currentColor"
                  transform="matrix(1.45 0 0 1.45 -14.935 -7.2)"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-6 h-6"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
      <div className="px-2 py-2 text-center text-black bg-blue-900">
        {/* <p className="text-sm font-light">Event Updates</p> */}
      </div>
      <header className="flex items-center justify-between px-4 pt-1 pb-2 bg-white">
        <div className="flex">
          <a href="#" className="focus:outline-red">
            <img className="h-10 p-1 md:h-16" src="video-logo-dk.png" />
          </a>
        </div>
        <nav className="flex flex-row place-items-center">
          <div className="flex">
            <a href="#" className="p-4 focus:outline-red">
              <svg
                className="h-4 text-red-900 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </a>
          </div>
          <div className="flex">
            <p className="text-xs font-light tracking-widest uppercase">
              <a href="#" className="p-4 lg:hidden focus:outline-red ">
                Events
              </a>
              <a href="#" className="hidden p-4 lg:block focus:outline-red ">
                Tickets & Events
              </a>
            </p>
          </div>
          <div className="flex hidden lg:block">
            <p className="text-xs font-light tracking-widest uppercase">
              <a href="#" className="hidden p-4 lg:block focus:outline-red ">
                Visit
              </a>
            </p>
          </div>
          <div className="flex hidden lg:block">
            <p className="text-xs font-light tracking-widest uppercase">
              <a href="#" className="hidden p-4 lg:block focus:outline-red ">
                Contact Us
              </a>
            </p>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-4 text-xs font-light tracking-widest uppercase focus:outline-red"
            >
              Menu
            </button>
          </div>
        </nav>
      </header>
      <section>
        <div className="overflow-hidden md:h-96">
          <video autoPlay={true} width="250" loop muted className="w-full ">
            <source
              type="video/mp4"
              src="jpg-splash-vimeo.mp4"
              data-src="splash-vimeo.mp4"
            />
          </video>
        </div>
      </section>
      <main className="pb-10">
        <p className="p-5 mt-10 text-sm font-light leading-7 border-0 border-t sm:px-10">
          John Paul the Great Academy is a small, independent, Catholic school
          that provides a rigorous classical education in liberal arts and
          sciences and promotes the sacred traditions of the Roman Catholic
          Church. Our mission depends on support from people like you.
        </p>

        <iframe
          src="https://api.causeview.com/form/v2.1/cupertino/wizard/a0JC000000lC2t3MAC?lid=a0V3700000073rj&amp;cid=70137000000LaHt&amp;hostUrl=https%3A%2F%2Fd2y1pz2y630308.cloudfront.net%2F2409%2Fdocuments%2F2015%2F9%2Fform.html"
          width="100%"
          height="550"
          scrolling="yes"
          frameBorder="0"
          className="p-4 sm:px-10"
        ></iframe>

        <div className="p-5 mt-10 border-0 border-t sm:px-10">
          <h2 className="pt-4 font-serif text-4xl text-center">Featured</h2>
          <div className="w-24 h-2 mx-auto mt-6 mb-10 bg-red-900 "></div>
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="md:w-1/2">
              <img src="gala.jpg" />
            </div>
            <div className="md:w-1/2">
              <h3 className="inline-block w-auto pt-4 mb-4 font-serif text-xl border-b border-red-900 md:pt-0 ">
                2021 Veritas Lecture and Gala Dinner
              </h3>
              <p className="text-sm font-light leading-7 ">
                John Paul the Great Academy is honored to welcome Fr. Donald
                Calloway, MIC, as the 14th Annual Veritas Lecture & Gala Guest
                Speaker. Fr. Calloway, a convert to Catholicism, is a member of
                the Congregation of Marian Fathers of the Immaculate Conception.
                Before his conversion to Catholicism, he was a high school
                dropout who had been kicked out of a foreign country,
                institutionalized twice, and thrown in jail multiple times.
                After his radical conversion he earned a B.A. in Philosophy and
                Theology from the Franciscan University of Steubenville, M.Div.
                and S.T.B. degrees from the Dominican House of Studies in
                Washington, DC, and an S.T.L. in Mariology from the
                International Marian Research Institute in Dayton, Ohio.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col pt-8 bg-gray-400 place-items-center ">
        <div className="pb-4 font-serif text-lg">Connect with JPG</div>
        <div className="flex pb-6 space-x-8 text-center place-items-center">
          <a href="#">
            <svg
              className="w-6 h-6"
              viewBox="0 0 16.5 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 17.7 27 V 17 h 3.4 l 0.5 -3.9 h -3.9 v -2.5 c 0 -1.1 0.3 -1.9 1.9 -1.9 l 2.1 0 V 5.2 c -0.4 0 -1.6 -0.2 -3 -0.2 c -3 0 -5 1.8 -5 5.2 v 2.9 h -3.4 V 17 h 3.4 v 10 H 17.7 Z"
                fill="currentColor"
                transform="matrix(1.45 0 0 1.45 -14.935 -7.2)"
              ></path>
            </svg>
          </a>
          <a href="#">
            <svg
              className="w-6 h-6"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <nav className="text-xs">
          <ul className="flex flex-col space-y-2 text-center">
            <li>Tickets and Events</li>
            <li>Visit</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="px-4 py-8 font-thin uppercase text-xss">
          © 2021 John Paul the Great Academy | 1522 Carmel Drive, Lafayette, LA
        </div>
      </footer>
      <div
        className={`lg:hidden ${
          open && "hidden"
        } fixed flex w-5 h-5 text-center bg-red-900 rounded-full opacity-90 bottom-1 right-1 place-items-center`}
      >
        <a href="#" className="m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}
