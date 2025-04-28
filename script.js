document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const destination = document.querySelector('input[type="text"]').value;
  const serviceType = document.getElementById("serviceType").value;
  const rideTime = document.getElementById("rideTime").value;

  // Simple price calculation (customize this later!)
  const price = calculatePrice(serviceType, destination);

  // Check working hours (example logic)
  const date = new Date();
  const hour = date.getHours();
  const isWeekend = [0, 6].includes(date.getDay()); // 0=Sunday, 6=Saturday

  if (
    (!isWeekend && (hour < 8 || hour >= 17)) ||
    (isWeekend && (hour < 9 || hour >= 16))
  ) {
    alert(
      "⚠️ Unavailable time slot. Our hours: Weekdays 8AM-5PM, Weekends 9AM-4PM."
    );
    return;
  }

  // Display price
  document.getElementById("priceResult").innerHTML = `
        <h3>💰 Estimated Price: R35${price}</h3>
        <p>🕒 Your booking for ${destination} at ${rideTime} is being processed!</p>
    `;
});

function calculatePrice(service, destination) {
  // Add your pricing logic here (distance-based, etc.)
  return Math.floor(Math.random() * 500) + 100; // Random placeholder
}

// Contact button action
document.querySelector(".contact-btn").addEventListener("click", function () {
  window.location.href = "tel:+27649357895";
});
