import React, { useState } from 'react';
import { useCreatePost } from '../useCreatePost';
import { ColorRing } from 'react-loader-spinner'


const CreatePostBox: React.FC = () => {
  const { loginUser, postDetail, setPostDetail, image, selectFile, handleChange, postSent, isDisabled, postImage , imageUploading} = useCreatePost()

  return (
    <div className="rounded-lg bg-slate-100	 flex flex-col p-3 px-4 shadow">
      <div className="flex items-center space-x-2 border-b pb-3 mb-2">
        <div className="w-10 h-10">
          <img
            src={loginUser?.userInfo?.photoURL}
            className="w-full h-full rounded-full"
            alt="dp"
          />
        </div>
        <input value={postDetail} onChange={(e) => { setPostDetail(e.target.value) }} placeholder='whats in your mind?' className="hover:bg-gray-200 focus:bg-gray-300 focus:outline-none flex-grow bg-gray-100 text-gray-500 text-left rounded-full h-10 pl-5">
          {/* What&apos;s on your mind, Shihab? */}
        </input>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        {
          image ?

            <img src={image} style={{ height: '20%', width: '20%' }} />
            :
            null


        }
      </div>
      <div className="flex space-x-3 font-thin text-sm text-gray-600 -mb-1">
        {/* <button className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
          <i className="fab fa-youtube text-red-400"></i>
          </div>
          <div>
            <p className="font-semibold">Create Video</p>
          </div>
        </button> */}
        <button onClick={selectFile} className="flex-1 flex align-center items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
            <input className='input-field' type="file" id="My_File" name="image" style={{ display: 'none' }} accept="image/png, image/gif, image/jpeg" onChange={handleChange} />
            <i className="fas fa-images text-green-500"></i>
          </div>
          <div>
            <p className="font-semibold">Photos/Video</p>
          </div>
        </button>

        {!imageUploading ?
        <button disabled={postImage === '' || postDetail === ''} onClick={postSent} className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
          <div>
            <i className="fa fa-paper-plane text-yellow-500"></i>
          </div>
          <div>
            <p className="font-semibold">Send Post</p>
           
          </div>
        </button>: <ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />}
      </div>
    </div>
  );
};

export default CreatePostBox;
