

// function Book(props) {
//   return (
// <div>
//     <h1>Book List</h1>
//     <p>{props.title}</p>
//     <p>{props.author}</p>
// </div>
//   )
// }

// export default Book;

import React from 'react';

class Book extends React.Component {
   render() {
     return (
       <div className="book" id={`book-${this.props.id}`}>
        
         <img src={this.props.image} alt="book image" />
         <p>{this.props.title}</p>
         <p>{this.props.author}</p>
         <p>{this.props.likes}</p>
         <button class="like-btn">Like &lt;3 </button>
    
        </div>
     )
    
   }
}

export default Book;