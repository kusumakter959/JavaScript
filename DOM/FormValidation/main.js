function validateForm() {
  const form = document.forms["myForm"];
  const value = form["fname"].value;
  if (value === "") {
    alert("You Must type name");

    return false;
  }
}


