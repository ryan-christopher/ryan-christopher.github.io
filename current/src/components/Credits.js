import React from 'react'
import '../styles/credits.css';
import $ from 'jquery'

function Navbar() {

    return (
        <div>
            <div className="creditnavbar bg-[rgba(255,255,255,0.45)] dark:bg-[rgba(0,0,0,0.5)] backdrop-blur-sm ease-in duration-200">
            </div>
            <div className="creditbutton hover:cursor-pointer">
                Credits
            </div>
            <div className="creditmenu bg-[#f9f5e9] dark:bg-[#171717]">
                <div className="creditmenu-body bg-[#f9f5e9] dark:bg-[#171717]">
                    <div className="creditmenu-overlay"></div>
                    <div className="creditmenu-container font-[Atami]">
                        <h2 className='text-[25px] pt-[5px] pb-[5px] pl-[15px] pr-[15px] text-center block ml-auto mr-auto font-["Atami_Display"] w-fit bg-[#dfd5c1] 
            dark:bg-[#171717] border-[1px] border-[#171717] dark:border-[#dfd5c1] uppercase relative z-[1] mt-[10px]'>
                            Fonts
                        </h2>
                        <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[90vw] 
            block ml-auto mr-auto relative top-[-29px] z-0 overflow-hidden' />
                        <div className='pl-[25px] pt-[10px] text-[18px]'>
                            <a className="underline decoration-inherit hover:decoration-gray-500 ease-in duration-100" href="https://andrewherndon.gumroad.com/l/atami" target="_blank" rel="noreferrer">Atami</a>
                            <br />
                            <p className="font-[Atami]">Takota</p>
                        </div>

                        <h2 className='text-[25px] pt-[5px] pb-[5px] pl-[15px] pr-[15px] text-center block ml-auto mr-auto font-["Atami_Display"] w-fit bg-[#dfd5c1] 
            dark:bg-[#171717] border-[1px] border-[#171717] dark:border-[#dfd5c1] uppercase relative z-[1] mt-[10px]'>
                            Images
                        </h2>
                        <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[90vw] 
            block ml-auto mr-auto relative top-[-29px] z-0 overflow-hidden' />
                        <div className='pl-[25px] pt-[10px] text-[18px]'>
                            <p className="font-[Atami]">High-rise buildings by <br /> Todd Kent</p>
                            <br />
                            <p className="font-[Atami]">River Painting by <br /> Birmingham Museums Trust</p>
                        </div>
                        <h2 className='text-[25px] pt-[5px] pb-[5px] pl-[15px] pr-[15px] text-center block ml-auto mr-auto font-["Atami_Display"] w-fit bg-[#dfd5c1] 
            dark:bg-[#171717] border-[1px] border-[#171717] dark:border-[#dfd5c1] uppercase relative z-[1] mt-[10px]'>
                            3D Models
                        </h2>
                        <hr className='text-[#171717] border-[#171717] dark:border-[#dfd5c1] w-[90vw] 
            block ml-auto mr-auto relative top-[-29px] z-0 overflow-hidden' />
                        <div className='pl-[25px] pt-[10px] text-[18px]'>
                            <p className="font-[Atami]">Paper Coffee Cup by <br /> Crazy_8</p>
                            <br />
                            <p className="font-[Atami]">MIDI by <br /> igorsavchuk</p>
                            <br />
                            <p className="font-[Atami]">Floating Laptop by <br /> drcmda</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="creditmask"></div>
        </div >
    )
}


(function () {
    $(document).on("click", ".creditmenu-group", function () {
        $(this).find(".creditmenu-section").toggleClass('active');
        $(".creditmenu-overlay").toggleClass('active');
    });
    $(document).on("click", ".creditmenu-link-back", function () {
        $(".creditmenu-section").toggleClass('active');
    });
    $(document).on("click", ".creditbutton", function () {
        $(this).toggleClass('active');
        $('.creditmenu').toggleClass('active');
        $('.text').toggleClass('active');
        return $('.creditmask').toggleClass('active');
    });
    $(document).on("click", ".creditmenu-overlay", function () {
        $(this).toggleClass('active');
        return $(".creditmenu-section").removeClass('active');
    });
    $(document).on("click", ".creditmask", function () {
        $(this).toggleClass('active');
        $('.creditmenu').toggleClass('active');
        $('.text').toggleClass('active');
        $('.creditbutton').toggleClass('active');
        $(".creditmenu-overlay").removeClass('active');
        return $(".creditmenu-section").removeClass('active');
    });
}).call(this);

export default Navbar