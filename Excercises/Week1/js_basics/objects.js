// Excercise 1
const p1 = {
  name: "p1",
  age: 23,
  city: "SPB",
};
const p2 = {
  name: "p2",
  age: 25,
  city: "NY",
};
if (p1.age == p2.age && p1.city == p2.city)
  console.log("Jill wanted to date Robert");
else if (p1.city != p2.city)
  console.log("“Jill wanted to date Robert, but couldn’t”");

// Excercise 2
const book1 = {
  title: "Title1",
  author: "Man1",
};
const book2 = {
  title: "Title2",
  author: "Man2",
};
const library = {
  books: [book1, book2],
};

console.log(library);
