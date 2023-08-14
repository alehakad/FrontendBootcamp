// turn our "template" into html
var source = $("#store-template").html();

// compile our template html using handlebars
var template = Handlebars.compile(source);

var classData = {
  classmates: [
    {
      name: "That on gal",
      description: "Always has the ansswer",
      isPresent: true,
    },
    {
      name: "The weird dude",
      description: "Quick with a smile",
      isPresent: true,
    },
    { name: "Taylor", description: "Just Taylor", isPresent: false },
    { name: "Andrew", description: "Just Andrew", isPresent: false },
    { name: "Jurgen", description: "The man", isPresent: true },
  ],
};

newItem = template(classData);
$(".items").append(newItem);
