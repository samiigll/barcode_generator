let input = document.getElementById("input");
let btn = document.getElementById("btn-barcode-generator");
let resetBtn = document.getElementById("btn-reset"); // Reset düğmesini seç

btn.addEventListener("click", () => {
  JsBarcode("#barcode", input.value, {
    format: "CODE128",
    displayValue: true,
    fontSize: 20,
    lineColor: "#000",
  });
});

resetBtn.addEventListener("click", () => {
  input.value = ""; // Girdi alanını temizle
  document.getElementById("barcode").innerHTML = ""; // Barcode SVG elementini temizle
});

window.onload = (event) => {
  input.value = "";
};
