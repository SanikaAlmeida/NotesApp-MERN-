import React, { useState } from 'react'
import { MdClose } from "react-icons/md"
import axiosinstance from '../../utils/axiosinstance';

const Addnote = ({noteData,type,onClose,getallnotes}) => {
    const [title, setTitle] = useState(noteData?.title|| "")
    const [content, setContent] = useState(noteData?.content || "")
    const [error,setError]=useState(null)

    const addNote=async()=>{
        try {
            const response = await axiosinstance.post('/addnote', {title,content});
            if(response.data)
            {
               getallnotes()
               onClose()
            }
          } 
          catch (error) {
            console.log(error)
          }
    }
    const editNote=async()=>{
        const nid=noteData._id
        try {
            const response = await axiosinstance.patch('/updatenote/'+nid, {title,content});
            if(response.data)
            {
               getallnotes()
               onClose()
            }
          } 
          catch (error) {
            console.log(error)
          }
    }
    const handlenote=async(e)=>{
        e.preventDefault();
         if(!(title)){
            setError("Please enter title")
            return
         }
         if(!content){
            setError("Please enter the content")
            return
         }
         setError("")

         if(type==='edit'){
            editNote()
         }else{
            addNote()
         }
    }
    return (
        <div className='relative'>
            <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-200' onClick={onClose}>
                <MdClose className="text-xl text-slate-400"></MdClose>
            </button>
            <div className="flex flex-col gap-2">
                <label className="input-label">TITLE</label>
                <input type="text" className="text-2xl text-slate-950 outline-none" placeholder="Go To Gym At 5" value={title} onChange={({ target }) => setTitle(target.value)} />
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <label className="input-label">CONTENT</label>
                <textarea type="text"
                    className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded" placeholder="Content" rows={10} 
                    value={content} onChange={({target})=>setContent(target.value)}/>
            </div>
            {error && <p className='text-red-500 text-xs pt-4'>{error}</p>}
            <button type="submit" className="btn-primary font-medium mt-5 p-3" onClick={handlenote}>
                {type==='edit'? 'UPDATE':"Add note"}
            </button>
        </div>
    )
}

export default Addnote

