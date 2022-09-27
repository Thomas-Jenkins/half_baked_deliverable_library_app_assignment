import Book from './Book';
import { useBookDetail } from '../../hooks/useBookDetail';
import { useParams, Link } from 'react-router-dom';


function BookDetail() {
  const { id } = useParams();
  // const id = 1; // TODO: Use id from route
  const { book, loading, error } = useBookDetail(id);

  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );

  if (loading) return <h3>Loading book...</h3>;

  return (
    <>
      <Link to='/books'>Back</Link>
      <Book book={book} showDetail />;
    </>
  );
}

export default BookDetail;
