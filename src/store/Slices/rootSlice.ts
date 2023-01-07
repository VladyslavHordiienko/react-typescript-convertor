import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";


interface IState {
    units: string[],
    coefficients: number[]
}

const initialState: IState = {
    units: ['Meter (m)', 'Centimeter (cm)', 'Inch (in)', 'Foot (ft)'],
    coefficients: [1, 0.01, 0.0254, 0.3048]
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        addUnits: (state, action:PayloadAction<string>) => {
            console.log(action.payload)
        }
    }
})
export const {} = rootSlice.actions

export const selectUnits = (state:RootState) => state.root.units
export const selectCoefficients = (state:RootState) => state.root.coefficients

export default rootSlice.reducer
