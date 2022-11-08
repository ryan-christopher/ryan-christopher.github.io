import React from 'react'

function CreditHeader({ title }) {
    return (
        <div>
            <h2 className='text-[25px] pt-[5px] pb-[5px] pl-[15px] pr-[15px] text-center block ml-auto mr-auto font-["Atami_Display"] w-fit bg-[#dfd5c1] 
            dark:bg-[#171717] border-[1px] border-[#171717] dark:border-[#dfd5c1] uppercase relative z-[1] mt-[10px]'>
                {title}
            </h2>
            <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[100%] 
            block ml-auto mr-auto relative top-[-25px] z-0 overflow-hidden' />
        </div>
    )
}

export default CreditHeader