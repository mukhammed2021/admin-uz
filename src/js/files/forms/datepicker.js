/* Календар */
import { isMobile } from "../functions.js";
// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import datepicker from "js-datepicker";

if (document.querySelector("[data-datepicker]")) {
   const picker = datepicker("[data-datepicker]", {
      customDays: ["S", "M", "T", "W", "T", "F", "S"],
      customMonths: [
         "January",
         "February",
         "March",
         "April",
         "May",
         "June",
         "July",
         "August",
         "September",
         "October",
         "November",
         "December",
      ],
      overlayButton: "Submit",
      overlayPlaceholder: "4-digit year",
      startDay: 1,
      position: "br",
      formatter: (input, date, instance) => {
         const value = date.toLocaleDateString();
         input.value = value;
      },
      // onSelect: function (input, instance, date) {},
      onShow: (instance) => {
         if (isMobile.any() && window.innerWidth < 595) {
            console.log(instance.position.left = 1);
            console.log(delete instance.position.right);
            console.log(instance.position);
         }
      },
   });

   const dateLabel = document.querySelector(".form-table__label");
   dateLabel.addEventListener("click", (e) => {
      e.stopPropagation();

      document.querySelector(".form-table__datepicker").classList.toggle("_active-date");

      const isHidden = picker.calendarContainer.classList.contains("qs-hidden");
      picker[isHidden ? "show" : "hide"]();
   });

   flsModules.datepicker = picker;
}
