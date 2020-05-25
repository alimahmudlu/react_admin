import React from 'react';

const InputField = ({  value, id, required, placeholder, disabled, minLength, maxLength, labelclass, multiple, name, className, input, label, type, ref, readOnly, data, meta: { touched, error } }) => {

    return (
        <>
            <label htmlFor={id} className={labelclass}>{label}</label>
            <input {...input} readOnly={readOnly} ref={ref}  id={id} defaultValue={data}  placeholder={placeholder} type={type} className={className} name={name} multiple={multiple} minLength={minLength} maxLength={maxLength} disabled={disabled} required={required}/>
            {touched && error && <span>{error}</span>}
        </>
    );
}

export default InputField;
