import React from 'react';

type propTypes = {
    convertValue: string
    onChangeHandler: (value: string) => void
    readOnly ?: boolean
}

const Input: React.FC<propTypes> = (props) => {
    const {convertValue, onChangeHandler, readOnly} = props
    return (
        <>
            <input className="input" type="number" readOnly={readOnly} value={convertValue} onChange={(e) => onChangeHandler(e.target.value)}/>
        </>
    );
};

export default Input;
