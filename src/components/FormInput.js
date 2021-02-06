import React from 'react'

const FormInput = ({name, type, onChange, value}) => (
    <div className="campo">
            <input type={type} onChange={(e)=> onChange(e.target.value)}  name={name} placeholder={name} value={value} required />
    </div>
)

export default FormInput