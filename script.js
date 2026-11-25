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
        const targetDeliveryDate = getValue("targetDeliveryDate");
        const message = getValue("message");

        const whatsappNumber = "971507728742";

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
Cargo Ready Date: ${cargoDate || "Not Provided"}
Target Delivery Date: ${targetDeliveryDate || "Not Provided"}

*ADDITIONAL MESSAGE*
${message || "No additional message"}`;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(inquiryMessage)}`;

        const whatsappWindow = window.open(whatsappURL, "_blank");

        if (whatsappWindow) {
            whatsappWindow.opener = null;
            contactForm.reset();
        } else {
            alert("Your browser blocked the WhatsApp window. Please allow pop-ups and try again. Your information has not been cleared.");
        }
    });
}

// ================= COUNTRY SELECTION =================

const countryCards = document.querySelectorAll(
    ".country-card[data-country]"
);

const destinationField = document.getElementById("destination");

countryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        if (destinationField) {
            destinationField.value = this.dataset.country;
        }

    });

});

// ================= AUTOMATIC SHIPPING METHOD SELECTION =================

const serviceTriggers = document.querySelectorAll("[data-shipping]");

serviceTriggers.forEach(function (trigger) {

    trigger.addEventListener("click", function () {

        const serviceField = document.getElementById("shippingMethod");
        const selectedService = this.dataset.shipping;

        if (!serviceField) return;

        const matchingOption = Array.from(serviceField.options)
            .find(option => option.value === selectedService);

        if (matchingOption) {
            serviceField.value = selectedService;
        }

    });

});

// ================= SERVICE PAGE QUOTATION SELECTION =================

(function () {

    const params = new URLSearchParams(window.location.search);

    const requestedService = params.get("service");

    const serviceField = document.getElementById("shippingMethod");

    if (!requestedService || !serviceField) return;

    const matchingOption = Array.from(serviceField.options).find(
        option => option.value === requestedService
    );

    if (matchingOption) {
        serviceField.value = requestedService;
    }

})();
