import React, { Component } from 'react';
import axios from "axios";
import instaCss from './CSS/instaGallery.module.css';
import { api } from "../../../Aux/trackingIDs";

class instaGallery extends Component {
    state={
        user: {},
        image: [],
        instaDisplay: false,
        selectedPic: 0,
        display: false
    }

    componentDidMount = () =>{
        this.getInstaGallery()
    }

    getInstaGallery = () =>{
        axios.get(`${api}/instaImages`)
          .then(res => {
              // console.log(res.data)
              const { userName, profilePic, image, postCount } = res.data;
              this.setState({
                  user: {
                      userName: userName,
                      postCount: postCount,
                      profilePic: profilePic 
                  },
                  image: image,
                  instaDisplay: image.length === 5 ? true : false
              })
            console.log(res);
          })
          .catch( err => {
            console.log(err);
          });
    }

    instaPopUp = () =>{
        const { image, selectedPic } = this.state;
        const { profilePic, userName } = this.state.user;
        return  this.state.display === true ? (
            <div className={instaCss.centerAndBackground}>
                <div onClick={() => this.isPopUpOpen( "", "", "", "")} className={instaCss.closeButton}>X</div>
                <div className={instaCss.selectedContainer}>
                    <div className={instaCss.selectedHeader}>
                        <img alt="profile pic" className={instaCss.selectedHeaderImage} src={ profilePic }/>
        <a className={instaCss.selectedHyperlink} href={`${image[selectedPic].url}`} target="_blank" rel="noopener noreferrer nofollow">{userName}</a> 
                    </div>
                         <div className={instaCss.selectedImageContainer}>
                            <img class={instaCss.chosenImage} alt={ `insta${selectedPic}`} src={ image[selectedPic].pic }/>
                        </div>
                    <div className={instaCss.selectedCaption}>
                    { image[selectedPic].location ? <b>{image[selectedPic].location}</b> : <b>{image[selectedPic].date}</b> } <br/>
                        { image[selectedPic].caption }
                    </div>
                </div>
            </div>
        ) : null
    }

    isPopUpOpen = num =>{
        const { display } = this.state;
        this.setState({
            display: !display,
            selectedPic: num,
            selectedPicIndex: 0
        })
    }

    render(){
        const { image } = this.state;
        return this.state.instaDisplay === true ? (
        <div className={instaCss.contactMagin}>
            <hr/>
            <div className={instaCss.pageTitle}>
                Instagram
            </div>
            <div className={instaCss.instaModuleSpacing}>
                <this.instaPopUp/> 
                 <div className={instaCss.container}>
        <div className={instaCss.header}>
            <a href={`https://www.instagram.com/${this.state.user.userName}`} target="_blank" rel="noopener noreferrer nofollow">
                @{this.state.user.userName}
            </a> 
        </div>
        <div className={instaCss.postCount}>
            <b>Posts:</b> {this.state.user.postCount}
        </div>
        <div className={instaCss.hitemwiththatflexRow}>
            <div className={instaCss.hitemwiththatflexColumn1}>
                <div className={instaCss.instaImage1} onClick={()=> this.isPopUpOpen(0)} >
                    <img className={instaCss.bigPicture} alt={ "insta1" } src={ image[0].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverLikes}>&#x2665; {image[0].likes}</div>
                        <div className={instaCss.onHoverDate}>{image[0].date}</div>
                    </div>
                </div>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn2}>
                <div className={instaCss.instaImage2} onClick={()=> this.isPopUpOpen(1)} >
                    <img className={instaCss.smallPicture} alt={ "insta2" } src={ image[1].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverLikes}>&#x2665; {image[1].likes}</div>
                        <div className={instaCss.onHoverDate}>{image[1].date}</div>
                    </div>
                </div>
                <div className={instaCss.instaImage3} onClick={()=> this.isPopUpOpen(2)} >
                    <img className={instaCss.smallPicture} alt={ "insta3"  } src={ image[2].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverLikes}>&#x2665; {image[2].likes}</div>
                        <div className={instaCss.onHoverDate}>{image[2].date}</div>
                    </div>
                </div>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn3}>
                <div className={instaCss.instaImage4} onClick={()=> this.isPopUpOpen(3)} >
                    <img className={instaCss.smallPicture} alt={ "insta4" } src={ image[3].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverLikes}>&#x2665; {image[3].likes}</div>
                        <div className={instaCss.onHoverDate}>{image[3].date}</div>
                    </div>
                </div>
                <div className={instaCss.instaImage5} onClick={()=> this.isPopUpOpen(4)} >
                    <img className={instaCss.smallPicture} alt={ "insta5" } src={ image[4].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverLikes}>&#x2665; {image[4].likes}</div>
                        <div className={instaCss.onHoverDate}>{image[4].date}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                
            </div></div>

        ): <div></div>;
    };
}

export default instaGallery;