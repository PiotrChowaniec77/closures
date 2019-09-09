const clock = () => {
    let counter = 0
    function count() {
        document.body.textContent = `Na stronie jesteś ${counter} sekund`
        counter++
    }
    return count
}

const count = clock()

setInterval(count, 1000)



const user = () => {
    let userName = "Mieszko"
    let userAge = 16

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ?'Możesz kupić piwo':'Niemożesz kupić piwa'}`)
    }
    return showName
}

const mieszko = user()