import { useState } from 'react';

import FormPost from '../../components/Form-post';

export default function CreatePost() {
  const [formValues, setFormValues] = useState({ title: '', content: '' });
  const [formErrors, setFormErrors] = useState({ title: '', content: '' });

  const handleChange = ({ target: { name, value } }) => {
    setFormValues((lastValues) => ({ ...lastValues, [name]: value }));
    setFormErrors((lastValues) => ({ ...lastValues, [name]: '' }));
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
      console.log(formValues);
    }
  };

  return (
    <>
      <h2 className="mb-4 font-weight-light">Create a new post</h2>
      <FormPost
        data={formValues}
        errors={formErrors}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </>
  );
}
