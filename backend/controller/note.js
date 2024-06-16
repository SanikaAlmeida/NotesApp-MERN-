const Note = require('../model/note')

const addnote = async (req,res)=>{
    try{
        const user=new Note({
            title:req.body.title,
            content:req.body.content,
            user:req.user
        })
        const user1=await user.save()
        res.send("Note added successfully")
    }
    catch(error){
        res.status(500).send(error)
    }
}

const getnotes=async(req,res)=>{
    try {
        const note=await Note.find({user: req.user._id}).sort({isPinned:-1})
        res.json(note)
    } catch (error) {
        res.send("Error")
    }
}

const deletenote=async(req,res)=>{
    try {
        const note=await Note.findById({ _id: req.params.id })
        const u1=await note.deleteOne()
        res.send("Note deleted successfully")
    } catch (error) {
        res.status(500).send("Error in deleting note")
    }
}
const updatenote=async(req,res)=>{
    try {
        const note=await Note.updateOne({ _id: req.params.id }, req.body)
        res.send("Update done")
    } catch (error) {
        res.status(500).send("Upadation not done")
    }
}
const changepin=async(req,res)=>{
    try {
        const note=await Note.updateOne({ _id: req.params.id }, req.body)
        res.send("Pin changed")
    } catch (error) {
        res.status(500).send("Pin not changed")
        console.log(error)
    }
}
const searchnotes = async (req, res) => {
    const { user } = req; 
    const { query } = req.query;  
    if (!query) {
        return res.status(400).json({ message: "Search query is required" });
    }
    try {
        const notes = await Note.find(
            {
                user: user._id,
                $or: [
                    { title: { $regex: new RegExp(query, "i") } },
                    { content: { $regex: new RegExp(query, "i") } }
                ]
            }
        );
        return res.json({ match: notes });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while searching for notes", error: error.message });
    }
};

module.exports ={
    addnote,deletenote,updatenote,getnotes,changepin,searchnotes
}