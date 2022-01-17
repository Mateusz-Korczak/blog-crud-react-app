import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../redux/postsRedux';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
      })
    );
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
    navigate('/');
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
        Submit
      </Button>
    </Form>
  );
};

export default AddPostForm;
