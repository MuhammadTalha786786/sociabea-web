import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userInfo:Object
   // for monitoring the registration process.
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
        state.isLogin = action.payload.isLogin;
    },
    setUserInfo:(state, action)=> {
      state.userInfo = action.payload.userInfo;
    }
  

  },
});

export const { setSignIn,setUserInfo} = authSlice.actions;
export default authSlice.reducer;
