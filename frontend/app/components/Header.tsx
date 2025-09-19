import Image from 'next/image';

export default function Header() {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
            <li><a className="hover:text-success">Home</a></li>
            <li><a className="hover:text-success">Products</a></li>
            <li><a className="hover:text-success">Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost p-0">
          <Image
            src="/logo.png"
            alt="Toko Winkel Logo"
            width={100}
            height={40}
            className="rounded-lg"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          <li><a className="hover:text-success">Home</a></li>
          <li><a className="hover:text-success">Products</a></li>
          <li><a className="hover:text-success">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost btn-circle text-lg">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="badge badge-success badge-sm indicator-item">0</span>
          </div>
        </a>
      </div>
    </div>
  );
}