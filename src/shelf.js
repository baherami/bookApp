import React, { Component } from 'react';
import Book from './book'
class Shelf extends Component{
//.filter(e=>e.shelf==='read')
  state={
    onShelfChange:'not implemented'
  }
  render(){
    const {onBookChange,shelfName,shelfBooks}=this.props
    const filteredBooks=shelfBooks.filter(e=>e.shelf===shelfName)
      //console.log(filteredBooks)
    return(
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {filteredBooks.map(b=><Book key={b.id} info={b} onBookChange={onBookChange}/>)}
                    </ol>
                  </div>
                </div>
        </div>
      </div>
    )
  }
}
export default Shelf;
