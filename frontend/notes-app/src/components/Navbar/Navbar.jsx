import React, { useState } from 'react'
import Profileinfo from '../Cards/Profileinfo'
import { useNavigate } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar';

const Navbar = ({userInfo,searchnotes,handleClearsearch}) => {
  const [search,setSearch]=useState("")
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear()
    navigate('/login');
  }

  const handleSearch=()=>{
    if(search){
      searchnotes(search)
    }
  }
  const onClearSearch=()=>{
    setSearch("")
    handleClearsearch()
  }

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow"> 
        <h2 className="text-xl font-medium text-black py-2">Notes</h2>

        <Searchbar value={search} onChange={({target})=>{setSearch(target.value)}} handleSearch={handleSearch} onClearSearch={onClearSearch}/>
        <Profileinfo userinfo={userInfo} onLogout={Logout}/>
    </div>
  )
}

export default Navbar