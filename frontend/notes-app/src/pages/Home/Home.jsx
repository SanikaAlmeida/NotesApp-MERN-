import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notecard from '../../components/Cards/Notecard'
import { MdAdd } from "react-icons/md"
import Addnote from './Addnote'
import { useState,useEffect } from 'react'
import Modal from "react-modal"
import { useNavigate } from 'react-router-dom'
import axiosinstance from '../../utils/axiosinstance';


const Home = () => {
  const [openModal, setOpenModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  })
  const [userinfo, setUserinfo] = useState("")
  const [allnotes, setAllnotes] = useState([])
  const [isSearch, setIsSearch] = useState(false)

  const handleEdit=(noteDetails)=>{
    setOpenModal({isShown: true,
      type: "edit",
      data: noteDetails,})
  }
  const navigate = useNavigate()
  const getUserinfo = async () => {
    try {
      const response = await axiosinstance.get('/getuser');
      if (response.data) {
        setUserinfo(response.data.username)
      }
    }
    catch (error) {
      if (error.response.status === 401) {
        localStorage.clear()
        navigate('/login')
      }
    }
  }
  const getallnotes=async()=>{
    try {
      const response = await axiosinstance.get('/getnotes');
      if (response.data) {
        setAllnotes(response.data)
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  const deleteNote=async(data)=>{
    const nid=data._id
    try {
        const response = await axiosinstance.delete('/deletenote/'+nid);
        if(response.data)
        {
           getallnotes()
        }
      } 
      catch (error) {
        console.log(error)
      }
}
const searchnotes=async(query)=>{
  try {
    const response = await axiosinstance.get('/search',{params:{query}});
    if (response.data && response.data.match) {
      setIsSearch(true)
      setAllnotes(response.data.match)
    }
  }
  catch (error) {
    console.log(error)
  }
}
const handleClearsearch=()=>{
  setIsSearch(false)
  getallnotes();
}
const updatePin=async(noteData)=>{
  const nid=noteData._id
  try {
      const response = await axiosinstance.patch('/changepin/'+nid, {isPinned:(!noteData.isPinned)});
      if(response.data)
      {
         getallnotes()
      }
    } 
    catch (error) {
      console.log(error)
    }
}
  useEffect(() => {
    getallnotes()
    getUserinfo()
    return () => {}
  }, [])
  
  return (
    <>
      <Navbar userInfo={userinfo} searchnotes={searchnotes} handleClearsearch={handleClearsearch}/>
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>
        {allnotes.map((item, index) => (
            <Notecard 
              key={item._id} 
              title={item.title} 
              date={item.createdon} 
              content={item.content} 
              isPin={item.isPinned}
              onEdit={() => handleEdit(item)} 
              onDelete={() => deleteNote(item)} 
              onPinnote={() => {updatePin(item)}} ></Notecard>
        ))}
        </div>
      </div>

      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10'
        onClick={() => {
          setOpenModal({ isShown: true, type: "add", data: null })
        }}>
        <MdAdd className="text-[32px] text-white" />
      </button>
      <Modal isOpen={openModal.isShown}
        onRequestClose={() => { }}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll">
        <Addnote type={openModal.type} noteData={openModal.data} onClose={() => setOpenModal({ isShown: false, type: "add", data: null })} getallnotes={getallnotes}/>
      </Modal>
    </>
  )
}

export default Home