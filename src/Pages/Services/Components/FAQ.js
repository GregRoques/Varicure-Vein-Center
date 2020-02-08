import React, { Component } from "react";
import cssServices from "../services.module.css";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import { faqAPI } from "../../../Aux/apiLink";

class FAQ extends Component {
    state = {
        QnA: {},
        isEnglish: "e"
    };

    componentDidMount () {
        this.getFAQ();
        window.scrollTo(0, 0);
    };

    getFAQ = () => {
        const language = this.props.isEnglish;
        this.setState({
            QnA: faqAPI[language],
            isEnglish: language
        });
    };

    FAQs = props => {
        return (
            <div id={`FAQ${props.key}`} className={ cssServices.officeLocation }>
                <h3>{ ReactHtmlParser(props.question) }</h3>
                <p>{ ReactHtmlParser(props.answer) }</p>
            </div>
        );
    };

    render () {
        return (
            <div>
                {this.state.isEnglish !== this.props.isEnglish ? this.getFAQ() : null}
                <div className={ cssServices.compTitle }>FAQ</div>
                <div>
                    { Object.keys(this.state.QnA).map((num, i) => {
                        const { question, answer } = this.state.QnA[num];
                        return (
                            <div className={cssServices.textBorder}>
                                <this.FAQs
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
        Reviews: state.reviews.Reviews2
    };
};

export default connect(mapStateToProps, null)(FAQ);
