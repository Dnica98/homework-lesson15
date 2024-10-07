

const countBE = 45;


const hour = 60;
const day = 1440;
const week = 10080;


if (countBE / week >= 1){
    const remainingWeeks = countBE / week
    const remainingDaysInMinutes = countBE % week

    console.log(`${Math.floor(remainingWeeks)}w ${Math.floor(remainingDaysInMinutes / day)}d`)
    

} else if (countBE / day >= 1) {
    const remainingDays = countBE / day
    const remainingHoursInMinutes = countBE % day

    console.log(`${Math.floor(remainingDays)}d ${Math.floor(remainingHoursInMinutes / hour)}h`)

} else if (countBE / hour >= 1) {
    const remainingHours = countBE / hour
    const remainingMinutes = countBE % hour

    console.log(`${Math.floor(remainingHours)}h ${Math.floor(remainingMinutes )}m`)

} else {
    const remainingHours = countBE / hour
    const remainingMinutes = countBE % hour

    console.log(`${Math.floor(remainingHours)}h ${Math.floor(remainingMinutes)}m`)
}



const shopCase = 'ciorapi'

switch(shopCase) {
    case 'pantaloni':{
        console.log('pantaloni')
        break;
    }
    case 'pulover':{
        console.log('pulover')
        break;
    }
    case 'ciorapi':{
        console.log('ciorapi')
        break;
    }
    case 'pantofi':{
        console.log('pantofi')
        break;
    }
    case 'pantaloni scurti':{
        console.log('pantaloni scurti')
        break;
    }
    case 'top':{
        console.log('top')
        break;
    }
    default: {
        console.log('nu sunt astfel de elemente')
    }
}


const str = 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.'

console.log(str.length)
console.log(str.charAt(str.length - 3))
console.log(str[6])
console.log(str.substring(4, 25))
console.log(str.slice(str.indexOf('since')))
console.log(str.indexOf('below'))
console.log(str.lastIndexOf('chunk'))
console.log(str.replace('is', ' changed'))
console.log(str.split(''))
console.log(str.split(' '))
console.log(str.split('is'))
console.log(str.toUpperCase())
console.log(str.toLocaleLowerCase())