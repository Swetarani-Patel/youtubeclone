import React, { useState } from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { MdApps } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = ({ handl }) => {
  const [input, setInput] = useState('');
 const storedata = useSelector((state)=>state.auth);
  const navigate = useNavigate();
const handleSubmit = (e)=>{
e.preventDefault();
navigate(`/search/${input}`)
}

  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => {
          handl();
        }}
      />

      <img
        src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <IoMdNotifications size={28} />
        <MdApps size={28} />
        <img
          src={storedata?.user?.photoURL}
          alt=""



        />
      </div>
    </div>
  );
};

export default Header;
