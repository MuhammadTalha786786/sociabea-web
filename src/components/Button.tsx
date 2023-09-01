import React from 'react'

type buttonType = {
    bgColor?: string
    textColor?: string
    color?: string
    text?:string
}

const Button = (props: buttonType) => {
    console.log(props?.bgColor)


    return (

        <button className={`bg-[${props?.bgColor}] hover:bg-[${props?.bgColor}] text-white font-bold py-2 px-4 rounded`}>
            {props?.text}
        </button>


    )
}

export default Button   