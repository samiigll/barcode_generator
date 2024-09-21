let input = document.getElementById("input");
let btn = document.getElementById("btn-barcode-generator");

btn.addEventListener("click", () => {
  JsBarcode("#barcode", input.value, {
    format: "CODE128",
    displayValue: true,
    fontSize: 20,
    lineColor: "#000",
  });
});

window.onload = (event) => {
  input.value = "";
};
