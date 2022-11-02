import React from 'react'
import '../styles/Menu.css';
import $ from 'jquery'

function Credits() {

    return (
        <div>
            <div className="creditmenu bg-[#f9f5e9] dark:bg-[#171717]">
                <div className="creditbutton">
                    CREDITS
                </div>
                <div className="creditmenu-body bg-[#f9f5e9] dark:bg-[#171717]">
                    <div className="creditmenu-overlay"></div>
                    <div className="creditmenu-container">
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

export default Credits