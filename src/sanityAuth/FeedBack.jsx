import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
const FeedBack = () => {
  const navigate = useNavigate();
  const [feedback, setFeedBack] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [userToReply, setUserToReply] = useState(null);
  const [replyFeedBack, setReplyFeedBack] = useState('');
  const handleReply = (user) => {
    setUserToReply(user);
    setShowReplyModal(true);
  };

  const cancelReply = () => {
    setShowReplyModal(false);
    setUserToReply(null);
  };

  const confirmReply = async () => {
     try{
         const response = axios.post('http://localhost:3000/feedback/reply',{
          email: userToReply.email,
         replyText: replyFeedBack,
         });
         setReplyFeedBack('');
         console.log(response.data.message);
     }catch(error){
        console.log(error);
     }
  };

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/feedback/comments');
        if (response.status === 200) {
          setFeedBack(response.data.feedbacks);
        }
      } catch (error) {
        console.error(error);
        setErrorMessage('An error occurred while fetching feedbacks');
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <>
      {/* <Navs/> */}
      <div className="flex-grow mt-16">
        <div className=" border-[#329898] border-b-4 flex   justify-between mx-4">
          <h1 className='text-center text-xl'>User FeedBacks</h1>
          <button 
          onClick={()=>navigate('/')}
          className='text-[#3bb5b5] hover:underline'>
            Back to Home
            </button>
        </div>

        <div className="my-8 mx-6">
          {feedback.length === 0 ? (
            <p>No Feedback found.</p>
          ) : (
            feedback.map((fb) => (
              <div key={fb._id} className="my-4 border border-gray-300 p-4 rounded">
                <div className="flex items-center mb-2">
                  <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-bold">{fb.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold">{fb.name}</h1>
                    <p className="text-gray-600">{fb.comment}</p>
                  </div>
                </div>
                <div className="flex">
                  <button
                    onClick={() => handleReply(fb)}
                    className="bg-[#3bb5b5] hover:bg-[#3bb5b5] text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Reply
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Render the ConfirmReplyModal if showReplyModal is true */}
        {showReplyModal && (
          <ConfirmReplyModal user={userToReply} onCancel={cancelReply} onConfirm={confirmReply} 
          replyFeedBack={replyFeedBack} setReplyFeedBack={setReplyFeedBack}/>
        )}
      </div>
      {/* <Footer/> */}
    </>
  );
};

const ConfirmReplyModal = ({ user, onCancel, onConfirm,replyFeedBack,setReplyFeedBack }) => {
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white p-8 shadow-lg rounded">
        <h2 className="text-2xl mb-4">Reply Feedback</h2>
        <form >
        <textarea
          className="w-full border border-gray-300 rounded p-2"
          value={replyFeedBack}
          onChange={(e)=>setReplyFeedBack(e.target.value)}
          cols="30"
          rows="5"
        ></textarea>
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
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
