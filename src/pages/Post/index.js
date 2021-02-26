import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostNotFound from '../../components/Post-not-found';

import { getPostById } from '../../services/post.service';

export default function Post() {
  const [error, setError] = useState(false);
  const [post, setPost] = useState({ title: '', content: '' });
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await getPostById(id);
        const { title, body: content } = res.data;

        setPost({ title, content });
      } catch {
        setError(true);
      }
    };

    getPost();
    return null;
  }, []);

  return (
    error ? <PostNotFound />
      : (
        <>
          <h1 className="mb-4 mt-2 font-weight-light">{ post.title }</h1>
          <p className="text-center">{post.content}</p>
        </>
      )
  );
}
