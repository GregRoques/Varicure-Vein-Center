import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

// css
import entriesCSS from './entries.module.css'

// components
import ArchiveModal from './archiveModal'

// actions
import { logOut } from '../../Actions/Auth'



class Reviews extends Component{

    componentDidMount() {s
        window.scrollTo(0, 0);
        this.getReviews(this.props.language)
    }


    state={
        id: null,
        review: null,
        name: null,
        url: null,
        social: null,
        language: null,
        prevReviews: {},
        isModalOpen: false
    }

    getReviews = language => {
        axios.get(`http://localhost:2000/reviews/allreviews/${language}`)
            .then(res => {
                res.data.map((data, i) =>{
                    const { id, review, name, url, social } = data
                    this.setState({
                        language: language,
                        prevReviews: {
                            [id]: {
                                id,
                                review,
                                name,
                                url,
                                social
                            }
                        }
                    });
                })
            })
            .catch(err => {
                alert(`Can't connect to database: ${err}`);
            });
    }

    onChangedHandler = e => {
        const { name, value } = e.target;
        this.setState(
            { [name]: value }
        );
    }

    modalOpenHandler = props => {
        this.setState({
            isModalOpen: props
        })
    }


    submitHandler = () =>{
        const { review, name, url, social, id, language } = this.state;
        if(id && review && name && social){
            if(id){
                axios.post(`http://localhost:2000/reviews/updatereview, {
                    review: ${review}, 
                    name: ${name}, 
                    url: ${url}, 
                    social: ${social}, 
                    id: ${id}, 
                }`)
                .then(()=>{
                    alert('Post Successful');
                    this.setState({
                        prevReviews: {
                            [id]: {
                                id,
                                review,
                                name,
                                url,
                                social
                            }
                        }
                    })
                })
                    .catch(error=>{ 
                        console.log(error)
                })
                
            } else{
                axios.post(`http://localhost:2000/reviews/addreview, {
                    review: ${review}, 
                    name: ${name}, 
                    url: ${url}, 
                    social: ${social}, 
                    language: ${language}, 
                }`)
                .then(res => {
                    alert("Post Successful")
                    res.data.map((data, i) =>{
                        const { id, review, name, url, social } = data
                        this.setState({
                            prevReviews: {
                                [id]: {
                                    id,
                                    review,
                                    name,
                                    url,
                                    social
                                }
                            }
                        });
                    })
                })
                .catch((error)=>{ 
                    alert(`Post Error: ${error}`)
                })
            }
        }else{
           alert("You Must fill in all of the fields below!")
        }
    }

    updateHandler = updateInfo =>{
        const { id, review, name, url, social } = this.state.prevReviews[updateInfo]
        this.setState({
            id: id,
            review: review,
            name: name,
            url: url,
            social: social,
            isModalOpen: false
        })
    }

    deleteHandler = articleToDelete =>{
        axios.delete(`http://localhost:2000/reviews/deletereview`,{
            id: articleToDelete
        })
        .then(res => {
            alert("Post Successful")
            res.data.map((data, i) =>{
                const { id, review, name, url, social } = data
                this.setState({
                    prevReviews: {
                        [id]: {
                            id,
                            review,
                            name,
                            url,
                            social
                        }
                    }
                });
            })
        })
        .catch(error=>{ 
            alert(`Delete Error: ${error}`)
        })
    }

    // =================================================================


    render(){
        return(
            <div>
                <ArchiveModal 
                    title={this.state.id} 
                    id={this.state.id}
                    show={this.props.isModalOpen} 
                    updateArticle={this.updateHandler}
                    existingDelete={this.deleteHandler} 
                    closed={this.modalOpenHandler}
                />
                <input type="hidden" name="id" value={this.state.value}></input>
                <div className={entriesCSS.posts}>
                    <textarea
                        name="review"
                        rows="10"
                        type="text"
                        maxLength="150" 
                        placeholder="Add review here."
                        onChange={e => this.onChangedHandler(e)}
                        value={this.state.review}
                    />
                    <input 
                        name="name"
                        type="text" 
                        placeholder="Reviewer name"
                        maxLength="15"
                        onChange={e => this.onChangedHandler(e)}
                        value={this.state.date}
                    />
                    <br/>
                     <input 
                        name="url"
                        type="text" 
                        maxLength="250"
                        placeholder="Add Review URL"
                        onChange={e => this.onChangedHandler(e)}
                        value={this.state.url}
                    />
                    <br/>
                    <select onChange={e => this.onChangedHandler(e)}>
                        <option selected={this.state.social === e.target.value ? selected: null} value={null} disabled>Social Network</option>
                        <option selected={this.state.social === e.target.value ? selected: null} value="yelp">Yelp</option>
                        <option selected={this.state.social === e.target.value ? selected: null} value="google">Google</option>
                        <option selected={this.state.social === e.target.value ? selected: null} value="facebook">Facebook</option>
                    </select>
                </div>
                <div className={updateHocCSS.buttonPosition}>
                    <button className={updateHocCSS.publishButtons} onClick={()=> this.postHandler()}>Submit</button>
                    <button className={updateHocCSS.publishButtons} onClick={()=> this.modalOpenHandler(true)}>Update Existing</button>
                </div>
            </div>
            
        )

    }
}


const mapStateToProps = state =>{
    return{
        userId: state.auth.userId,
        idToken: state.auth.idToken
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        LogOut: () => dispatch(logOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
