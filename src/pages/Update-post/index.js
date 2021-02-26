import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import FormPost from '../../components/Form-post';
import Modal from '../../components/Modal';
import PostNotFound from '../../components/Post-not-found';

import { updatePost, getPostById } from '../../services/post.service';

export default function UpdatePost() {
  const [formValues, setFormValues] = useState({ title: '', content: '', isSending: false });
  const [formErrors, setFormErrors] = useState({ title: '', content: '' });
  const [modalData, setModalData] = useState({ show: false, message: '', title: '' });
  const [postNotFound, setPostNotFound] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await getPostById(id);
        const { title, body: content } = res.data;
        setFormValues((lastValues) => ({ ...lastValues, title, content }));
      } catch {
        setPostNotFound(true);
      }
    };

    getPost();
    return null;
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormValues((lastValues) => ({ ...lastValues, [name]: value }));
    setFormErrors((lastValues) => ({ ...lastValues, [name]: '' }));
  };

  const sendPost = async (data) => {
    try {
      setFormValues((last) => ({ ...last, isSending: true }));

      await updatePost({ id, data });

      setModalData({ show: true, title: 'Post updated', message: 'Post was updated successfully' });
      setFormValues({ title: '', content: '', isSending: false });
      setTimeout(() => history.goBack(), 800);
    } catch {
      setModalData({ show: true, title: 'Error', message: 'Something is wrong, try later' });
      setTimeout(() => history.goBack(), 800);
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
    postNotFound ? <PostNotFound />
      : (
        <>
          <h2 className="mb-4 font-weight-light">Edit a post</h2>
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
      )

  );
}
