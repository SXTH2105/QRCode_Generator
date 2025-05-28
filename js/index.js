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
    
    qrImage.onload = function() {
        downloadBtn.style.display = "inline"
    };

    downloadBtn.onclick = function () {
        fetch(apiURL)
            .then(response => response.blob())
            .then(blob => {
                const blobURL = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = blobURL;
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(blobURL);
            });
    };


}