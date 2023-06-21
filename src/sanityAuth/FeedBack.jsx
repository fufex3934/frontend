import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Navs from '../components/navbars/navs';
import Footer from '../components/body/Footer';

const FeedBack = () => {
  const [feedback,setFeedBack] = useState([]);
  const [errorMessage,setErrorMessage] = useState('');
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [userToReply, setUserToReply] = useState(null);

  const handleReply = (user) => {
    setUserToReply(user);
    setShowReplyModal(true);
  };

  const cancelReply = () => {
    setShowReplyModal(false);
    setUserToReply(null);
  };

  const confirmReply = async () => {
    
  };


  useEffect(()=>{
    const fetchFeedbacks = async ()=>{
      try {
          const response = await  axios.get('http://localhost:3000/comments');
          if (response.status === 200){
            setFeedBack(response.data.feedbacks);
           
          }

      }catch(error){
        console.error(error);
        setErrorMessage('An error occurred while fetching feedbacks');
      }
    };
   fetchFeedbacks();
  },[]);
  return (
    <>
    <Navs/>
    <div className='flex-grow mt-16'>
          <div className='grid grid-cols-4 gap-8 mx-6  border-[#329898] border-b-4'>
            <div >
              <h1 className='font-semibold text-slate-600 text-xl'>Name</h1>
            </div>
            
            <div>
              <h1 className='font-semibold text-slate-600 text-xl'>Comment</h1>
            </div>
            <div>
              <h1 className='font-semibold text-slate-600 text-xl'>Reply</h1>
            </div>
          
          </div>
        <div className='grid grid-cols-4 gap-8 my-4 mx-6'>
        { 
                    feedback.length === 0 ? (
                      <p>No FeeBack found.</p>
                ):(
                  feedback.map((fb) => (
                    <React.Fragment key={fb._id}>
                      <div>
                        <h1>{fb.name}</h1>
                      </div>
                     
                      <div>
                        <p>{fb.comment}</p>
                      </div>
                      <div className='flex'>
                        <button 
                        onClick={()=>handleReply(fb)}
                        className="bg-[#3bb5b5] hover:bg-[#3bb5b5] text-white font-bold py-2 px-4 rounded mr-2">
                          reply
                          </button>
                  
                      </div>
                    </React.Fragment>
                  ))
                )
                }

        </div>
           {/* Render the ConfirmDeleteModal if showDeleteModal is true */}
      {showReplyModal && (
        <ConfirmReplyModal
          user={userToReply}
          onCancel={cancelReply}
          onConfirm={confirmReply}
        />
      )}
    </div>
     {/* <Footer/> */}
    </>
  )
}

const ConfirmReplyModal = ({ user, onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white p-8 shadow-lg rounded">
        <h2 className="text-2xl mb-4">Reply FeedBacks</h2>
        <textarea name="" id="" cols="50" rows="10"></textarea>
        <div className="flex justify-end mt-6">
          <button
            onClick={onCancel}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default FeedBack
