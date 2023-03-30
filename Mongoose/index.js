const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Decoder",{useNewUrlParser:true})
.then(()=>console.log("connection created successfully"))
.catch((err)=>console.log(err));
// schema
const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true},
    ctype:String,
    number:Number,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
});
const Playlist=new mongoose.model("Playlist",playlistSchema); // create a collection
// create a document
const createDocument=async()=>{
    try{
        const reactPlaylist=new Playlist({
            name:"React js",
            ctype:"Front end",
            number:80,
            active:true,
        })
        const jsPlaylist=new Playlist({
            name:" javascript",
            ctype:"Front end",
            number:150,
            active:true,
        })
        const MogoDBnPlaylist=new Playlist({
            name:"MongoDB",
            ctype:"Backend",
            number:8,
            active:true,
        })

        const result =await Playlist.insertMany([jsPlaylist,MogoDBnPlaylist]);
 //console.log(result);
    }
catch(err){
     console.log(err);
}
}
//createDocument();

// const getDocument= async() =>{
//     const result1 =await Playlist.find({name:
//     "MongoDB"},{name:1});
//     console.log(result1);
// }
// getDocument();
const getDocument1= async() =>{
       // const result1 =await Playlist.find({number:{$gt:80}});
       const result1 =await Playlist.find({ctype:{$in :["frontend"]}},{})
        console.log(result1);
    }
getDocument1();
    
