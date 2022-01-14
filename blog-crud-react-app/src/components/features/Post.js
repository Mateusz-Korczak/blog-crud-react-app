import { Card, Button } from 'react-bootstrap';

const Post = ({ ...post }) => {
  return (
    <Card className='col-md-6 col-lg-4'>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <p>
          <b>Author: </b>
          {post.author}
        </p>
        <p>
          <b>Published: </b>
          {post.publishedDate}
        </p>
        <Card.Text>{post.shortDescription}</Card.Text>
        <Button href={`/post/${post.id}`}>Read more</Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
