document.addEventListener("DOMContentLoaded", () => {
  const toggleInputs = document.querySelectorAll(".toggle");
  const allBtn = document.getElementById("all");
  const activeBtn = document.getElementById("active");
  const inactiveBtn = document.getElementById("inactive");
  const extensions = document.querySelectorAll(".extension");

  toggleInputs.forEach(toggle => {
    const extensionDiv = toggle.closest(".extension");
    extensionDiv.dataset.active = toggle.checked ? "true" : "false";
  });

  
  toggleInputs.forEach(toggle => {
    toggle.addEventListener("change", (e) => {
      const extensionDiv = e.target.closest(".extension");
      extensionDiv.dataset.active = e.target.checked ? "true" : "false";
    });
  });

  
  allBtn.addEventListener("click", () => {
    extensions.forEach(ext => {
      ext.style.display = "block";
    });
  });


  activeBtn.addEventListener("click", () => {
    extensions.forEach(ext => {
      if (ext.dataset.active === "true") {
        ext.style.display = "block";
      } else {
        ext.style.display = "none";
      }
    });
  });

  
  inactiveBtn.addEventListener("click", () => {
    extensions.forEach(ext => {
      if (ext.dataset.active === "false") {
        ext.style.display = "block";
      } else {
        ext.style.display = "none";
      }
    });
  });
});
