function showBookingForm(event) {
    document.getElementById("event").value = event;
    document.getElementById("bookingForm").style.display = "block";
}

function bookTickets() {
    const event = document.getElementById("event").value;
    const numTickets = parseInt(document.getElementById("tickets").value);
    
    // You can implement the booking logic here, e.g. sending data to the server
    // For this example, let's just show an alert
    alert(`Successfully booked ${numTickets} tickets for ${event}!`);
    
    // Reset the form
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("tickets").value = "";
    
    return false; // Prevent form submission
}
