import  express  from "express";
import  cors  from "cors";
const app=express();
app.use(express.json());
app.use(cors());

app.get("/api",(req,res)=>{
    //facebook
    res.send([
        {
            username:"fantastic_yuvi",
            likes:"69K+",
            comments:"12K+",
            posts:"3231",
            friends:"232K+",
            requests:"121k+",
            pageviews:"2323k+"
        },
        {
            username:"tan_B",
            likes:"231k+",
            comments:"220K+",
            posts:"232K+",
            followers:"200+",
            following:"111K+",
            pageviews:"2100M+"
        },
        {
            username:"andrew_tate",
            likes:"190K+",
            comments:"600K+",
            videos:"700+",
            subscribers:"22K+",
            views:"270M+",
            watchtime:"420M+"
        },
        {
            username:"dean_winchester",
            likes:"888K+",
            comments:"927K+",
            retweets:"322K+",
            tweet:"778K+",
            followers:"990M+",
            following:"120K+"
        }

    ]);
});

app.listen(3001,()=>{
    console.log("Sever Working Fine");
    
});