 document.addEventListener("DOMContentLoaded", () => {
 // Tooltip logic
  document.querySelectorAll(".mobile1").forEach(box => {
    let timeout;
    const tip = box.querySelector(".side-text");
    if (!tip) return;

    box.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
      tip.style.opacity = "1";
      tip.style.transform = "translateX(0) translateY(-50%)";
      tip.style.visibility = "visible";
      tip.style.pointerEvents = "auto";
    });

    box.addEventListener("mouseleave", () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        tip.style.opacity = "0";
        tip.style.transform = "translateX(8px) translateY(-50%)";
        tip.style.visibility = "hidden";
        tip.style.pointerEvents = "none";
      }, 2000);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const optionsContainer = document.getElementById("clickOptions");
    if(optionsContainer ) {
        const phoneNumber = "254706935999";
        const phoneNumberIntl = "+254706935999";

        //links
        const simCall = `<a href="tel:${phoneNumberIntl}">Call with SIM</a>`;
        /*const whatsappCall = `<a href="whatsapp://call?number=${phoneNumber}">Call with WhatsApp</a>`;*/ // can't use this because whatsapp does not expose a public URL scheme for"directly starting a voice/video call."
        const whatsappChat = `<a href="https://wa.me/${phoneNumber}?text=Hello%20I%20saw%20your%20portfolio" target="_blank">Open WhatsApp Chat</a>`;

        const isMobile = /Mobi|Android/i.test(navigator.userAgent);

        if(isMobile) {
            optionsContainer.innerHTML = `${simCall} | ${whatsappCall} | ${whatsappChat}`;
        } else {
           optionsContainer.innerHTML = `${whatsappChat}`;
        }
    }
});