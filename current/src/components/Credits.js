import React from 'react'
import '../styles/credits.css';
import $ from 'jquery'
import CreditHeader from './CreditHeader';
import CreditLink from './CreditLink';

function Credits() {

    return (
        <div>
            <div className="creditnavbar bg-[rgba(255,255,255,0.45)] dark:bg-[rgba(0,0,0,0.5)] backdrop-blur-sm ease-in duration-200">
            </div>
            <div className="creditbutton hover:cursor-pointer hover:scale-[1.2] origin-center block ml-auto mr-[5vw] text-[20px] underline">
                Credits
            </div>
            <div className="creditmenu bg-[#dfd5c1] dark:bg-[#171717] overflow-y-scroll">
                <div className="creditmenu-body bg-[#dfd5c1] dark:bg-[#171717]">
                    <div className="creditmenu-overlay"></div>
                    <div className="creditmenu-container font-[Atami] text-[18px] pb-[20px]">
                        <div
                            className="creditbuttonclose w-[40px] font-['Atami_Display'] text-red-400 hover:cursor-pointer hover:scale-[1.25] text-[30px] text-center 
                        leading-[1.25] block ml-auto mr-[20px] relative top-[5px] border-[1.5px] border-[#171717] dark:border-[#dfd5c1] h-[40px] ease-in duration-100">X</div>
                        <CreditHeader title="Fonts" />
                        <CreditLink title="Atami" link="https://andrewherndon.gumroad.com/l/atami" />
                        <CreditLink title="Takota" link="https://www.dafont.com/takota.font" />
                        <CreditHeader title="Images" />
                        <CreditLink title="High-rise buildings by Todd Kent" link="https://unsplash.com/photos/iRKv_XiN--M" />
                        <CreditLink title="River Painting by Birmingham Museums Trust" link="https://unsplash.com/photos/6fv0MEf3FUE" />
                        <CreditHeader title="3D Models" />
                        <CreditLink title="Paper Coffee Cup by Crazy_8" link="https://sketchfab.com/3d-models/paper-coffee-cup-e77b65a844324452a385bf4c1275515f" />
                        <CreditLink title="MIDI by igorsavchuk" link="https://sketchfab.com/3d-models/midi-6cac83e283ff40d1b08e14a4c46c919b" />
                        <CreditLink title="Floating Laptop by drcmda" link="https://codesandbox.io/s/floating-laptop-q23sw" />
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
    $(document).on("click", ".creditbuttonclose", function () {
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

export default Credits