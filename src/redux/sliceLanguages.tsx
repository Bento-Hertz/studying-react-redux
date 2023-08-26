import { createSlice } from '@reduxjs/toolkit';

interface Languages {
    name: string;
    favorite: boolean;
}

const INITIAL_STATE: Languages[] = [
    { name: 'JAVA', favorite: false },
    { name: 'C#', favorite: false },
    { name: 'JAVASCRIPT', favorite: false }
];

const sliceLanguages = createSlice({
    name: 'languages',
    initialState: INITIAL_STATE,
    reducers: {
        addLanguages(state, action) {
            return [...state,  { name: action.payload, favorite: false }]
        },
        toFavorite(state, action) {
            return state.map(st => st.name === action.payload ? {...st, favorite: !st.favorite} : st)
        }
    }
});

export default sliceLanguages.reducer;

export const { addLanguages, toFavorite } = sliceLanguages.actions;
export const useLanguages = (state: any) => {
    return state.languages as Languages[];
}