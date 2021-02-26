import PropTypes from 'prop-types';

export default function Modal({
  show, onClose, message, title,
}) {
  const customStyles = { display: `${show ? 'block' : 'hidden'}`, backgroundColor: 'rgba(0,0,0,.4)' };

  return (
    <div className={`modal fade ${show ? 'show' : ''}`} style={customStyles}>
      <div className="modal-dialog mt-5">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{ title }</h5>
            <button onClick={onClose} type="button" className="close">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { message }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
