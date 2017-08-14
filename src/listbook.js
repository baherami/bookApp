import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
class ListBook extends Component{
  state={
    result:[]
  }
  componentDidMount() {
      BooksAPI.getAll().then((data) => this.setState({
        result: data,
      }))
    }
  render(){
    const currentBookStatus={
              currentlyReading:'Currently Reading',
              wantToRead:'Want to Read',
              read:'Read',
              none:'None'
    }
    const books=[
      {
      name:'Under the sea',
      backgroundImage:'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
      currentStatus: currentBookStatus['currentlyReading'],

    },{
    name:'sea level',
    backgroundImage:'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
    currentStatus: currentBookStatus['read'],

    },{
    name:'above the sea',
    backgroundImage:'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
    currentStatus: currentBookStatus['none'],

    },
    ];



    //return (<div className="books"><select>{books.map(book=>(<option  value="{book.name}">{book.currentStatus}</option>))}</select></div>);
    console.log(this.state.result);
    return (<div>{this.state.result}</div>)
  }
}
export default ListBook;
