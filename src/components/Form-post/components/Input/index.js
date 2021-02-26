import PropTypes from 'prop-types';

export default function Input({
  id, type, label, error, onChange, name, value,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input onChange={onChange} type={type} name={name} className="form-control" id={id} value={value} placeholder={`${label}...`} />
      { error && <small className="text-danger">{ error }</small>}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Input.defaultProps = {
  error: null,
};
