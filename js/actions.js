

export function controls (){

const bgImg = document.querySelector('body')
const linkHome = document.querySelector('a[href*="/"]')
const linkUniverse = document.querySelector('a[href*="/universe"]')
const linkExplore = document.querySelector('a[href*="/explore"]')


function homePage(){
    bgImg.classList.add('home')
    bgImg.classList.remove('universe')
    bgImg.classList.remove('explore')

    linkHome.classList.add('link-selected')
    linkUniverse.classList.remove('link-selected')
    linkExplore.classList.remove('link-selected')

    
}
function universePage(){
    bgImg.classList.add('universe')
    bgImg.classList.remove('home')
    bgImg.classList.remove('explore')

    linkUniverse.classList.add('link-selected')
    linkHome.classList.remove('link-selected')
    linkExplore.classList.remove('link-selected')
}
function explorePage(){
    bgImg.classList.add('explore')
    bgImg.classList.remove('home')
    bgImg.classList.remove('universe')

    linkExplore.classList.add('link-selected')
    linkUniverse.classList.remove('link-selected')
    linkHome.classList.remove('link-selected')
}
    return{homePage , universePage , explorePage};
}