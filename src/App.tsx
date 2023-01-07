import React from 'react';
import Header from "./components/Header";
import Input from "./components/Input";
import Select from "./components/Select";

const App:React.FC = () => {
    return (
        <div className="container">
           <Header/>
            <p className="error">Choose unit</p>
            <div className="row">
                <div className="wrapper">
                    <Input/>
                    <Select/>
                </div>
                <span className="equal">=</span>
                <div className="wrapper">
                    <Input/>
                    <Select/>
                </div>
                <button className="btn">Convert</button>
            </div>
        </div>

    );
};

export default App;
