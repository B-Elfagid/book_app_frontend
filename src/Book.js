

function Book(props) {
  return (
<div>
    <h1>Book List</h1>
    <p>{props.title}</p>
    <p>{props.author}</p>
</div>
  )
}

export default Book;