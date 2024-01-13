/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import getNewId from '../services/serviceId'

export default function RadioButton({
    id = getNewId(),
    name = "nome",
    description,
    buttonChecked = false,
    onButtonChange = null
}) {
    function handleButtonChange() {
        if (onButtonChange) {
            onButtonChange()
        }
    }
    return (
        <Fragment>
            <div className='flex flex-row items-center space-x-2'>
                <input type="radio" 
                    id={id}
                    name={name}
                    checked={buttonChecked}
                    onChange={handleButtonChange}
                />
                <label htmlFor={id}>{description}</label>
            </div>
        </Fragment>
    )
}
