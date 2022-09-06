import '../styles/index.css';

function Preloader() {
    if (document.readyState === "complete") {
        const preload = document.querySelector('.preload');
        const loadtext = document.getElementById('loadtext');
        loadtext.classList.toggle("load-anim");
        setTimeout(() => { loadtext.classList.toggle("load-anim"); }, 100);
        preload.classList.toggle('preload-finish');
        setTimeout(() => { preload.classList.toggle('preload-finish') }, 100);
    }
}

export default Preloader