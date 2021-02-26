import { useEffect, useState } from 'react';

import CardPost from '../../components/Card-post';
import Modal from '../../components/Modal';

import { getAllPost, deletePost } from '../../services/post.service';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [modalData, setModalData] = useState({ show: false, message: '', title: '' });

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

  const handleDelete = async id => {
    try {
      await deletePost(id);
      const filteredPosts = posts.filter(post => post.id !== id);
      setModalData({
        title: 'Post deleted',
        message: 'Post deleted successfully.',
        show: true,
      });
      setPosts(filteredPosts);
    } catch {
      setModalData({
        title: 'Error',
        message: 'Something is wrong, the post could not be deleted. Please try later.',
        show: true,
      });
    }
  };

  const handleCloseModal = () => {
    setModalData({ show: false, message: '', title: '' });
  };

  return (
    <div className="d-flex justify-content-between flex-wrap">
      { error && <h2 className="text-center w-100 mt-3">Something is wrong 😢, try later</h2>}
      { !error && posts.map(({ title, id }) => (
        <CardPost id={id} title={title} onDelete={handleDelete} key={id} />
      ))}
      <Modal
        title={modalData.title}
        message={modalData.message}
        show={modalData.show}
        onClose={handleCloseModal}
      />
    </div>
  );
}
