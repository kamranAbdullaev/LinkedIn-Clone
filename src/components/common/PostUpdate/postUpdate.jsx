import React,{useState} from 'react'
import './postUpdate.scss'
import ModalWindow from '../Modal/modal';


export default function PostUpdate() {
  const [modal1Open, setModal1Open] = useState(false);
  const [status, setStatus] = useState('')
  const sendStatus = () => {

  }
  return (
    <div className='post-status-main'>
      <div className="post-status">
        <button className='open-post-modal' onClick={() => setModal1Open(true)}>Start a post</button>
      </div>

      <ModalWindow setStatus={setStatus} 
                   status={status} 
                   modal1Open={modal1Open} 
                   setModal1Open={setModal1Open}
                   sendStatus={sendStatus}/>
    </div>
  )
}
