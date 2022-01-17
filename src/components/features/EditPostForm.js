import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import { useSelector } from 'react-redux';
import { getSinglePost } from '../../redux/postsRedux';
import { Navigate } from 'react-router-dom';
import { editPost } from '../../redux/postsRedux';

const EditPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((state) => getSinglePost(state, id)).shift();

  if (!id) return <Navigate to='/' />;

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };

  return (
    <PostForm
      action={handleSubmit}
      actionText='Add post'
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      shortDescription={post.shortDescription}
      content={post.content}
    />
  );
};

export default EditPostForm;
