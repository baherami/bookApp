import React, { Component } from 'react';
import Book from './book'
class Shelf extends Component{
  render(){
    const {onBookChange,shelfName,shelfBooks}=this.props
    let finalShelfBooks="No results! Try these keywords "
    if(shelfBooks&&!shelfBooks.error){
      let filteredBooks=shelfBooks.filter(e=>(((e.shelf===shelfName)||(shelfName==='Search Results'))))
      finalShelfBooks=filteredBooks.map(b=><Book key={b.id} info={b} onBookChange={onBookChange}/>)
    }

    return(

          <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {finalShelfBooks}
              </ol>
            </div>
          </div>
        
    )
  }
}
export default Shelf;
