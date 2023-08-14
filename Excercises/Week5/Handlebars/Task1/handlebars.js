// turn our "template" into html
var source = $("#store-template").html();

// compile our template html using handlebars
var template = Handlebars.compile(source);

var items = [
  { item: "cheese", price: 15 },
  { item: "arak", price: 68 },
  { item: "hummus", price: 15 },
  { item: "pita", price: 5 },
];

for (let itm of items) {
  newItem = template({ item: itm["item"], price: itm["price"] });
  $(".items").append(newItem);
}
