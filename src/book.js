import React, { Component } from 'react';
//import * as BooksAPI from './BooksAPI'
class Book extends Component{
  state ={
    showInfo:false,
    showSetting:false
  }
  showHideExtraInfo=()=>{
    this.setState((state)=>({
      showInfo:!state.showInfo
    }))
  }
  showSettingOptions=()=>{
    this.setState((state)=>({
      showSetting:!state.showSetting
    }))
  }
  showValue=(obj,key)=>{
    JSON.stringify(obj[key])
  }
  render(){
    var bookInfo=this.props.info
    var bookExtraInfo,bookSettingOptions
    const currentBookStatus={
      currentlyReading:'Currently Reading',
      wantToRead:'Want to Read',
      read:'Read'
    }
    var moveBook=(event,book)=>{
      event.preventDefault();
      var newShelf= document.getElementById("selector").value;
      this.showSettingOptions();
      this.props.onBookChange(book,newShelf);
      console.log('moveBook')
    }
    if(this.state.showInfo){
      bookExtraInfo=
      <div className="book-shelf-info-modal">
        <div className="book-shelf-content">
          <span className="close"   onClick={()=>this.showHideExtraInfo()}>&times;</span>
          {Object.keys(bookInfo).map(bi=><p key={bi}><b>{bi}: </b>{JSON.stringify(bookInfo[bi])}</p>)}
        </div>
      </div>
    }else{
      bookExtraInfo=
      <div className="book-shelf-info"   onClick={()=>this.showHideExtraInfo()}>
      </div>
    }
    if(this.state.showSetting){
      bookSettingOptions=
      <div className="book-shelf-changer">
        <select id="selector" defaultValue={bookInfo.shelf?bookInfo.shelf:"none"} onChange={(event)=>moveBook(event,bookInfo)}>
          <option value="none" disabled >Select Shelf</option>
          {Object.keys(currentBookStatus).map(cbs=><option key={cbs} value={cbs}>{currentBookStatus[cbs]}</option>)}
        </select>
      </div>
    }else{
      bookSettingOptions=
      <div className="book-shelf-changer" onClick={()=>this.showSettingOptions()}>
      </div>
    }
    console.log(bookInfo)
    return(
      <li>
        <div className="book" >
          <div className="book-top">
            <div className="book-cover" style={{"width":"100%","height":"100%", "background-repeat": "no-repeat", backgroundImage:`url(${bookInfo.imageLinks.thumbnail})`}}>
            </div>
            {bookSettingOptions}
            {bookExtraInfo}
          </div>
          <div className="book-title">
            {bookInfo.title}
          </div>
          <div className="book-authors">
            {bookInfo.authors}
          </div>
        </div>
      </li>
    )
  }
}
export default Book;
