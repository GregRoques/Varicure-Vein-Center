import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

// css
import entriesCSS from './entries.module.css'

// actions
import { logOut } from '../../Actions/Auth'



class Staff extends Component{

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getStaff(this.props.language)
    }


    state={
        name: null,
        title: null,
        bio: null,
        language: null,
        isModalOpen: false
    }

    getstaff = language => {
        axios.get(`http://localhost:2000/staff/${language}`)
            .then(res => {
                const { name, title, bio } = res.data
                this.setState({
                    language: language,
                    name: name,
                    title: title,
                    bio: bio
                });
              
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
        const { name, title, bio, language } = this.state;
        if(name && title && bio){
                axios.post(`http://localhost:2000/staff/updatestaff, {
                    name: ${name},
                    title: ${title},
                    bio: ${bio},
                    language: ${lanugage}
                }`)
                .then(() => {
                    alert("Post Successful");
                })
                    .catch(error=>{ 
                        alert(`Post Error: ${error}`);
                })
        }else{
           alert("You Must fill in all of the fields below!")
        }
    }

    // =================================================================


    render(){
        return(
            <div>
                <input type="hidden" name="id" value={this.state.value}></input>
                <div className={entriesCSS.posts}>
                    <input
                        name="name"
                        type="text"
                        maxLength="50" 
                        placeholder="Name"
                        onChange={e => this.onChangedHandler(e)}
                        value={this.state.review}
                    />
                    <input 
                        name="title"
                        type="text" 
                        placeholder="Title"
                        maxLength="50"
                        onChange={e => this.onChangedHandler(e)}
                        value={this.state.date}
                    />
                    <br/>
                     <textarea
                        name="bio"
                        rows="10"
                        type="text" 
                        maxLength="500"
                        placeholder="Bio"
                        onChange={e => this.onChangedHandler(e)}
                        value={this.state.url}
                    />
                    <br/>
                </div>
                <div className={updateHocCSS.buttonPosition}>
                    <button className={updateHocCSS.publishButtons} onClick={()=> this.postHandler()}>Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Staff);