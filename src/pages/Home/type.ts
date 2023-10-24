export interface sociacardI {
    logoutUser: () => void
    item: {
        userImage:string 
        userName:string
        dateCreated:any
        postImage:string
        postID:string
        postDetail:string
        likes:{
            isLike:boolean
            postDetail:string
            timeLiked:Date
            userID:string
            userName:string
            userProfileImaege:string
            
        }[]
        comments:{
            comment:string
            commentCreated:Date
            commentID:string
            postID:string
            userID:string
            userImage:string
            userProfileName:string

        }[]
    }
}



export interface SocilCardHook {
   props:sociacardI    

}