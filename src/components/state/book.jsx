import { createSlice } from "@reduxjs/toolkit";
export const bookSlice = createSlice({
    name: "book",
    initialState: {
        portfolio: [],
        priceHistory:{},
        doughnutData:{}
    },
    reducers: {
        clearStocks: (state) => {
            state.portfolio = [];
            state.priceHistory = {};
            state.doughnutData = {};
        },
        setPortfolio: (state, action) =>{
            state.portfolio = [...action.payload];
        },
        setPriceHistory: (state, action) =>{
            state.priceHistory = {...action.payload};
        },
        setDoughnutData: (state, action) =>{
            state.doughnutData = {...action.payload};
        }
    },
});

export const { clearStocks, setPortfolio, setPriceHistory, setDoughnutData } = bookSlice.actions;

export default bookSlice.reducer;