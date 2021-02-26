import FormPost from '../../components/Form-post';

export default function CreatePost() {
  return (
    <FormPost
      data={{ title: 'pepe', content: 'popo' }}
      errors={{ title: 'jj', content: '' }}
      onChange={(e) => console.log(e.target.value)}
      onSubmit={() => console.log('pepe')}
    />
  );
}
