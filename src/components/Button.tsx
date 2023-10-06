import React from 'react'

type buttonType = {
    bgColor?: string
    textColor?: string
    color?: string
    text?: string
}

const Button = (props: buttonType) => {
    console.log(props?.bgColor)


    return (
        <>

        {/* <button className={`bg-[${props?.bgColor}] hover:bg-[${props?.bgColor}] text-white   w-30 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2`}>
            <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
            </svg>
            {props?.text}
        </button> */}


            <button className={`bg-[${props?.bgColor}] hover:bg-[${props?.bgColor}] text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center`}>
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download</span>
            </button>
        </>


    )
}

export default Button   