import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='formTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Enter title'
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formAuthor'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type='text'
          placeholder='Enter author'
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formDate'>
        <Form.Label>Published</Form.Label>
        <Form.Control
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          type='text'
          placeholder='DD-MM-YYYY'
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formDescription'>
        <Form.Label>Short description</Form.Label>
        <textarea
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='5'
          placeholder='Leave a comment here'
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formContent'>
        <Form.Label>Main Content</Form.Label>
        <Form.Control
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type='text'
          placeholder='Type content'
          required
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
