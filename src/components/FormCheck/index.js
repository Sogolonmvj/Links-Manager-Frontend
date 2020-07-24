import React, { useState, useEffect } from 'react'; 

const FormCheck = (props) => {
    const { data, name, label } = props;
    const [isChecked, setIsChecked] = useState(null);

    useEffect(() => {
        const initialvalue = data && data[name] ? data[name] : undefined;
        if (initialvalue !== undefined) setIsChecked(initialvalue);
    }, [name,data]);

    const handleChange = (e) => {
        if(isChecked === e.target.checked) return;
        setIsChecked(!!e.target.checked);
    };

    const inputProps = {
        type: 'checkbox',
        name,
        checked: !!isChecked,
        onChange: handleChange,  
    };

    return (
        <div className="form-group form-check">
        <label className="form-check-label">
            <input { ...inputProps }/>
            <span className="form-check-sign"></span>
            { label }
        </label>
    </div>
    );
};

export default FormCheck;