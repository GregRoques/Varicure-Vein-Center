import React, { Component } from "react";
import cssResults from "./results.module.css";

var photoArray = [1, 2, 3, 4, 5, 6, 7, 8];

class Results extends Component {
    state = {
        modalShow: false,
        modalPhoto: null
    }

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    pictureDisplayOn = (currentPhoto) => {
        this.setState(prevState => ({
            modalShow: !prevState.modalShow,
            modalPhoto: currentPhoto
        }));
    }

    pictureDisplayOff = () => {
        this.setState(prevState => ({
            modalShow: !prevState.modalShow,
            modalPhoto: null
        }));
    }

    clickL = i => {
        i--;
        if (i < 1) {
            i = photoArray.length;
        }

        this.setState({
            modalPhoto: i
        });
    }

    clickR = i => {
        i++;
        if (i > photoArray.length) {
            i = 1;
        }

        this.setState({
            modalPhoto: i
        });
    }

    render () {
        let modalPhotoGallery = null;
        if (this.state.modalShow) {
            modalPhotoGallery = (
                <div className= { cssResults.photoModal } >
                    <div className={ cssResults.closePhotoModal } onClick={ () => this.pictureDisplayOff()}>x</div>
                    <div className ={ cssResults.photoContent}>
                        <div className={ cssResults.imageGalleryButtons } onClick={ () => this.clickL(this.state.modalPhoto) }>{`<`}</div>
                        <div className={ cssResults.sliderContainer }>
                            <img alt={ "Results" + this.state.modalPhoto } src={"beforeAfter/" + [this.state.modalPhoto] + ".jpg" }/>
                        </div>
                        <div className={ cssResults.imageGalleryButtons } onClick={() => this.clickR(this.state.modalPhoto)}>{`>`}</div>
                    </div>
                    <div className ={ cssResults.pictureCounter }>
                        { this.state.modalPhoto }/{ photoArray.length }
                    </div>
                </div>
            );
        }

        return (
            <div className = { cssResults.fadeIn }>
                { modalPhotoGallery }
                <h1 className={ cssResults.subheading }> Healthy Legs Should Not Look Like Road Maps</h1>
                <div className = { cssResults.photoGalleryContainer }>
                    <div className = { cssResults.photoGrid }>
                        { photoArray.map((image, i) => {
                            return (
                                <div key={ i } className={cssResults.photoBox}>
                                    <img onClick={() => this.pictureDisplayOn(image) } alt={ "Results" + image } src={"beforeAfter/" + image + ".jpg"}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;
