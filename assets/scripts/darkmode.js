function darkModeListener(){

  let checkbox = document.querySelector("input[id=toggleSwitch]");
  const body = document.body;
  
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add("dark-mode");
      console.log("Checkbox is checked..");
    } else {
      body.classList.remove("dark-mode");
      console.log("Checkbox is not checked..");
    }
  });
}

export {darkModeListener}
