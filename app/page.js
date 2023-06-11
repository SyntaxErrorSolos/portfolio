"use client";
import { useEffect } from "react";
import Image from "next/image";
import Typed from "typed.js";

export default function Home() {
  useEffect(() => {
    const github = document.getElementById("github");
    const clickme = document.getElementById("clickme");
    const youtube = document.getElementById("youtube");
    let presses = 0;
    // Event listener for button click
    clickme.addEventListener("click", function () {
      // Increment the number of button presses
      presses += 1;

      // Update the button text with the current number of presses
      clickme.innerText = `You've pressed this button ${presses} times. (Get to 99!)`;

      if (presses === 99) {
        // Secret mode unlocked
        clickme.innerText = `Woah! You've unlocked the secret mode. Press again!`;
      }

      if (presses === 100) {
        // Change background on the 100th press
        document.body.style.backgroundImage =
          "linear-gradient(to right, #FF0000, #0000FF)";
        clickme.innerText =
          "You've pressed the button 100 times! Press again to revert the change";
      }

      if (presses === 101) {
        clickme.innerText = "Hmm wait, that didn't work? Try again?";
      }

      if (presses === 102) {
        clickme.innerText = "Uh oh...What's happening?";
        presses += 0;
        clickme.style.display = "none";

        // Create and style the hacked message
        const hacked = document.createElement("div");
        hacked.style.backgroundColor = "#000000";
        hacked.style.color = "green";
        hacked.style.bottom = "10px";
        hacked.id = "hacked";
        hacked.style.fontFamily =
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
        hacked.style.position = "fixed";
        hacked.style.top = "50%";
        hacked.style.left = "50%";
        hacked.style.transform = "translate(-50%, -50%)";
        hacked.style.filter = "none";
        hacked.style.zIndex = "10";
        hacked.style.width = "800px";
        hacked.style.textAlign = "center";

        // Append the hacked message to the body
        document.body.appendChild(hacked);

        // Initialize Typed.js for typed effect
        const typedBegin = new Typed("#hacked", {
          strings: [
            "I am the hacker! I have removed the color! Fight back if you can :)",
            "<span style='color: red'>This may trigger epilepsy! Please reload if you encounter any symptoms</span>",
            "Type $start to begin your journey",
          ],
          typeSpeed: 50,
        });

        // Set the background to binary pattern
        document.body.style.backgroundColor = "#000000";
        function generateBinaryBackground() {
          const binaryPattern = generateBinaryPattern(); // Generate a binary pattern
          const bodyElement = document.body;
          bodyElement.style.backgroundImage = `url(${binaryPattern})`;
        }

        function generateBinaryPattern() {
          const binaryWidth = 10; // Width of each binary digit
          const binaryHeight = 10; // Height of each binary digit
          const numRows = Math.ceil(window.innerHeight / binaryHeight); // Number of rows based on window height
          const numCols = Math.ceil(window.innerWidth / binaryWidth); // Number of columns based on window width

          const canvas = document.createElement("canvas");
          canvas.width = numCols * binaryWidth;
          canvas.height = numRows * binaryHeight;
          const context = canvas.getContext("2d");

          // Generate binary pattern
          for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
              const binaryValue = Math.round(Math.random()); // Generate random binary value (0 or 1)
              const x = col * binaryWidth;
              const y = row * binaryHeight;
              context.fillStyle = binaryValue === 0 ? "#000" : "#FFF"; // Set color based on binary value
              context.fillRect(x, y, binaryWidth, binaryHeight);
            }
          }

          return canvas.toDataURL(); // Convert canvas to base64-encoded image URL
        }
        generateBinaryBackground();

        // Create and style the input element
        const input = document.createElement("input");
        input.style.position = "fixed";
        input.style.top = "calc(50% + 100px)";
        input.style.left = "50%";
        input.style.transform = "translateX(-50%)";
        input.style.borderColor = "#FFFFFF";
        input.style.backgroundColor = "#FFFFFF";
        input.id = "input";
        input.style.zIndex = "10";

        // Event listener for Enter key press
        input.addEventListener("keypress", function (event) {
          let solvedQuestion1 = false;
          let solvedQuestion2 = false;
          let solvedQuestion3 = false;
          let solvedQuestion4 = false;
          if (event.key === "Enter") {
            if (input.value === "$start") {
              if (solvedQuestion1 === true) {
                hacked.textContent = "You've already started the game.";
              }
              if(solvedQuestion2 && solvedQuestion3 && solvedQuestion4 === true) {
                return;
              }
              const findTheButton = document.createElement("button");
              const typedQuestion2 = new Typed("#hacked", {
                strings: [
                  "Loading the server...",
                  "Loading... 10%",
                  "Loading... 20%",
                  "Loading... 30%",
                  "Loading... 40%",
                  "Loading... 50%",
                  "Loading... 60%",
                  "Loading... 70%",
                  "Loading... 80%",
                  "Loading... 90%",
                  "Loading... 100%",
                  "Loaded the game. Welcome :)",
                  "Your first challenge? Find the button. Enjoy :)",
                ],
                typeSpeed: 50,
                loop: false,
                onComplete: function () {
                  document.body.appendChild(findTheButton);
                  findTheButton.style.zIndex = "9999";
                  findTheButton.style.backgroundColor = "yellow";
                  findTheButton.style.opacity = "0.5";
                  findTheButton.style.position = "absolute";
                  findTheButton.style.height = `${Math.floor(
                    Math.random() * 100
                  )}px`;
                  findTheButton.style.width = `${Math.floor(
                    Math.random() * 100
                  )}px`;
                  findTheButton.style.top = `${Math.floor(
                    Math.random() * 100
                  )}px`;
                  findTheButton.style.left = `${Math.floor(
                    Math.random() * 100
                  )}px`;
                  findTheButton.innerText = ".";
                  document.body.style.filter = "blur(5px)";
                },
              });
              input.value = "";
              solvedQuestion1 = true;
              findTheButton.addEventListener("click", function () {
                document.body.style.filter = "none";
                findTheButton.remove();
                const typedQuestion2 = new Typed("#hacked", {
                  strings: ["Well done, what is 50 + 16?"],
                });
              });
            } else if (input.value === "66") {
              if (solvedQuestion2 === true) {
                hacked.textContent = "You've already solved question 2!";
              }
              if(solvedQuestion1 && solvedQuestion3 && solvedQuestion4 === true) {
                return;
              }
              const typedQuestion2 = new Typed("#hacked", {
                strings: [
                  "Well done, I expect nothing more than a genius. But now, let's stop playing around, shall we?",
                  "<span style='color: red'>This may trigger epilepsy! Please reload if you encounter any symptoms</span>",
                  "Decode the following text from binary to ASCII: 01010010 01000111 01000010 00100000 01110011 01110100 01100001 01101110 01100100 01110011 00100000 01100110 01101111 01110010 00100000 01110010 01100101 01100100 00101100 00100000 01100111 01110010 01100101 01100101 01100101 01101110 00100000 01100001 01101110 01100100 00100000 01100010 01101100 01110101 01100101 00100000 01110010 01101001 01100111 01101000 01110100 00111111 00100000 01000001 01101110 01111001 01110111 01100001 01111001 01110011 00101100 00100000 00110110 00110110 00100000 01110100 01101000 01110010 01100101 01100101 00100000 01110100 01101001 01101101 01100101 01110011 00100000 01110011 01110011 01101000 01101111 01110101 01101100 01100100 01100100 00100000 01100100 01101111 00100000 01110100 01101000 01100101 00100000 01101010 01101111 01100010 ",
                ],
              });

              input.value = "";
              solvedQuestion2 = true;
            } else if (
              input.value ===
              "RGB stands for red, green and blue right? Anyways, 66 three times should do the job"
            ) {
              let solvedQuestion3 = true;
              if(solvedQuestion1 && solvedQuestion2 && solvedQuestion4 === true) {
                return;
              }
              const typedQuestion3 = new Typed("#hacked", {
                strings: [
                  "Very impressive, But now prepare to be infected!",
                  "<span style='color: red'>This may trigger epilepsy! Please reload if you encounter any symptoms</span>",
                  "My goons will attack you. You have 100 health. Type $regen to regenerate your health. Survive for 5 minutes. You'll escape if you're smart enough.",
                ],
                onComplete: function () {
                  let health = 100;
                  hacked.textContent = `Current health: ${health}`;
                  if (input.value === "$regen") {
                    if (health != 100) {
                      health += 5;
                      hacked.textContent = `Current health: ${health}`;
                    } else return;
                  }
                  const intervalId = setInterval(() => {
                    health -= 5;
                    hacked.textContent = `Current health: ${health}`;
                    if (health <= 0) {
                      const YouPassed = new Typed("#hacked", {
                        strings: [
                          "Congrats. Time for the final test.",
                          "Fill in the blanks to recover your color: rgb(x, x, x)",
                          "Answer like this: 12, 12, 12",
                          "rgb(x, x, x)",
                        ],
                        onComplete: function reload() {
                          solvedQuestion3 = true;
                        },
                      });
                      clearInterval(intervalId);
                    }
                  }, 5000); // 5000 milliseconds = 5 seconds
                },
              });
            } else if (input === "66, 66, 66") {
              let solvedQuestion4 = true;
              if(solvedQuestion4 === true) return;
              if(solvedQuestion1 && solvedQuestion3 && solvedQuestion2 === true) {
                return;
              }
              const typedQuestion4 = new Typed("#hacked", {
                strings: [
                  "Well done. Enjoy your colors."
                ],
                onComplete: function() {
                  window.location.reload()
                }
              })
            }
          }
        });

        // Append the input element to the body
        document.body.appendChild(input);
      }
    });
    /*
      let fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.style.display = "none";
      fileInput.accept = "audio/*"

      fileInput.addEventListener("change", function (event) {
        let selectedFile = event.target.files[0];
        let fileURL = URL.createObjectURL(selectedFile);
        let sound = new Howl({
          src: [fileURL],
          html5: true
        });
        
        sound.play();
      });

      document.body.appendChild(fileInput);
      fileInput.click();
      */

    github.addEventListener("click", function () {
      window.open("https://github.com/SyntaxErrorSolos");
    });
    youtube.addEventListener("click", function () {
      window.open("https://youtube.com/@AbacusOnYouTube");
    });

    return () => {};
  }, []);
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="flex-grow flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold text-[#CCCCCC] text-center mb-4">
            Abacus
          </h1>
          <p className="text-[#CCCCCC] text-2xl font-semibold text-center mb-4">
            A backend and frontend developer from Pakistan
          </p>
          <div className="flex justify-center space-x-4">
            <div>
              <Image
                src="/Github.svg"
                alt="My Github"
                className="cursor-pointer w-16 h-16"
                id="github"
                width={80}
                height={80}
                priority
              />
            </div>
            <div>
              <Image
                src="/Youtube.svg"
                alt="My YouTube"
                className="cursor-pointer w-16 h-16"
                id="youtube"
                width={80}
                height={80}
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-10">
          <button
            className="bg-[#CCCCCC] rounded-lg py-2 px-5 font-mono hover:bg-black hover:text-white transition-all"
            id="clickme"
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}
