function generatorQRCode() {
    const text =
    document.getElementById("text").value.trim();
    const qrImage =
    document.getElementById("qrImage");

    if (text === "") {
        alert("Please enter some text or URL!");
        return;
    }
    const apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;

    qrImage.src = apiURL;

}