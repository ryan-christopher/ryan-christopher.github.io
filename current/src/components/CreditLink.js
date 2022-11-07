import React from 'react'

function CreditLink({ title, link }) {
    return (
        <div className='mt-[2vh] pl-[25px] pr-[20px]'>
            <a
                className="underline decoration-inherit hover:decoration-gray-500 ease-in duration-100 break-words"
                href={link}
                target="_blank"
                rel="noreferrer">
                {title}
            </a>
        </div>
    )
}

export default CreditLink