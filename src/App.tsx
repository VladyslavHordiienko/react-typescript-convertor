import React from 'react';
import Header from "./components/Header";
import Input from "./components/Input";
import Select from "./components/Select";

import {useAppSelector} from "./hooks";
import {selectCoefficients, selectUnits} from "./store/Slices/rootSlice";


const App:React.FC = () => {
    const [error, setError] = React.useState<Boolean>(false)
    const [convertFrom, setConvertFrom] = React.useState<string>("0")
    const [convertTo, setConvertTo] = React.useState<string>("0")
    const selectFromRef = React.useRef<HTMLSelectElement>(null)
    const selectToRef = React.useRef<HTMLSelectElement>(null)
    const units = useAppSelector(selectUnits)
    const coefficients = useAppSelector(selectCoefficients)

    const convertClick = () => {
        if(selectFromRef.current && selectToRef.current){
            let unitFromIndex = selectFromRef.current.selectedIndex - 1
            let unitToIndex = selectToRef.current.selectedIndex - 1
            if (unitFromIndex >= 0 && unitToIndex >= 0) {
                setError(false)
                setConvertTo(((+convertFrom * coefficients[unitFromIndex]) / coefficients[unitToIndex]).toString())
            } else {
                setError(true)
            }
            console.log(convertFrom)
            console.log(coefficients[unitFromIndex], unitFromIndex)
            console.log(coefficients[unitToIndex], unitToIndex)

        }
    }

    return (
           <div className="container">
               <Header/>
               {error && <p className="error">Choose unit</p>}
               <div className="row">
                   <div className="wrapper">
                       <Input convertValue={convertFrom} onChangeHandler={setConvertFrom}/>
                       <Select ref={selectFromRef} units={units}/>
                   </div>
                   <span className="equal">=</span>
                   <div className="wrapper">
                       <Input convertValue={convertTo} onChangeHandler={setConvertTo} readOnly={true}/>
                       <Select ref={selectToRef} units={units}/>
                   </div>
                   <button onClick={convertClick} className="btn">Convert</button>
               </div>
           </div>
    );
};

export default App;
