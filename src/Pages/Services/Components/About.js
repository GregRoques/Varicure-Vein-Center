import React, { Component } from "react";
import axios from "axios";
import cssServices from "../services.module.css";
import ReactHtmlParser from "react-html-parser";

class Treatments extends Component {
    state = {
        QnA: {}
    };

    componentDidMount () {
        this.getTreatment();
        window.scrollTo(0, 0);
    };

    componentDidUpdate (prevProps) {
        if (prevProps.isEnglish !== this.props.isEnglish) {
            this.getTreatment();
        }
    }

    getTreatment = () => {
        const language = this.props.isEnglish;
        axios.get(`http://localhost:2000/treatments/${language}`)
            .then(res => {
                this.setState({
                    QnA: [...res.data]
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

    Treatments = props => {
        return (
            <div id={`Treatments${props.key}`} className={ cssServices.officeLocation }>
                { props.question ? <h3>{ ReactHtmlParser(props.question) }</h3> : null }
                { props.image
                    ? <img
                        className={cssServices.serviceImages }
                        alt={ props.image }
                        src={ `/${props.image}`}
                    />
                    : null
                }
                <p>{ ReactHtmlParser(props.answer) }</p>
            </div>
        );
    };

    render () {
        console.log(Object.keys(this.state.QnA));
        return (
            <div>
                <div>
                    { Object.keys(this.state.QnA).map((num, i) => {
                        const { question, answer, image } = this.state.QnA[num];
                        return (
                            <div className={cssServices.textBorder}>
                                <this.Treatments
                                    key={ i }
                                    question = { question }
                                    answer = { answer }
                                    image = { image }
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

export default Treatments;
