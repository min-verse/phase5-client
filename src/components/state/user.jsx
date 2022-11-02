import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "user",
    initialState: {
        profile: {},
        isAuthenticated: false,
        readings: [],
        posts: [],
        comments: [],
        friends: [],
        pendings:[],
        genres:{},
        moods: {}
    },
    reducers: {
        setUser: (state, action) => {
            state.profile = {
                id: action.payload.id,
                email: action.payload.email,
                username: action.payload.username
            };
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.profile = {};
            state.isAuthenticated = false;
            state.readings = [];
            state.posts = [];
            state.comments = [];
        },
        setReadings: (state, action) => {
            state.readings = [...action.payload.readings];
        },
        setFriends: (state, action) => {
            state.friends = [...action.payload.friends];
        },
        setPosts: (state, action) => {
            state.posts = [...action.payload.posts];
        },
        setComments: (state, action) => {
            state.comments = [...action.payload.comments];
        },
        setPendings: (state, action) => {
            state.pendings = [...action.payload.pendings];
        },
        setGenres: (state, action) => {
            state.genres = {...action.payload.genres};
        },
        setMoods: (state, action) =>{
            state.moods = {...action.payload.moods};
        }
    },
});

export const { setUser, clearUser, setReadings, setFriends, setPosts, setComments, setPendings, setGenres, setMoods } = userSlice.actions;

export default userSlice.reducer;