import React,{useState, useMemo,} from 'react'
import './postUpdate.scss'
import ModalWindow from '../Modal/modal';
import { PostStatus, getStatus} from '../../../api/FirestoreAPI';
import PostCard from '../PostCard/PostCard';
import { getCurrentTimeStamp } from '../../../helpers/useMoment'; 
import { getUniqueId } from '../../../helpers/getUniqueId';


export default function PostUpdate({ currentUser }) {
  const [modal1Open, setModal1Open] = useState(false);
  const [status, setStatus] = useState('')
  const [allStatus, setAllStatus] = useState([]);

// Отправка статуса
  const sendStatus = async () => { 
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp('LLL'),
      userEmail: currentUser.email,
      userName: currentUser.name,
      postID: getUniqueId()
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
          return (
            <div key={posts.id}>
              <PostCard posts={posts}/>
            </div>
          )
        })}
        </div>
    </div>
  )
}
