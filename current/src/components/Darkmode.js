import React from 'react'
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md'

if (window.localStorage.getItem("theme") === null) {
    window.localStorage.setItem('theme', 'dark')
}
//console.log(window.localStorage.getItem("theme"))
let darkModeIcon;
let lightModeIcon;

function Darkmode() {
    const [darkToggle, setDarkToggle] = React.useState(true)

    function switchTheme() {
        setDarkToggle(!darkToggle)
        if (window.localStorage.getItem('theme') === "light") {
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
            darkModeIcon.classList.toggle("activeTheme")
            lightModeIcon.classList.toggle("inactiveTheme")
            lightModeIcon.classList.toggle("activeTheme")
            darkModeIcon.classList.toggle("inactiveTheme")
        }
        else {
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
            darkModeIcon.classList.toggle("activeTheme")
            lightModeIcon.classList.toggle("inactiveTheme")
            lightModeIcon.classList.toggle("activeTheme")
            darkModeIcon.classList.toggle("inactiveTheme")
        }
    }

    function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem('theme');
        const hasPersistedPreference = typeof persistedColorPreference === 'string';
        // If the user has explicitly chosen light or dark,
        // let's use it. Otherwise, this value will be null.
        if (hasPersistedPreference) {
            if (persistedColorPreference === "light") {
                lightModeIcon.classList.toggle("activeTheme")
                darkModeIcon.classList.toggle("inactiveTheme")
                return setDarkToggle(false)
            }
            else {
                darkModeIcon.classList.toggle("activeTheme")
                lightModeIcon.classList.toggle("inactiveTheme")
                document.documentElement.classList.add('dark')
                return setDarkToggle(true)
            }
        }
        // If they haven't been explicit, let's check the media
        // query
        /*
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
            return mql.matches ? setDarkToggle(true) : setDarkToggle(false);
        }
        */
        // If they are using a browser/OS that doesn't support
        // color themes, let's default to 'light'.
        setDarkToggle(true);
    }
    React.useEffect(() => {
        darkModeIcon = document.getElementById("darkModeIcon")
        lightModeIcon = document.getElementById("lightModeIcon");
        getInitialColorMode();
    }, [])


    return (
        <div>
            <MdOutlineLightMode id='lightModeIcon' className='ease-in duration-200' onClick={() => switchTheme()} />
            <MdOutlineNightlight id='darkModeIcon' className='ease-in duration-200' onClick={() => switchTheme()} />
        </div>

    )
}
export default Darkmode