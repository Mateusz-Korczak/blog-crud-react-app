import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Post from '../features/Post';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';

const Home = () => {
  const posts = useSelector((state) => getAllPosts(state));
  return (
    <div className='home'>
      <section className='posts-navi d-flex justify-content-between '>
        <h1>All posts</h1>
        <Button variant='outline-info' as={NavLink} to='/post/add'>
          Add post
        </Button>
      </section>
      <section className='posts'>
        <div className='container'>
          <div className='row'>
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
