import React,{useState, useMemo,} from 'react'
import './postUpdate.scss'
import ModalWindow from '../Modal/modal';
import { PostStatus, getStatus} from '../../../api/FirestoreAPI';
import PostCard from '../PostCard/PostCard';
import { getCurrentTimeStamp } from '../../../helpers/useMoment'; 


export default function PostUpdate() {
  let userEmail = localStorage.getItem('userEmail');
  const [modal1Open, setModal1Open] = useState(false);
  const [status, setStatus] = useState('')
  const [allStatus, setAllStatus] = useState([]);

// Отправка статуса
  const sendStatus = async () => { 
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp('LLL'),
      userEmail: userEmail,
    }
    await PostStatus(object)
    await setModal1Open(false)
    await setStatus('');
  }
//Получение всех статусов
  useMemo(() => {
    getStatus(setAllStatus);
  }, [])

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

        <div className='post-card'>
        {allStatus.map((posts) => {
          return <PostCard posts={posts}/>
        })}
        </div>
    </div>
  )
}
