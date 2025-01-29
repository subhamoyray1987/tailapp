const topBar = document.querySelector("#top-bar"); // Selecting #top-bar in html.

// Handle Top Bar On Scroll

const handleScroll = () => {

const atTop = window.scrollY === 0;
// topBar.classList.toggle('visible-bar', atTop);
// topBar.classList.toggle('hidden-bar', !atTop);
// console.log(atTop);

if(atTop){
    topBar.classList.add('visible-bar');
    topBar.classList.remove('hidden-bar');
}else{
    topBar.classList.remove('visible-bar');
    topBar.classList.add('hidden-bar');
}
    console.log(atTop)
}


// Event Listeners
window.addEventListener('scroll', ()=>{
    requestAnimationFrame(handleScroll);

})
