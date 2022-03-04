const countries = require('./countries.json')



const userFirstName = [
    'oscar', 'aram', 'julio', 'cesar', 'juan', 'pedro', 'gerardo',
    'violeta', 'luna', 'kenia', 'diana', 'dania', 'jessana'
]

const userLastName = [
    'santacruz', 'perez', 'hurtado', 'rodriguez', 'lopez', 'sanchez', 'cuevas', 'rivera', 'casas'
]

const userName = (firstName, age) => {
    const birthYear = 122 - age
    const userName = `${firstName}-${birthYear}`
    return userName
}

const userAge = Math.floor(Math.random() * 70) + 18

const userWeight = Math.floor(Math.random() * 50) + 40

const userHobbies = [
    'correr', 'nadar', 'leer', 'tocar el piano', 'senderismo', 'viajar', 'ver television', 'ir al cine', 'caminar', 'jugar video juegos', 'jardineria'
]

const userCellphoneNumber = () => {
    const ladaNumber = Math.floor(Math.random() * 999)
    const threeDigits = Math.floor(Math.random() * 999)
    const fourDigits = Math.floor(Math.random() * 999)
    const fullCellNumber = `(${ladaNumber}) ${threeDigits}-${fourDigits}`
    return fullCellNumber
}

const userEmail = (firstName, lastName) => {
    const emailProvider = [
        'test.com', 'hotmail.com', 'gmail.com', 'yahoo.com', 'ejemplo.com', 'miempresa.com', 'empresa.com', 'emprendimiento.com'
    ]
    const fullEmail = `${firstName}.${lastName}@${emailProvider[Math.floor(Math.random()*emailProvider.length)]}`
    return fullEmail
}


// Adress
const userCountry = () => {
    const country = countries[Math.floor(Math.random() * countries.length)].name
    return country
}




const randomUser = () => {
    const firstName = userFirstName[Math.floor(Math.random() * userFirstName.length)]
    const lastName = userLastName[Math.floor(Math.random() * userLastName.length)]
    const age = userAge
    const username = userName(firstName, age)
    const cellphone = userCellphoneNumber()
    const email = userEmail(firstName, lastName)
    const country = userCountry()
    const weight = userWeight
    const hobbies = userHobbies[Math.floor(Math.random() * userHobbies.length)]
    return new Array(username, firstName, lastName, email, cellphone, country, age, weight, hobbies)

}
console.log(randomUser())


module.exports = { randomUser }