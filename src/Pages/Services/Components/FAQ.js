import React, { Component } from "react";
import cssServices from "../services.module.css";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import { api } from "../../../Aux/apiLink";

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
        axios.get(`${api}/faq/${language}`)
            .then(res => {
                this.setState({
                    QnA: [...res.data],
                    isEnglish: language
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    QnA: [{
                        question: "Loading Error – Please try back again later.\n",
                        answer: "Error de Carga – Por favor vuelva más tarde."
                    }]
                });
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
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(FAQ);
