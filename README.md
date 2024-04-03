# MORSE CODE TRANSLATOR

## Hosting

- https://precious-puppy-4bc93a.netlify.app/

## Known Issues

- The speed that is played for the light and sound together is different to the speed that both of them play individually. 
- Need to disable the buttons when there isn’t valid input

## MVP

- User interface that allows the user to either input some English text or some Morse Code
- Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)
- Create JS functions that would allow the user to:
    * translate their English text into Morse Code
    * Morse Code into English text

## Design Goals 

- Accessible & responsive video game inspired design
- Jest testing to ensure correct translation

## Features

- English in Roman Script to Morse Code Translator
- Click the triangle to flip the input and output
- Jest Testing
- Additional Sound and Light translation, can play synchronous or async
- Translation happens as soon as the letter is typed

## Future Goals

- Sync up play speeds
- Add in a dial (modelled after old-school radio) that modulates the speed

## Struggles

- Syncronising the light and speed to play in sync was a bit confusing
- I settled on this implementation where the audio is a Promise that waits until playing through to be resolved
```java
const playPromise = (audio) =>
  new Promise((resolve) => {
    audio.addEventListener("ended", resolve);
    audio.play();
  });

export const lightAndSoundLogic = async (value) => {
  console.log("reached light and sound logic");

  for (const char of value) {
    if (dom.sharedState.stopFlag === true) {
      return;
    } else {
      if (char === "-") {
        dom.box.style.backgroundColor = "white";
        await delay(300);
        dom.box.style.backgroundColor = "black";
        await playPromise(mySoundDah);
        await delay(50);
      } else if (char === ".") {
        dom.box.style.backgroundColor = "white";
        await delay(100);
        dom.box.style.backgroundColor = "black";
        await playPromise(mySoundDit);
        await delay(50);
      } else if (char === " ") {
        dom.box.style.backgroundColor = "black";
        await delay(250);
      } else if (char === "/") {
        dom.box.style.backgroundColor = "black";
        await delay(400);
      }
    }
  }
};
```
