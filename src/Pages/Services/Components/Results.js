import React, { Component } from "react";
import cssResults from "./results.module.css";
import { connect } from "react-redux";

var photoArray = [1, 2, 3, 4, 5, 6, 7, 8];

class Results extends Component {
    state = {
        isEnglish: "e",
        modalShow: false,
        modalPhoto: null
    };

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    pictureDisplayOn = (currentPhoto) => {
        this.setState(prevState => ({
            modalShow: !prevState.modalShow,
            modalPhoto: currentPhoto
        }));
    }

    getTranslation = () => {
        this.setState({
            isEnglish: this.props.isEnglish
        });
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

    isBeforeOrAfter = () => {
        let beforeOrAfter;
        if (this.state.modalPhoto % 2 === 0) {
            beforeOrAfter = this.state.isEnglish === "e" ? "After" : "Después";
        } else {
            beforeOrAfter = this.state.isEnglish === "e" ? "Before" : "Antes";
        }

        return (
            <span>{beforeOrAfter}</span>
        );
    }

    render () {
        let modalPhotoGallery = null;
        if (this.state.modalShow) {
            modalPhotoGallery = (
                <div className= { cssResults.photoModal } >
                    <div className= { cssResults.photoTop } >
                        <span className={ cssResults.closePhotoModal } onClick={ () => this.pictureDisplayOff()}>x</span>
                        <this.isBeforeOrAfter/>
                    </div>
                    <div className ={ cssResults.photoContent}>
                        <div className={ cssResults.imageGalleryButtons } onClick={ () => this.clickL(this.state.modalPhoto) }>{`<`}</div>
                        <div className={ cssResults.sliderContainer }>
                            <img alt={"Results" + this.state.modalPhoto } src={process.env.PUBLIC_URL + `/beforeAfter/${this.state.modalPhoto}.jpg`}/>
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
                {this.state.isEnglish !== this.props.isEnglish ? this.getTranslation() : null}
                { modalPhotoGallery }
                <div className={ cssResults.compTitle }>{this.state.isEnglish === "e" ? "Results" : "Resultados"}</div>
                <h1 className={ cssResults.subheading }>
                    {this.state.isEnglish === "e"
                        ? "Healthy Legs Should Not Look Like Road Maps"
                        : "Las piernas sanas no deberían verse como mapas de carreteras."
                    }
                </h1>

                <div className = { cssResults.photoGalleryContainer }>
                    <div className = { cssResults.photoGrid }>
                        { photoArray.map((image, i) => {
                            return (
                                <div key={ i } className={cssResults.photoBox}>
                                    <img onClick={() => this.pictureDisplayOn(image) } alt={ "Results" + image } src={`${process.env.PUBLIC_URL}/beforeAfter/${image}.jpg`}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(Results);
