function generateCertificate() {

    var name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರು ನಮೂದಿಸಿ 🙏");
        return;
    }

    var canvas = document.getElementById("certificateCanvas");
    var ctx = canvas.getContext("2d");

    var bgImage = new Image();
    bgImage.src = "certificate.png?v=7";

    bgImage.onload = function () {

        canvas.width = bgImage.width;
        canvas.height = bgImage.height;

        // Draw background
        ctx.drawImage(bgImage, 0, 0);

        // Start with smaller safe font
        let fontSize = 42;
        ctx.font = "bold " + fontSize + "px Times New Roman";

        // Auto shrink for long names
        while (ctx.measureText(name).width > canvas.width * 0.60) {
            fontSize--;
            ctx.font = "bold " + fontSize + "px Times New Roman";
        }

        ctx.fillStyle = "#000";
        ctx.textAlign = "center";

        // LOWERED POSITION (Perfect Line Alignment)
        ctx.fillText(name, canvas.width / 2, canvas.height * 0.695);

        // Download
        var dataURL = canvas.toDataURL("image/png");
        var link = document.createElement("a");
        link.href = dataURL;
        link.download = name + "_ಸಹಸ್ರ_ಪ್ರಮಾಣಪತ್ರ.png";
        link.click();

        alert(
            "🎉 ನಿಮ್ಮ ಪ್ರಮಾಣಪತ್ರ ಡೌನ್‌ಲೋಡ್ ಆಗಿದೆ! \n\n" +
            "ನಿಮ್ಮ ಶಕ್ತಿ ಮತ್ತು ಶ್ರದ್ಧೆ ಯಾವತ್ತೂ ನಿಲ್ಲಬಾರದು! 💪\n" +
            "ಮುಂದೆ ನಿಮ್ಮ ಕನಸುಗಳನ್ನು ಸಾಧಿಸಲು ಮುಂದೆ ಬನ್ನಿ! 🚀\n\n" +
            "ಧನ್ಯವಾದಗಳು,\nಸಹಸ್ರ ಕನ್ನಡ ಕ್ಲಬ್ - ಆರ್‌ಎನ್‌ಎಸ್‌ಐಟಿ 💛"
        );

    };

    bgImage.onerror = function () {
        alert("certificate.png ಸಿಗಲಿಲ್ಲ 😅");
    };
}