import * as BooksAPI from'./BooksAPI'
import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Book from './book'
//import serializeForm from 'form-serialize'
class Search extends Component{
  state = {
    query:''
  }
  search=(e)=>{
    e.preventDefault();
    console.log(e.target.value)
    //const searchTerm=serializeForm(e.target,{hash:true});
    let searchTerm=e.target.value
    BooksAPI.search(searchTerm,10).then((data)=>{
      console.log(data)
      this.setState({query:data})
    })
    console.log(searchTerm);
    console.log('in search');
  }
  render(){
    var onBookChange=this.props.onBookChange;
    var data=this.state.query
    var searchResult
    if(data){
      searchResult=data.map(b=><Book key={b.id} info={b} onBookChange={onBookChange}/>)
    }
    return(
      <div className="search-books">
                <div className="search-books-bar">
                  <Link className="close-search" to="/">Close</Link>
                  <div className="search-books-input-wrapper">
                    <input type="text" onInput={this.search} name="search" placeholder="Search by title or author"/>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                    {searchResult}
                  </ol>
                </div>
              </div>
  )}
}
export default Search;
