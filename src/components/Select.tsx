import React, {RefObject} from 'react';
import uniqid from "uniqid";


type propTypes = {
    units: string[],
}

const Select = React.memo(React.forwardRef<HTMLSelectElement, propTypes>((props, ref) => {
    const {units} = props

    return (
        <>
            <select ref={ref} className="select">
                <option style={{display: 'none'}} value="" selected>Choose unit</option>
                {
                    units.map(unit => (
                        <option key={uniqid()} value={unit}>{unit}</option>
                    ))
                }
            </select>
        </>
    );
}));

export default Select;