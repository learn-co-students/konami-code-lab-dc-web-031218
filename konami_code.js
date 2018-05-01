const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let currentIndex = 0;
  // calls 'KeyboardEvent' => keydown?
  document.body.addEventListener('keydown', function (event) {
    if (code[currentIndex] === parseInt(event.detail || event.which)) {
      console.log("got a hit!:", event.key);
      currentIndex++;
      console.log("currentIndex after hit:", currentIndex, "/", code.length);
      if (currentIndex === (code.length)) {
        // debugger;
        alert("Congrats on getting the Konami Code!");
        currentIndex = 0;
      };
    } else {
      currentIndex = 0;
    };
  });
  // calls window.alert
}
