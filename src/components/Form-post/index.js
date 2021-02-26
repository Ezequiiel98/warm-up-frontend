import PropTypes from 'prop-types';

import Input from './components/Input';

export default function FormPost({
  onChange, onSubmit, errors, data, isLoading,
}) {
  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        label="Title"
        id="input-title-1"
        onChange={onChange}
        name="title"
        value={data.title}
        error={errors.title}
      />
      <Input
        type="text"
        label="Content"
        id="input-content-1"
        onChange={onChange}
        name="content"
        value={data.content}
        error={errors.content}
      />
      <button
        type="submit"
        className="btn btn-outline-primary btn-block"
        disabled={errors.title || errors.content}
      >
        { isLoading ? 'Loading...' : 'Send' }
      </button>
    </form>
  );
}

FormPost.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool,
};

FormPost.defaultProps = {
  isLoading: false,
};
