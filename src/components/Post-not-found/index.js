import { Link } from 'react-router-dom';

export default function PostNotFound() {
  return (
    <>
      <h2 className="mb-4 font-weight-light">Post not found</h2>
      <Link to="/" className="btn btn-outline-primary">Go Home</Link>
    </>
  );
}
