// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, menuClose } from "./functions.js";
// import { formQuantity } from "./forms/forms.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const spollerLabels = document.querySelectorAll("[data-label]");

spollerLabels.forEach((spollerLabel, index, labels) => {
   spollerLabel.addEventListener("click", () => {
      spollerLabel.classList.add("_active-label");

      Array.from(labels).filter((label, labelIndex) => {
         menuClose();

         label.addEventListener("click", () => {
            if (labelIndex !== index) {
               spollerLabel.classList.remove("_active-label");
            }
         });
      });
   });
});

const addKassirBtn = document.querySelector("[data-add-kassir]");
try {
   addKassirBtn.addEventListener("click", () => {
      menuClose();
   });
} catch {
   console.log("oops");
}

// login
try {
   const positions = document.querySelectorAll("[data-value]");
   positions.forEach((position) => {
      position.addEventListener("click", () => {
         if (position.dataset.value === "admin") {
            document.querySelector("[data-login]").href = "admin-panel.html";
         } else if (position.dataset.value === "kassir") {
            document.querySelector("[data-login]").href = "kassir-panel.html";
         } else {
            if (document.querySelector("[data-login]")) {
               document.querySelector("[data-login]").href = "#";
            }
         }
      });
   });
} catch (err) {
   console.log("Imitation");
}

// кол-во билетов
// let ticketQuantity = document.querySelector("[data-quantity-value]").value;
// let quantity = 0;
// quantity = quantity + Number(ticketQuantity);
// console.log(quantity);

