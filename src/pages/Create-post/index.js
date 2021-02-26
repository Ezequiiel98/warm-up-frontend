import { useState } from 'react';

import FormPost from '../../components/Form-post';
import Modal from '../../components/Modal';

export default function CreatePost() {
  const [formValues, setFormValues] = useState({ title: '', content: '' });
  const [formErrors, setFormErrors] = useState({ title: '', content: '' });
  const [showModal, setShowModal] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormValues((lastValues) => ({ ...lastValues, [name]: value }));
    setFormErrors((lastValues) => ({ ...lastValues, [name]: '' }));
  };

  const sendPost = (data) => {
    setShowModal(true);
    console.log(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, content } = formValues;

    if (!title) {
      setFormErrors((lastErrors) => ({ ...lastErrors, title: 'Title is required' }));
    }

    if (!content) {
      setFormErrors((lastErrors) => ({ ...lastErrors, content: 'Content is required' }));
    }

    if (title && content) {
      sendPost(formValues);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <h2 className="mb-4 font-weight-light">Create a new post</h2>
      <FormPost
        data={formValues}
        errors={formErrors}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <Modal
        title="Post"
        message="Post created successfully"
        show={showModal}
        onClose={handleCloseModal}
      />
    </>
  );
}
