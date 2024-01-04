import moment from 'moment'
import React from 'react'
import { sociacardI } from '../type'
// import { useSociaCard } from '../useSociaCard'
import { useSelector } from 'react-redux'
import { useSociaCard } from '../useSociaCard'





const SociaCard = (props: sociacardI) => {

    const { likedPost , addPostLiked, likesLength, setComment, comment, addComment} = useSociaCard({props })

    const createdDate = props?.item?.dateCreated?.toDate()



    return (
        <div className='wrapper pt-10'>
            <article className="max-w-2x mb-4 break-inside rounded-md  bg-slate-300 border-red-200	 dark:bg-slate-800 flex flex-col bg-clip-border">
            
                <div className="flex  p-6 pb-6 items-center justify-between">
                    <div className="flex">
                        <a className="inline-block mr-4" href="#">
                            <img className="rounded-full max-w-none w-14 h-14" src={props?.item?.userImage } />
                        </a>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <a className="inline-block text-lg font-bold mr-2" href="#">{props?.item?.userName}</a>
                                <span>
                                    <svg className="fill-blue-500 dark:fill-slate-50 w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div className="text-slate-500 dark:text-slate-300">
                                {moment( createdDate).format('MMMM Do, YYYY')}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black w-full">
                    {/* <a className="flex" href="#"> */}
                        <img className="max-h-96 w-full"
                            src={props?.item?.postImage} />
                    {/* </a> */}
                </div>
                <p  className='p-6'>
                    {props?.item?.postDetail}
                </p>
                <div className="py-4 p-6">
                    <a className="inline-flex items-center " href="#">
                        <span className="mr-2"  onClick={()=>{}}>
                            {likedPost ? <svg  onClick={(e)=>addPostLiked(e)}  width="40px" height="40px " viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg" version="1.1" >
                                <g transform="translate(0 -1028.4)">
                                    <path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" fill="#e74c3c" />
                                </g>
                            </svg> :

                                <svg onClick={(e)=>addPostLiked(e)} width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M14.88 4.78a3.489 3.489 0 0 0-.37-.9 3.24 3.24 0 0 0-.6-.79 3.78 3.78 0 0 0-1.21-.81 3.74 3.74 0 0 0-2.84 0 4 4 0 0 0-1.16.75l-.05.06-.65.65-.65-.65-.05-.06a4 4 0 0 0-1.16-.75 3.74 3.74 0 0 0-2.84 0 3.78 3.78 0 0 0-1.21.81 3.55 3.55 0 0 0-.97 1.69 3.75 3.75 0 0 0-.12 1c0 .317.04.633.12.94a4 4 0 0 0 .36.89 3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0 0 15 5.78a3.747 3.747 0 0 0-.12-1zm-1 1.63a2.69 2.69 0 0 1-.69 1.21l-5.21 5.2-5.21-5.2a2.9 2.9 0 0 1-.44-.57 3 3 0 0 1-.27-.65 3.25 3.25 0 0 1-.08-.69A3.36 3.36 0 0 1 2.06 5a2.8 2.8 0 0 1 .27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 0 1 .89-.6 2.8 2.8 0 0 1 2.08 0c.33.137.628.338.88.59l1.36 1.37 1.36-1.37a2.72 2.72 0 0 1 .88-.59 2.8 2.8 0 0 1 2.08 0c.331.143.633.347.89.6.174.165.32.357.43.57a2.69 2.69 0 0 1 .35 1.34 2.6 2.6 0 0 1-.06.72h-.03z" /></svg>
                            }
                        </span>
                        <span className="text-lg font-bold">{likesLength?.length}</span>
                    </a>
                </div>
                <div className="relative p-6">
                    <input
                        value={comment}
                         onChange={(e)=>{setComment(e.target.value)}}
                        className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
                        type="text" placeholder="Write a comment" />
                    <span className=" flex absolute right-3 top-2/4 -mt-3 items-center">
                     
                        <svg onClick={addComment}  className="fill-blue-500 mr-8 dark:fill-slate-50" style={{ width: "22px", height: '22px' }} viewBox="0 0 24 24">
                            <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
                        </svg>
                    </span>
                </div>
                <div className="pt-6 p-6">
                    {
                        props?.item?.comments?.map((x: any, index: number) => {
                    
                            return (
                                index < 8 &&
                                <div className="media flex pb-4">
                                    <a className="mr-4" href="#">
                                        <img className="rounded-full max-w-none w-12 h-12" src={x?.userImage ? x?.userImage :'https://img.freepik.com/premium-vector/man-character_665280-46967.jpg'} />
                                    </a>
                                    <div className="media-body">
                                        <div>
                                            <a className="inline-block text-base font-bold mr-2" href="#">{x?.userProfileName}</a>
                                            <span className="text-slate-500 dark:text-slate-300">{moment(x?.commentCreated?.toDate()).fromNow()}</span>
                                        </div>
                                        <p>
                                            {x?.comment}
                                        </p>
                                      
                                    </div>
                                </div>
                            )

                        })
                    }

                    <div className="w-full">
                        <a href="#"
                            onClick={() => { }}
                            className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75">Show
                            more comments</a>
                    </div>

                </div>
            </article>
        </div>
    )
}

export default SociaCard