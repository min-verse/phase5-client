import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "user",
    initialState: {
        profile: {},
        isAuthenticated: false,
        books:[],
        posts:[],
        comments:[],
        friends:[]
    },
    reducers: {
        setUser: (state, action) => {
            state.profile = { ...action.payload };
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.profile = {};
            state.isAuthenticated = false;
            state.books=[];
            state.posts=[];
            state.comments=[];
        },
        setBooks: (state, action) =>{
            state.books = [...action.payload];
        },
        setFriends: (state, action) =>{
            state.friends = [...action.payload];
        },
        setPosts: (state, action) =>{
            state.posts = [...action.payload];
        },
    },
});

export const { setUser, clearUser, setStocks, setPriceHistory, setDoughnutData, clearStocksData, setFollowing } = userSlice.actions;

export default userSlice.reducer;