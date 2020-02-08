import React, { Component } from "react";
import cssServices from "../services.module.css";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import { aboutAPI } from "../../../Aux/apiLink";

class Treatments extends Component {
    state = {
        QnA: {},
        isEnglish: "e"
    };

    componentDidMount () {
        this.getAbout();
        window.scrollTo(0, 0);
    };

    getAbout = () => {
        const language = this.props.isEnglish;
        this.setState({
            QnA: aboutAPI[language],
            isEnglish: language
        });
    };

    About = props => {
        return (
            <div id={`About${props.key}`} className={ cssServices.officeLocation }>
                { props.question ? <h3>{ ReactHtmlParser(props.question) }</h3> : null }
                <p>{ ReactHtmlParser(props.answer) }</p>
            </div>
        );
    };

    render () {
        return (
            <div>
                {this.state.isEnglish !== this.props.isEnglish ? this.getAbout() : null}
                <div className={ cssServices.compTitle }>{this.props.isEnglish === "e" ? "About" : "Quienes somos"}</div>
                <div>
                    { Object.keys(this.state.QnA).map((num, i) => {
                        const { question, answer } = this.state.QnA[num];
                        return (
                            <div className={cssServices.textBorder}>
                                <this.About
                                    key={ i }
                                    question = { question }
                                    answer = { answer }
                                />
                                { i !== this.state.QnA.length - 1 ? <hr/> : <div className={ cssServices.qnaEnd }/>}
                                <br/>
                            </div>
                        );
                    }) }
                </div>
                <div className={ cssServices.serviceTestimonial}>Testimonial</div>
                <div className={ cssServices.quote}>
                    "{ this.props.isEnglish === "e" ? this.props.Reviews.englishReview : this.props.Reviews.spanishReview }" {this.props.url
                        ? <div className ={ cssServices.serviceIndent }>–<a href={this.props.Reviews.url} rel="noopener noreferrer" target="_blank">{this.props.Reviews.name} <img alt={this.props.Reviews.social} src={"/myImages/" + this.props.Reviews.social + ".png"} /></a> </div>
                        : <div className ={ cssServices.serviceIndent }>–{this.props.Reviews.name} { this.props.Reviews.social ? <img alt={this.props.Reviews.social} src={"/myImages/" + this.props.Reviews.social + ".png"} /> : null} </div> }
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish,
        Reviews: state.reviews.Reviews3
    };
};

export default connect(mapStateToProps, null)(Treatments);
