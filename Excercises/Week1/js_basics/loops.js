// Exercise 1
const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
  newMan = {
    name: names[i],
    age: ages[i],
  };
  people.push(newMan);
}

console.log(people);

// Exercise 2
for (let p of people) {
  console.log(`${p.name} is ${p.age} years old`);
}

// Exercise 3
const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];

for (let i in posts) {
  let post = posts[i];
  if (post.id == 2) {
    posts.splice(i, 1);
    break;
  }
}

console.log(posts);

// Excercise 4
const posts4 = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];

for (let post of posts4) {
  if (post.id == 2) {
    let postComments = post.comments;
    for (let i in postComments) {
      if (postComments[i].id == 3) {
        postComments[i].id == 3;
        // let i = postComments.indexOf(comment);
        postComments.splice(i, 1);
        break;
      }
    }
  }
}

console.log(posts4);
console.log(posts4[1].comments);
