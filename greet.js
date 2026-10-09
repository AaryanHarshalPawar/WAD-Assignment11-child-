// child module - greeting utility used by the master project
function greet(name) {
  return "Hello, " + name + "! Welcome to WAD Experiment 11.";
}
console.log(greet("Aaryan Pawar"));
module.exports = greet;
