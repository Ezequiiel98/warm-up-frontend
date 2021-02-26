import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CardPost({ title, id, onDelete }) {
  return (
    <div className="card mb-4" style={{ width: '300px' }}>
      <div className="card-body">
        <h3 className="card-title mb-4">{ title }</h3>
        <div className="d-flex justify-content-between">
          <Link to={`/post/${id}`} className="btn btn-primary">Details</Link>
          <Link to={`/edit-post/${id}`} className="btn btn-success">Update</Link>
          <button onClick={() => onDelete(id)} type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

CardPost.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onDelete: PropTypes.func.isRequired,
};
