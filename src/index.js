import "./main.scss";

const h1 = document.createElement("h1");
h1.textContent = "Hello, World!";
h1.classList.add(
  "text-3xl",
  "font-bold",
  "underline",
  "text-gray-500",
  "m-20",
  "bg-red-900"
);

document.getElementById("root").appendChild(h1);
