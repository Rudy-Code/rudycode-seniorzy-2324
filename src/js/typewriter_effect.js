const text = document.querySelector('.typewriter-effect')

let inputValue = ['Pasja', 'Walka', 'Poświęcenie', 'Jeden zespół'] //, 'Mosir Bochnia'
let timeout
let index = 0
let indexText = 1
let speed = 80

const checkIndex = () => {
	if (index < inputValue.length - 1) {
		index++
	} else {
		index = 0
	}
}

const writingAnimation = () => {
	text.innerHTML = inputValue[index].slice(0, indexText)

	indexText++

	if (indexText > inputValue[index].length) {
		setTimeout(() => {
			clearTimeout(timeout)
			deleteAnimation()
			return
		}, 1400)
		return
	}

	timeout = setTimeout(writingAnimation, speed)
}

const deleteAnimation = () => {
	text.innerHTML = inputValue[index].slice(0, indexText)
	indexText--

	if (indexText === -1) {
		checkIndex()
		indexText = 0
		setTimeout(() => {
			clearTimeout(timeout)
			writingAnimation()
			return
		}, 700)
		return
	}

	timeout = setTimeout(deleteAnimation, speed)
}

writingAnimation()
