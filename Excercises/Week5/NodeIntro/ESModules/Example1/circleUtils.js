//ES Modules

const title = "Circle Utility";
const pi = 3.14159;

const calcCircleArea = function (radius) {
  return pi * radius * radius;
};

export { title, pi, calcCircleArea }; //named export

// const calcUtils = { title, pi, calcCircleArea };

// export default calcUtils; // default export
