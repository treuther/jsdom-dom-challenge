let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let h1 = document.getElementById('counter')
let interval

let timer = () => {
    interval = this.setInterval(() => {
        h1.innterText = parseInt(h1.innerText) + 1
    }, 1000)
}

let decrement = () => {
    minus.onclick = () => {
        h1.innerText = parseInt(hi.innerText) - 1
    }
}

let increment = () => {
    plus.onclick = () => {
        hi.innterText = parseInt(h1.innerText) + 1
    }
}

let like = () => {
    let counter, likesNumber = 1
    heart.onclick = () => {
        if (h1.innterText == counter) {
            likesNumber = likesNumber + 1
        } else {
            likesNumber = 1
        }
        let likes = document.getElementById('ul')[0]
        let li = document.createElement('li')
        li.innterText = h1.innterText + `has been liked ${likesNumber} times`
        counter = h1.innerText
        likes.appendChild(li)
    }
}

let pause = () => {
    let btnStatus = "pause"
    let pause = document.getElementById('pause')
    pause.onclick = () => {
        if (btnStatus === "pause") {
            pause.innerText = "resume"
            minus.disabled = true
            plus.disabled = true
            heart.disabled = true
            btnStatus = "resume"
            clearInterval(interval)
        } else if (btnStatus === "resume") {
            pause.innerText = "pause"
            minus.disabled = false
            plus.disabled = false
            heart.disabled = false
            btnStatus = "pause"
            timer()
        }
    }
}

let submitForm = (e) => {
    e.preventDefault()
    let mssgInput = document.getElementById('comment-input')
    let p = document.createElement('p')
    p.innerHTML = mssgInput.value
    document.getElementById("list").appendChild(p)
    mssgInput.value = ""
}
let form = document.getElementById('comment-form')
form.onsubmit = submitForm

timer()
decrement()
increment()
like()
pause()