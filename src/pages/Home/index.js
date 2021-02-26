import CardPost from '../../components/Card-post';

export default function Home() {
  const handleDelete = id => {
    console.log(id);
  };

  return (
    <div className="d-flex justify-content-between flex-wrap">
      <CardPost id="5" title="juanchooote" onDelete={handleDelete} />
    </div>
  );
}
