import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {

        setInputValue(e.target.value)

    }
    const handleSubmit = (e) => {//manejamos los ENTER
        e.preventDefault();
        if (inputValue.trim().length > 2) {//trim limpia los espacios en blanco  del iniciio y final e inserta apartir de 3 caracteres

            setCategories((c) => [inputValue,...c])//HACEMOS UNA REFERENCIA y no necesitamos llamar por PROPS a el estado categories del padre
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form >
    )
}
AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}