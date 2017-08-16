import React,{Component} from 'react'
import Shelf from './shelf'
class Library extends Component{
  shelves={
     currentlyReading:'Currently Reading',
     wantToRead:'Want to Read',
     read:'Read'
   }
  render(){
    return(
      <div className="list-books-content">
      {Object.keys(this.shelves).map(s=>(<Shelf onBookChange={this.props.onBookChange} key={s} shelfName={s} shelfBooks={this.props.books}/>))}
    </div>
    )

  }
}
export default Library;
