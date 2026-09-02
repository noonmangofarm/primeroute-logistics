// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});


// ================= CLOSE MENU AFTER CLICK =================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });

});


// ================= FOOTER YEAR =================

document.getElementById("year").textContent = new Date().getFullYear();


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const cargoType = document.getElementById("cargoType").value;
    const productDescription = document.getElementById("productDescription").value;
    const packages = document.getElementById("packages").value;
    const weight = document.getElementById("weight").value;
    const dimensions = document.getElementById("dimensions").value;
    const pickup = document.getElementById("pickup").value;
    const destination = document.getElementById("destination").value;
    const shippingMethod = document.getElementById("shippingMethod").value;
    const cargoDate = document.getElementById("cargoDate").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "923191217648";

    const inquiryMessage =
        `*NEW CARGO INQUIRY - PRIME ROUTE LOGISTICS*

*CUSTOMER INFORMATION*
Name: ${name}
Email: ${email}
Phone: ${phone}

*CARGO INFORMATION*
Cargo Type: ${cargoType}
Description: ${productDescription}
Number of Packages: ${packages || "Not Provided"}
Total Weight: ${weight ? weight + " KG" : "Not Provided"}
Dimensions: ${dimensions || "Not Provided"}

*SHIPPING DETAILS*
Pickup Location: ${pickup}
Destination: ${destination}
Shipping Method: ${shippingMethod}
Cargo Ready Date: ${cargoDate}

*ADDITIONAL MESSAGE*
${message || "No additional message"}`;

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(inquiryMessage);

    window.open(whatsappURL, "_blank");

});