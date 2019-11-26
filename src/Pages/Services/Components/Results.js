// import React, { Component } from "react";
// import { cssResults } from "";

// var photoArray = {};

// class Results extends Component {
//     state = {
//         modalShow: false,
//         modalPhoto: null
//     }

//     pictureDisplayOn = (currentPhoto) => {
//         this.setState(prevState => ({
//             modalShow: !prevState.modalShow,
//             modalPhoto: currentPhoto
//         }));
//     }

//     pictureDisplayOff = () => {
//         this.setState(prevState => ({
//             modalShow: !prevState.modalShow,
//             modalPhoto: null
//         }));
//     }

//     clickL = (i, album) => {
//         i--;
//         if (i < 0) {
//             i = photoArray[album].length - 1;
//         }

//         this.setState({
//             modalPhoto: i
//         })
//     }

//     clickR = (i, album) => {
//         i++;
//         if (i > photoArray[album].length - 1) {
//             i = 0;
//         }

//         this.setState({
//             modalPhoto: i
//         });
//     }

//     render () {
//         let modalPhotoGallery = null;
//         if (this.state.modalShow) {
//             modalPhotoGallery = (
//                 <div className= { cssResults.photoModal } >
//                     <div className={ cssResults.closePhotoModal } onClick={()=> this.pictureDisplayOff()}>x</div>
//                     <div className ={ cssResults.photoContent}>
//                         <div className={ cssResults.imageGalleryButtons } onClick={()=>this.clickL(this.state.modalPhoto, currentPathname)}>{`<`}</div>
//                         <div className={ cssResults.sliderContainer }>
//                             <img alt={ currentPathname + this.state.modalPhoto } src={'/images/photography/' + photoArray[currentPathname][this.state.modalPhoto] }/>
//                         </div>
//                         <div className={ cssResults.imageGalleryButtons } onClick={()=>this.clickR(this.state.modalPhoto, currentPathname)}>{`>`}</div>
//                     </div>
//                     <div className ={ cssResults.pictureCounter }>
//                         { this.state.modalPhoto + 1 }/{ photoArray[currentPathname].length }
//                     </div>
//                 </div>
//             );
//         }

//         return (
//             <div className = { cssResults.fadeIn }>
//                 { modalPhotoGallery }
//                 <h1 className = {cssResults.albumTitleText}>{currentPathname}</h1>
//                 <div className = { cssResults.photoGalleryContainer }>
//                     <div className = { cssResults.photoGrid }>
//                         { photoArray[currentPathname] ? photoArray[currentPathname].map((image, i) => {
//                             return (
//                                 <div key={ i } className={cssResults.photoBox}>
//                                     <img onClick={() => this.pictureDisplayOn(i) } alt={ currentPathname + i } src={'/images/photography/'+ image}/>
//                                 </div>
//                             );
//                         }) : this.props.history.push(`/photography`)}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Results;
