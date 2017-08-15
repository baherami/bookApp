import * as BooksAPI from'./BooksAPI'
import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Shelf from './shelf'
class  Search extends Component{
  state = {
    books:''
  }
  searchBooks=(e)=>{
    e.preventDefault();
    let searchTerm=e.target.value
    BooksAPI.search(searchTerm,10).then((data)=>{
      console.log('BooksAPI search finished')
      this.setState({books:data})
    })
  }

  render(){
    let searchResult=this.state.books

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" onInput={this.searchBooks} name="search" placeholder="Search by title or author"/>
          </div>
        </div>
        <Shelf onBookChange={this.props.onBookChange}  shelfName="Search Results" shelfBooks={searchResult}/>
      </div>
    )}
  }
  export default Search;
