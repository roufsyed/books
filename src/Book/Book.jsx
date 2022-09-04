const Book = (props) => {
  // Destructuring
  let { bookImage, bookTitle, bookAuthor } = props.data;

  // Function
  const clickListener = () => {
    alert(bookTitle);
  };

  return (
    <article className="books" onClick={clickListener}>
      <img src={bookImage} alt="" />
      <h4>{bookTitle}</h4>
      <p>{bookAuthor}</p>
    </article>
  );
};

export default Book;
