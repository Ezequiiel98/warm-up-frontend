import { useEffect, useState } from 'react';

import CardPost from '../../components/Card-post';

import { getAllPost } from '../../services/post.service';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await getAllPost();
        setPosts(res.data);
      } catch {
        setError(true);
      }
    };
    getPosts();
    return null;
  }, []);

  const handleDelete = id => {
    console.log(id);
  };

  return (
    <div className="d-flex justify-content-between flex-wrap">
      { error && <h2 className="text-center w-100 mt-3">Something is wrong 😢, try later</h2>}
      { !error && posts.map(({ title, id }) => (
        <CardPost id={id} title={title} onDelete={handleDelete} />
      ))}
    </div>
  );
}
