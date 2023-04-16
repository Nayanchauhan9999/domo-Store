import Link from "next/link"


const Header = () => {
  return (
    <div className="main-div-header flex justify-between mb-2 mt-2 items-center bg-sky-600 sticky rounded top-0">
        <div className="navbar">
            <Link className="transition-all delay-150 duration-300 p-3 text-sky-50 hover:text-sky-100 hover:bg-sky-700" href="/">Home</Link>
            <Link className="transition-all delay-150 duration-300 p-3 text-sky-50 hover:text-sky-100 hover:bg-sky-700" href="/About">About</Link>
            <Link className="transition-all delay-150 duration-300 p-3 text-sky-50 hover:text-sky-100 hover:bg-sky-700" href="/Contact">Contact</Link>
            <Link className="transition-all delay-150 duration-300 p-3 text-sky-50 hover:text-sky-100 hover:bg-sky-700" href="/Cart">Cart <span className="bg-red-500 ps-1 pe-1 rounded-full ms-1">1</span></Link>
            <Link className="transition-all delay-150 duration-300 p-3 text-sky-50 hover:text-sky-100 hover:bg-sky-700" href="/Wishlist">Wishlist <span className="bg-red-500 ps-1 pe-1 rounded-full ms-1">1</span></Link>
        </div>
        <div>
          <input type="text" placeholder="Search Products" className="p-1 search-input-header ps-5 border rounded block lg:w-96 text-sky-600 md:w-64
           sm:w-48"/>
        </div>
        <div className="flex">
          {/* <button className="text-sky-50 bg-cyan-500 hover:bg-cyan-400 me-5 p-1 ps-3 pe-3 border-2 border-sky-950 rounded">Login</button> */}
          {/* <button className="text-sky-50 bg-cyan-500 hover:bg-cyan-400 me-5 p-1 ps-3 pe-3 border-2 border-sky-950 rounded">Logout</button> */}
        </div>
    </div>
  )
}

export default Header