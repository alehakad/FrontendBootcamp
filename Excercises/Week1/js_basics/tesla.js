let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
if (isUSCitizen && boughtTesla){
    let yearsBought = currentYear-yearOfTeslaPurchase
    //console.log("Tesla was bought",yearsBought,"years ago")
    if (yearsBought>=4)
    {
        console.log("Want an upgrade?")
    }
    else console.log("Satisfied with a car?")
} 
else if (boughtTesla) console.log("Would like to move to US?")
else console.log("Interested in buying Tesla for 100500 mlns?") 