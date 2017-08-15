import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
class Book extends Component{
  state ={
    showInfo:false,
    showSetting:false,
    shelf:'none'
  }
  currentBookStatus={
    currentlyReading:'Currently Reading',
    wantToRead:'Want to Read',
    read:'Read',
    none:'None'
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
  componentDidMount(){
    const b=this.props.info
    if(!b.shelf){
      BooksAPI.get(b.id).then((book)=>{
        this.setState({shelf:book.shelf})
      }
    )
  }else{
    this.setState({shelf:b.shelf})
  }
}
moveBook=(event,book)=>{
  event.preventDefault();
  let newShelf= document.getElementById(event.target.id).value;
  if(this.state.shelf!==newShelf){
    this.props.onBookChange(book,newShelf);
    console.log('moveBook done!')
    this.setState({shelf:newShelf});
  }else{
    console.log('error in moving book')
  }
}
prepareBookInfo=(bookInfo)=>{
  let bookExtraInfo
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
  return bookExtraInfo
}
prepareSettingOptions=(bookInfo)=>{
  let bookSettingOptions
  if(this.state.showSetting){
    bookSettingOptions=
    <div className="book-shelf-changer"  >
      <select size="5" id={"selector"+bookInfo.id} defaultValue={this.state.shelf} onClick={()=>this.showSettingOptions()} onChange={(event)=>this.moveBook(event,bookInfo)}>
        <option value="select" disabled >Select Shelf</option>
        {Object.keys(this.currentBookStatus).map(cbs=><option key={cbs} value={cbs}>{this.currentBookStatus[cbs]}</option>)}
      </select>
    </div>
  }else{
    bookSettingOptions=
    <div className="book-shelf-changer" onClick={()=>this.showSettingOptions()}>
    </div>
  }
  return bookSettingOptions
}
prepareImageURL=(bookInfo)=>{
  let imageURL
  if(bookInfo.imageLinks){ //Some results do not include imageLinks
    imageURL=bookInfo.imageLinks.thumbnail
  }else{
    imageURL='https://thumb.ibb.co/nxmzWa/Image_not_found.gif' //an image for the case that thumbnail is not available. Search journey or User's Journey for such an exception.
  }
  return imageURL
}
render(){
  const bookInfo=this.props.info
  let bookExtraInfo=this.prepareBookInfo(bookInfo)
  let bookSettingOptions=this.prepareSettingOptions(bookInfo)
  let imageURL=this.prepareImageURL(bookInfo)
  return(
    <li>
      <div className="book" >
        <div className="book-top">
          {bookSettingOptions}
          <div className="book-cover" style={{ backgroundImage:`url(${imageURL})`}}>
          </div>
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
