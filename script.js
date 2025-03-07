function volume_sphere() {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the radius input value
  const radiusInput = document.getElementById('radius').value;

  // Convert the input to a number
  const radius = parseFloat(radiusInput);

  // Validate the input
  if (isNaN(radius) || radius < 0) {
    // If the input is invalid, set the volume to 'NaN'
    document.getElementById('volume').value = 'NaN';
  } else {
    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round the volume to 4 decimal places
    const roundedVolume = volume.toFixed(4);

    // Display the calculated volume in the volume field
    document.getElementById('volume').value = roundedVolume;
  }
}

// Attach the volume_sphere function to the form's submit event
window.onload = () => {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};