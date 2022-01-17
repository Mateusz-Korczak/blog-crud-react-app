import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';
import Post from '../features/Post';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSinglePost } from '../../redux/postsRedux';
import PopupModal from '../common/PopupModal';

const SinglePost = () => {
  const { id } = useParams();
  const post = useSelector((state) => getSinglePost(state, id)).shift();
  if (!id) return <Navigate to='/' />;
  if (!post) return <Navigate to='/' />;
  // else return <Navigate to='/post/:postId' />;
  return (
    <div className='single-post d-flex justify-content-center'>
      <section className='post col-8 mx-1'>
        <div className='container'>
          <div className='row'>
            <Post key={post.id} {...post} />
          </div>
        </div>
      </section>
      <Button
        className='col-1 align-self-start mx-1'
        variant='outline-success'
        href='/post/add'
      >
        EDIT
      </Button>

      <PopupModal postId={post.id}></PopupModal>
    </div>
  );
};

export default SinglePost;
