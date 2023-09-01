import React from 'react'
import { TEInput } from 'tw-elements-react'

type inputType = {
    value: string

}

function Input(props: inputType) {
    return (

        <>
            <label className="block text-gray-700 text-sm font-bold mb-2" form="username">
                Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />

        </>

    )
}

export default Input