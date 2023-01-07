import React from 'react';

const Select: React.FC = () => {
    return (
        <>
            <select className="select">
                <option value="" disabled selected>Choose unit</option>
            </select>
        </>
    );
};

export default Select;