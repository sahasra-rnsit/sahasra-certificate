function generateCertificate() {

    var name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರು ನಮೂದಿಸಿ 🙏");
        return;
    }

    var canvas = document.getElementById("certificateCanvas");
    var ctx = canvas.getContext("2d");

    var bgImage = new Image();
    bgImage.src = "certificate.png?v=4"; // versioning to prevent cache issues

    bgImage.onload = function () {

        canvas.width = bgImage.width;
        canvas.height = bgImage.height;

        // Draw certificate background
        ctx.drawImage(bgImage, 0, 0);

        // Draw only name
        ctx.font = "bold 40px Arial";
        ctx.fillStyle = "#1a1a1a";
        ctx.textAlign = "center";
        ctx.fillText(name, canvas.width / 2, canvas.height / 2);

        // Auto-download
        var dataURL = canvas.toDataURL("image/png");
        var link = document.createElement("a");
        link.href = dataURL;
        link.download = name + "_ಸಹಸ್ರ_ಪ್ರಮಾಣಪತ್ರ.png";
        link.click();

        // Motivational popup
        alert(
            "🎉 ನಿಮ್ಮ ಪ್ರಮಾಣಪತ್ರ ಡೌನ್‌ಲೋಡ್ ಆಗಿದೆ! \n\n" +
            "ನಿಮ್ಮ ಶಕ್ತಿ ಮತ್ತು ಶ್ರದ್ಧೆ ಯಾವತ್ತೂ ನಿಲ್ಲಬಾರದು! 💪\n" +
            "ಮುಂದೆ ನಿಮ್ಮ ಕನಸುಗಳನ್ನು ಸಾಧಿಸಲು ಮುಂದೆ ಬನ್ನಿ! 🚀\n\n" +
            "ಧನ್ಯವಾದಗಳು, \nಸಹಸ್ರ ಕನ್ನಡ ಕ್ಲಬ್ - ಆರ್‌ಎನ್‌ಎಸ್‌ಐಟಿ 💛"
        );
    };

    bgImage.onerror = function () {
        alert("certificate.png ಸಿಗಲಿಲ್ಲ 😅");
    };
}