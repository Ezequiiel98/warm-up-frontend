import { useState } from 'react';

import FormPost from '../../components/Form-post';
import Modal from '../../components/Modal';

import { createNewPost } from '../../services/post.service';

export default function CreatePost() {
  const [formValues, setFormValues] = useState({ title: '', content: '', isSending: false });
  const [formErrors, setFormErrors] = useState({ title: '', content: '' });
  const [modalData, setModalData] = useState({ show: false, message: '', title: '' });

  const handleChange = ({ target: { name, value } }) => {
    setFormValues((lastValues) => ({ ...lastValues, [name]: value }));
    setFormErrors((lastValues) => ({ ...lastValues, [name]: '' }));
  };

  const sendPost = async (data) => {
    try {
      setFormValues((last) => ({ ...last, isSending: true }));

      await createNewPost(data);

      setModalData({ show: true, title: 'Post created', message: 'Post was created successfully' });
      setFormValues({ title: '', content: '', isSending: false });
    } catch {
      setModalData({ show: true, title: 'Error', message: 'Something is wrong, try later' });
    }
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

  const handleCloseModal = () => setModalData({ show: false, message: '', title: '' });

  return (
    <>
      <h2 className="mb-4 font-weight-light">Create a new post</h2>
      <FormPost
        data={formValues}
        errors={formErrors}
        onChange={handleChange}
        onSubmit={onSubmit}
        isLoading={formValues.isSending}
      />
      <Modal
        title={modalData.title}
        message={modalData.message}
        show={modalData.show}
        onClose={handleCloseModal}
      />
    </>
  );
}
