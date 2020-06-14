const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const myKey = require("../util/sendgridApi.js");

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: myKey
    }
}));

const phoneFormat = ph => {
    if (ph.length >= 10) {
        const onlyNumbers = ph.replace(/\D/g, "");
        const newNumber = onlyNumbers.substring(0, 3) + "-" + onlyNumbers.substring(3, 6) + "-" + onlyNumbers.substring(6, 10);
        return newNumber;
    } else {
        return 0;
    }
};


router.post("/personalData", (req, res, next) => {
    const { name, email, phone, message, subject } = req.body;
    const phoneEdit = phoneFormat(phone);
    const sendDate = new Date().toISOString().slice(0, 10);

    transporter.sendMail({
        to: "gregg@gregroques.com, info@varicure.com",
        from: email,
        subject: `${subject}`,
        html: `<b>From:</b> ${name} <br/> 
        <b>Email:</b> ${email} <br/>
        ${phoneEdit.length > 2 ? "<b>Phone:</b> " + phoneEdit + "<br/>" : null}
        <b>Date:</b> ${sendDate} <br/><br/>
        ${message}`
    }).then(() => {
        res.json("Yes");
    }).catch(() => {
        res.json("No");
    });
});

router.get("/instaImages", (req,res, next) =>{
    const userName = 'varicuremiami';
    let userInfo ={
        userName: userName
    };

    axios.get(`https://www.instagram.com/${userName}/?__a=1`)
    .then(res=>{
        const { profile_pic_url_hd, edge_owner_to_timeline_media } = res.data.graphql.user;
       
        userInfo.profilePic = profile_pic_url_hd;
        // userInfo.postCount = edge_owner_to_timeline_media.count
        userInfo.image = [];

        const images = res.data.graphql.user.edge_owner_to_timeline_media.edges
       
        for (let i=0; i < 5; i++){
            const picDate = new Date((images[i].node.taken_at_timestamp) * 1000)
            userInfo.image.push({   
                pic: images[i].node.display_url,
                caption: (images[i].node.edge_media_to_caption.edges[0]) ? images[i].node.edge_media_to_caption.edges[0].node.text : "",
                date: `${picDate.getMonth()}/${picDate.getDate()}/${picDate.getFullYear()}`,
                url: `https://www.instagram.com/p/${images[i].node.shortcode}/`,
                likes: images[i].node.edge_liked_by.count,
                location: images[i].node.location ? images[i].node.location.name : ""
            })
        }
        req.forSend = userInfo;
        next();
    })
    .catch(err=>{
        console.log(`Could not get user info: ${err}`)
        throw err;
    })
}, (req, res)=>{
    //console.log(req.forSend)
    res.json(req.forSend)
})

module.exports = router;
