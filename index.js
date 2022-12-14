const nunberClicked = document.getElementById('nunber-clicked')
const submitBtn = document.getElementById('submit-btn')
const container = document.getElementById('container')
const finalRating = document.getElementById('final-rating')
const numbers = [1, 2, 3, 4, 5]



//adding eventlisterner to ratings numbers
document.addEventListener('click', (e) => {
    if(e.target.id === 'one') {
        nunberClicked.innerHTML = `You selected ${numbers[0]} out of 5`
        submit()
        
    } else if(e.target.id === 'two') {
        nunberClicked.innerHTML = `You selected ${numbers[1]} out of 5`
        submit()

    } else if (e.target.id === 'three') {
        nunberClicked.innerHTML = `You selected ${numbers[2]} out of 5`
        submit()

    } else if(e.target.id === 'four') {
        nunberClicked.innerHTML = `You selected ${numbers[3]} out of 5`
        submit()

    } else if(e.target.id === 'five') {
        nunberClicked.innerHTML = `You selected ${numbers[4]} out of 5`
        submit()

    }
})

function submit() {
    submitBtn.addEventListener('click', () => {
        container.classList.add('hidden')
        finalRating.style.display = 'block'
    })
}


