(function () {
  const script = document.currentScript;
  const color = script.getAttribute("data-color") || "#0077FF";
  const position = script.getAttribute("data-position") || "right";
  const message = script.getAttribute("data-message") || "Contact Us";
  const link = script.getAttribute("data-link") || "mailto:you@example.com";

  const button = document.createElement("div");
  button.innerText = message;
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style[position] = "20px";
  button.style.background = color;
  button.style.color = "#fff";
  button.style.padding = "12px 18px";
  button.style.borderRadius = "50px";
  button.style.fontSize = "16px";
  button.style.fontFamily = "sans-serif";
  button.style.cursor = "pointer";
  button.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  button.style.zIndex = "9999";
  button.style.transition = "opacity 0.3s ease";
  button.addEventListener("mouseenter", () => (button.style.opacity = "0.8"));
  button.addEventListener("mouseleave", () => (button.style.opacity = "1"));

  button.onclick = () => {
    window.open(link, "_blank");
  };

  document.body.appendChild(button);
})();
