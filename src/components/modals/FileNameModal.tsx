import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalProps } from '../utilities/Types';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createFile } from '../store/features/createFileSlice';
import { createFolder } from '../store/features/createFolderSlice';

function FileNameModal({ show, onHide } : ModalProps) {
    const name = useRef();
    const dispatch = useDispatch();

    function handleClick() {
      if(show.from == 'create_folder') {
        if(name.current.value) {
          dispatch(createFolder({'folder_name' : name.current.value}))
          onHide(false)
        } 
      } else if(show.from == 'create_file') {
        if(name.current.value) {
          dispatch(createFile({'file_name' : name.current.value, 'content' : null}))
          onHide(false)
        } 
      }

    }
    
    return (
    <Modal show={show.should_show} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {show.from == 'create_file' ? "File Name:" : "Folder Name"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" 
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
              placeholder="Please insert the name" 
              ref={name} 
              required
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
        <Button variant="dark" onClick={handleClick}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FileNameModal;