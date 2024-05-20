import Link from "next/link";
import React from "react";
// import "../globals.css";

const Navbar = () => {
  return (
    <div className="navbar flex justify-around items-center h-20 relative z-50 w-full">
      <div className="logo">
        <Link href={"/"} className="text-white text-3xl m-2 font-black uppercase logo">
          M.Hamza
        </Link>
      </div>
      <div className="links">
        {["About", "Work", "Services", "SKills", "Projects"].map(
          (link, index) => (
            <Link className=" m-2 text-white font-black uppercase " href={link} key={index}>
              {link}
            </Link>
          )
        )}
      </div>
      <div className="">
        <Link href={'/'} className="text-[#f7f7f7] text-[1rem] m-2 font-black uppercase p-3 bg-[#667db6] ">Contact Now</Link>
      </div>
    </div>
    
  );
};

export default Navbar;
