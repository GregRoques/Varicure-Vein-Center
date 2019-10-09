import React, { Component } from "react";

const photosLength = 8;
let i = 1;

class Results extends Component {
    state = {
        imageNum: i
    }

    // Slider = ({ currentNum, clickL, clickR }) => {
    //     return (
    //         <div>
    //             <div className="artDirection">Results</div>
    //             <div className='photoContent'>
    //                 <div onClick={() => clickL()} className="picButtons buttonLeft">{`<`}</div>
    //                 <div className='sliderContainer'>
    //                     <img src={musicPhotos[currentNum]['image']} alt={musicPhotos['band']}/>
    //                 </div>
    //                 <div onClick={() => clickR()}  className="picButtons buttonRight">{`>`}</div>
    //             </div>
    //             <div className='picTextAlign'>
    //                 <a rel="noopener noreferrer" target={musicPhotos[currentNum]['target']}  href={musicPhotos[currentNum]['website']} alt={musicPhotos[currentNum]['band']} >
    //                     {musicPhotos[currentNum]['band']}
    //                 </a>
    //             </div>
    //             <div className= "">
    //                  Before & After
    //             </div>
    //         </div>
    //     );
    // }

    leftClick = () => {
        i--;
        if (i < 1) {
            i = photosLength;
        }
        this.setState({
            imageNum: i
        });
    }

    rightClick = () => {
        i++;
        if (i > photosLength) {
            i = 1;
        }
        this.setState({
            imageNum: i
        });
    }

    render () {
        return (
            <div className="fadeIn">
                <Slider
                    currentNum = {this.state.imageNum}
                    clickL = {this.leftClick}
                    clickR = {this.rightClick}
                />
            </div>
        );
    }
}

export default Results;
