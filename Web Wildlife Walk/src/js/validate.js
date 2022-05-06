//Borrowed from elsewhere

function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
  let valid = true;
  let lat = document.getElementById("latitude").value.trim();
  let long = document.getElementById("longitude").value.trim();

  if (parseFloat(lat) != lat || lat < -90 || lat > 90) {
    valid = false;
    document.getElementById("errorLat").innerHTML =
      "&nbsp;must be a valid Latitude (-90 to 90)";
  } else {
    document.getElementById("errorLat").innerHTML = "";
  }
  if (parseFloat(long) != long || long < -180 || long > 180) {
    valid = false;
    document.getElementById("errorLong").innerHTML =
      "&nbsp;must be a valid Longitude (-180 to 180)";
  } else {
    document.getElementById("errorLong").innerHTML = "";
  }
  return valid;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
