import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";


export const plansAdapter = createEntityAdapter();
export const plansSelector = plansAdapter.getSelectors((state) => state.plans);

const plansSlice = createSlice({
    name: 'plans',
    initialState: plansAdapter.getInitialState(),
    reducers: {
        addPlan: plansAdapter.addOne,
        deletePlan: plansAdapter.removeOne
    }
});

export const { addPlan, deletePlan } = plansSlice.actions;

export default plansSlice.reducer;