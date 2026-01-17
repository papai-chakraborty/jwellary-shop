function openWhatsApp() {
    let phone = "918391052145";   // Your WhatsApp number
    let message = "Hello, I want to order jewellery from your shop.";
    
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    
    window.open(url, "_blank");
}
