import { Link } from 'react-router-dom';
export default function Landing() {
  return (
    <>
      <h1>Welcome to your local Library</h1>
      <Link to='/books'>
        <h2>Catalog</h2>
      </Link>
    </>
  );
}