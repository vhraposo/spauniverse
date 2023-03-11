import {Router} from "./router.js"

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/universo.html", "/pages/universo.html")
router.add("/exploracao.html", "/pages/exploracao.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


const universeScreen = document.querySelector('.universeScreen')
const homeScreen = document.querySelector('.homeScreen')
const explorationScreen = document.querySelector('.explorationScreen')


const homeButton = document.querySelector('#homeButton')

const universeButton = document.querySelector('#universeButton')

const explorationButton = document. querySelector('#explorationButton')




universeScreen.addEventListener('click', function(){
    removeAllBgs()
    document.querySelector('html').classList.add('bg2')
})


explorationScreen.addEventListener('click', function(){
    removeAllBgs()
    document.querySelector('html').classList.add('bg3')
    
})


homeScreen.addEventListener('click', function(){
    removeAllBgs()
    document.querySelector('html').classList.add('bg1')
    
})

function removeAllBgs(){
    document.querySelector('html').classList.remove('bg1')
    document.querySelector('html').classList.remove('bg2')
    document.querySelector('html').classList.remove('bg3')
    
    
}
homeButton.addEventListener('click', function(){
    removeAllWhiteColors()
    homeButton.style.color = '#70709e'
})

universeButton.addEventListener('click', function(){
    removeAllWhiteColors()
    universeButton.style.color = '#70709eed'
})

explorationButton.addEventListener('click', function(){
    removeAllWhiteColors()
    explorationButton.style.color = '#70709e'
})

function removeAllWhiteColors(){
    homeButton.style.color = '#E1E1E6'
    universeButton.style.color = '#E1E1E6'
    explorationButton.style.color = '#E1E1E6'
}


