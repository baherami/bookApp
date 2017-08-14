import * as BooksAPI from'./BooksAPI'
import React, { Component } from 'react';
//import {Link } from 'react-router-dom';
import Book from './book'
import serializeForm from 'form-serialize'
class Search extends Component{
  state = {
    query:''
  }
  search=(e)=>{
    e.preventDefault();
    const searchTerm=serializeForm(e.target,{hash:true});
    BooksAPI.search(searchTerm.search,10).then((data)=>{
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
    <div>
    <form onSubmit={this.search} className="search-form">
      <p> Hi</p>
      <input type="text" name="search" placeholder="search"/>
      <button>Search</button>
    </form>
    {
      searchResult
      }


  </div>
  )
  }
}
export default Search;
