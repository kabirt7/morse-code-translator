const soundLogic = (str) => {
  for (let x of str) {
    if (x === "-") {
      console.log("mySoundDah.play()");
    } else if (x === ".") {
      console.log("mySoundDit.play()");
    } else if (x === " ") {
      setTimeout(() => console.log("break"), 1000);
    }
  }
};
