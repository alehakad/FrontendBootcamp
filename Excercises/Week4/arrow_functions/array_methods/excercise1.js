const objArr = [{name:"A",age:12},{name:"B",age:25},{name:"C",age:45}]

// filter - returns new array
console.log(objArr.filter(r=>r.age<28))


let vegetables = [
    { name: "Eggplant", color: "purple" },
    { name: "Carrot", color: "orange" },
    { name: "Squash", color: "orange" },
    { name: "Tomatoe", color: "red" },
    { name: "Onion", color: "white" },
    { name: "Sweet Potato", color: "orange" }]

console.log(vegetables.filter(a=>a.color === "orange"))

// or
function filterAge(p){return p.age<28}

console.log(objArr.filter(filterAge))
console.log(objArr.filter(filterAge) == objArr.filter(r=>r.age<28))

// forEach - returns nothing
objArr.forEach(r=>console.log(`${r.name}'s age is ${r.age}`))

let people = [
    { salary: 1300, goodPerformance: false },
    { salary: 1500, goodPerformance: true },
    { salary: 1200, goodPerformance: true },
    { salary: 1700, goodPerformance: false },
    { salary: 1600, goodPerformance: true },
]

people.forEach(p=>p.goodPerformance ? p.salary+=300 : "")
people.forEach(p => console.log(p.salary)) 



// map - returns modified array
const ages = objArr.map(r =>`Year: - ${new Date().getFullYear()-r.age}`)
console.log(ages)

let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]

messagesLow = messagesFromDad.map(r=>r.toLowerCase())

console.log(messagesLow)

newMsgs = messagesFromDad.map(u=>{return {"1l":u.charAt(0),"2l":u.charAt(1)}})
console.log(newMsgs)

// find - finds the 1 matchings or undefined
vegetableO = vegetables.find(r=>r.name.charAt(0) == "O")
console.log(vegetableO)

let posts = [
    {
        id: 0, text: "I'm not here",
        comments: [{ id: 0, text: "support that" }]
    },
    {
        id: 1, text: "Find me",
        comments: [
            { id: 0, text: "here I am" },
            { id: 1, text: "rock you like a hurricane" },
            { id: 2, text: "dum dum" }]
    },
    {
        id: 2, text: "Where's waldo anyway",
        comments: [
            { id: 0, text: "who's waldo" },
            { id: 1, text: "he's called Effi" }]
    },
    {
        id: 3, text: "Poof",
        comments: [{ id: 0, text: "like magic" }]
    }
]

function findCommentByID(postID, commentID){
    return posts.find(p=>p.id===postID).comments.find(p=>p.id===commentID)
}

console.log(findCommentByID(1,0))
// some - returnes true or false if one or more fit condition
console.log(people.some(p=>p.goodPerformance))

// every - true if all fit condition
console.log(people.every(p=>p.goodPerformance))

let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]

console.log(movies.some(f=>f.studio==="Marvel") ? "Let’s go watch some movies" : "Let’s stay home")
console.log(movies.every(f=>f.year>2020) ? "Futuristic stuff" : "Yawn")

//chaining - two methods together
peopleR = people.filter(p=>p.goodPerformance).map(p=>p.salary)
console.log(peopleR)


function test(x){
    const a = x+1 //const is created within function scope
    console.log(a)
}

test(1)
test(2)