document.addEventListener("DOMContentLoaded", function () {

    // welcome message //
    const loggedInUser = localStorage.getItem("rememberedRole");
    const loggedInUserName = localStorage.getItem("rememberedName");
    const welcomeMessage = `Welcome, ${loggedInUserName}, (${loggedInUser})`;

    const welcomeParagraph = document.createElement("p");
    welcomeParagraph.textContent = welcomeMessage;
    const welcomeContainer = document.getElementById("welcome-dashboard");
    welcomeContainer.prepend(welcomeParagraph); 

    // function Logout//
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("rememberedRole");
            localStorage.removeItem("rememberedName");
            alert("You have been logged out.");
            location.href = "index.html";
        });
    }

    // pagination //
        // Create Product //
    const redirectCreateProduct = document.getElementById("redirect-create-product");

    if (redirectCreateProduct) {
        redirectCreateProduct.addEventListener("click", function () {
            if (loggedInUser == "admin" || loggedInUser == "editor") {
                location.href = "create-product.html"; 
            } else {
                alert("You do not have access to this page"); 
            }
        });
    }

        // Create Product //
    const redirectEditProduct = document.getElementById("redirect-edit-product");

    if (redirectEditProduct) {
        redirectEditProduct.addEventListener("click", function () {
            if (loggedInUser == "admin" || loggedInUser == "editor") {
                location.href = "edit-product.html"; 
            } else {
                alert("You do not have access to this page"); 
            }
        });
    }

        // Index //
    const redirectIndex = document.getElementById("redirect-index");

    redirectIndex.addEventListener("click", function() {
    location.href = "index.html";
    });
});








  