var source1 = $("#animals-template").html();
var template1 = Handlebars.compile(source1);

var source2 = $("#languages-template").html();
var template2 = Handlebars.compile(source2);

const animals = {
  animals: ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"],
};

const languages = {
  languages: ["French", "Spanish", "Togolese", "Javascript", "Uruk"],
};

newItem = template1(animals);
console.log(newItem);
$(".items").append(newItem);

newItem = template2(languages);
$(".items").append(newItem);
