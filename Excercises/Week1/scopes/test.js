const isEnough = false;

const makeEnough = function () {
  for (let i = 0; i < 10; i++) {
    if (i > 5) {
      isEnough = true;
    }
  }
};

makeEnough();
if (isEnough) {
  console.log("Finally, sheesh");
} else {
  console.log("Here we go again...");
}

// What will console log?
// Will there be an error?
// Why?
// Will something be undefined?
// Why?
// To what scope does each variable belong?
// Global or local? If local, to which specifically?
