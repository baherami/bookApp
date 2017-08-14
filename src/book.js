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
    JSON.stringify(obj[key])}

//  componentDidMount(){
//    BooksAPI.get(this.props.info.id).then((data)=>{console.log(data)})

//  }
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
        <div className="book-info">
          <div  onClick={()=>this.showHideExtraInfo()}><h2>&#x24E7;</h2></div>
          {Object.keys(bookInfo).map(bi=><p key={bi}><b>{bi}: </b>{JSON.stringify(bookInfo[bi])}</p>)}
          </div>

      }else{
        bookExtraInfo=
        <div className="book-shelf-info">
          <div  onClick={()=>this.showHideExtraInfo()}><h2> &#x1F6C8;</h2></div>
        </div>
      }
    if(this.state.showSetting){
      bookSettingOptions=
        //selected={(cbs===bookInfo.shelf)?'selected':null
      <div className="book-shelf-changer" >

        <select id="selector" defaultValue={bookInfo.shelf} onChange={(event)=>moveBook(event,bookInfo)}>
          <option value="none" disabled >Select Shelf</option>
          {Object.keys(currentBookStatus).map(cbs=><option key={cbs} value={cbs}>{currentBookStatus[cbs]}</option>)}
        </select>
      </div>

    }else{
      bookSettingOptions=
      <div className="book-shelf-changer" onClick={()=>this.showSettingOptions()}>
        </div>
    }
    return(
      <li>
      <div className="book" >
        <div className="book-top">
        <div className="book-cover">
          <img src={bookInfo.imageLinks.smallThumbnail} alt={'Book: '+bookInfo.title} title={bookInfo.shelf+' : '+bookInfo.title}></img>
        </div>

                              {bookExtraInfo}
                              {bookSettingOptions}

        </div>
      </div>
    </li>
)  }
}
export default Book;
