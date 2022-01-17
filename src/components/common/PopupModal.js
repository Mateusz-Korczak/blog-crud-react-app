import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../redux/postsRedux';

const PopupModal = ({ postId }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleRemovePost = (e) => {
    e.preventDefault();
    dispatch(deletePost({ postId }));
  };

  return (
    <>
      <Button
        variant='outline-danger'
        onClick={handleShow}
        className='col-1 align-self-start mx-1'
      >
        DELETE
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will completely remove this post from the app. Are You
          sure You want to do that?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='danger' onClick={handleRemovePost}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PopupModal;
