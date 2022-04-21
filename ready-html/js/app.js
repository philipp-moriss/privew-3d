// 3d scroll

let zSpacing = -1000
let lastPosition = zSpacing / 5
let $frames = document.getElementsByClassName('frame')
let frames = Array.from($frames)
let zValues = []

window.onscroll = function () {

    let top = document.documentElement.scrollTop
    let delta = lastPosition - top

    lastPosition = top

    frames.forEach((item, index)=>{
        zValues.push((index * zSpacing) + zSpacing)
        zValues[index] += delta * -5.5
        let frame = frames[index]
        let transform = `translateZ(${zValues[index]}px)`
        let opacity = zValues[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity} ;`)
    })

}

window.scrollTo(0, 1)


//audio

let soundButton = document.querySelector('.soundbutton')
let audio = document.querySelector('.audio')

soundButton.addEventListener('click', (event)=> {
    soundButton.classList.toggle('paused')

    audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function () {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function () {
    audio.pause()
}
