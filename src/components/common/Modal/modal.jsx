import React from 'react';
import { Button,Modal } from 'antd';
import './modal.scss';


const ModalWindow = ({modal1Open, setModal1Open, setStatus, status}) => {
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        footer={[
          <Button key="submit" 
                  type="primary" 
                  disabled={status.length > 0 ? false : true}
          >
            Post
          </Button>
        
        ]}>
        
        <input className='modal-input' 
               placeholder='What do you want to talk about?' 
               onChange={(event) => setStatus(event.target.value)}
               value={status}
               />
      </Modal>
      <br />
  
    </>
  );
};

export default ModalWindow;