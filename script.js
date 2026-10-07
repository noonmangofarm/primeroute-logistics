// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
}

// ================= CLOSE MENU AFTER CLICK =================

const navLinks = document.querySelectorAll(".navbar a");

if (navLinks.length > 0 && navbar) {
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    });
}

// ================= FOOTER YEAR =================

const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const getValue = (id) => {
            const el = document.getElementById(id);
            return el ? el.value.trim() : "";
        };

        const name = getValue("name");
        const email = getValue("email");
        const phone = getValue("phone");
        const cargoType = getValue("cargoType");
        const productDescription = getValue("productDescription");
        const packages = getValue("packages");
        const weight = getValue("weight");
        const dimensions = getValue("dimensions");
        const pickup = getValue("pickup");
        const destination = getValue("destination");
        const shippingMethod = getValue("shippingMethod");
        const cargoDate = getValue("cargoDate");
        const message = getValue("message");

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

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(inquiryMessage)}`;

        window.open(whatsappURL, "_blank");
        contactForm.reset();
    });
}
