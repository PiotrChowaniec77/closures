const user = () => {
    let userName = "Mieszko"
    let userAge = 16

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ?'Możesz kupić piwo':'Niemożesz kupić piwa'}`)
    }
    return showName
}

const mieszko = user()