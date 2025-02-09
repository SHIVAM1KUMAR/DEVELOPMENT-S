function showContent(subject) {
    // Hide all sections
    document.querySelectorAll('.study-content').forEach(content => {
        content.style.display = "none";
    });

    // Show selected section
    document.getElementById(subject + "-content").style.display = "block";
}


// 




// Testimonial Submission
document.getElementById("testimonialForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let userMessage = document.getElementById("userMessage").value.trim();

    if (username === "" || userMessage === "") {
        alert("Please fill in both fields.");
        return;
    }

    let newTestimonial = document.createElement("div");
    newTestimonial.classList.add("testimonial");
    newTestimonial.innerHTML = `<p>${userMessage}</p><h4>${username}</h4>`;

    let testimonialList = document.getElementById("testimonial-list");
    testimonialList.prepend(newTestimonial);

    document.getElementById("username").value = "";
    document.getElementById("userMessage").value = "";

    newTestimonial.style.opacity = "0";
    setTimeout(() => {
        newTestimonial.style.opacity = "1";
        newTestimonial.style.transform = "translateY(0)";
    }, 100);
});

// Enquiry Submission
document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let enquiryName = document.getElementById("enquiryName").value.trim();
    let enquiryMessage = document.getElementById("enquiryMessage").value.trim();

    if (enquiryName === "" || enquiryMessage === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Thank you, ${enquiryName}! Your enquiry has been received.`);

    document.getElementById("enquiryName").value = "";
    document.getElementById("enquiryMessage").value = "";
});
