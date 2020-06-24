
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req,res, next) =>{
    const userName = 'varicuremiami';
    let userInfo ={
        userName: userName
    };

    axios.get(`https://www.instagram.com/${userName}/?__a=1`)
    .then(res=>{
        const { profile_pic_url_hd, edge_owner_to_timeline_media } = res.data.graphql.user;
       
        userInfo.profilePic = profile_pic_url_hd;
        userInfo.postCount = edge_owner_to_timeline_media.count
        userInfo.image= [];

        const images = res.data.graphql.user.edge_owner_to_timeline_media.edges
       
        let i=0;
        let j=0;
        while(i<5){
            if(images[j].node.is_video === false ){
                console.log(images[j])
                const picDate = new Date((images[j].node.taken_at_timestamp) * 1000)
                userInfo.image.push({   
                    pic: images[j].node.display_url,
                    caption: (images[j].node.edge_media_to_caption.edges[0]) ? images[j].node.edge_media_to_caption.edges[0].node.text : "",
                    date: `${picDate.getMonth()}/${picDate.getDate()}/${picDate.getFullYear()}`,
                    url: `https://www.instagram.com/p/${images[j].node.shortcode}/`,
                    likes: images[j].node.edge_liked_by.count,
                    location: images[j].node.location ? images[j].node.location.name : ""
                })
                i++
            }
            j++
        }
        req.forSend = userInfo
        next();
    })
    .catch(err=>{
        console.log(`Could not get user info: ${err}`)
        throw err;
    })
}, (req, res)=>{
    // console.log(req.forSend)
    res.json(req.forSend)
})

module.exports = router;