document.addEventListener('scroll',() => {

    let header = document.querySelector("header")
    window.scrollY === 0 ? header.classList.remove('dark') : header.classList.add('dark')
    console.log(window.scrollY)
});