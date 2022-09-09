import React from 'react'


console.log(window.localStorage.getItem("theme"))


function Darkmode() {
    const [darkToggle, setDarkToggle] = React.useState(true)

    function switchTheme() {
        setDarkToggle(!darkToggle)
        if (window.localStorage.getItem('theme') === "light") {
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        }
        else {
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }

    function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem('theme');
        const hasPersistedPreference = typeof persistedColorPreference === 'string';
        // If the user has explicitly chosen light or dark,
        // let's use it. Otherwise, this value will be null.
        if (hasPersistedPreference) {
            if (persistedColorPreference === "light") {
                return setDarkToggle(false)
            }
            else {
                return setDarkToggle(true)
            }
        }
        // If they haven't been explicit, let's check the media
        // query
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
            return mql.matches ? setDarkToggle(true) : setDarkToggle(false);
        }
        // If they are using a browser/OS that doesn't support
        // color themes, let's default to 'light'.
        setDarkToggle(false);
    }
    React.useEffect(() => {
        getInitialColorMode();
    }, [])


    return (
        <div>
            <div
                className={'h-{20vh} w-full flex items-center justify-center bg-gray-300 flex-col dark:bg-gray-900 ease-in duration-200'}
            >
                <label className="toggleDarkBtn fixed">
                    <input type="checkbox" checked={darkToggle} onChange={() => switchTheme()} />
                    <span className="slideBtnTg round"></span>
                </label>
                <div className="max-w-sm overflow-hidden bg-gray-100 p-5 rounded-lg mt-4 text-white dark:bg-gray-900 ease-in duration-200">
                    <img
                        className="w-full"
                        src="https://v1.tailwindcss.com/img/card-top.jpg"
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2 ease-in duration-200">
                            The Coldest Sunset
                        </div>
                        <p className="text-gray-800 dark:text-gray-200 ease-in duration-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptatibus quia, nulla! Maiores et perferendis eaque,
                            exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Darkmode