document.addEventListener("DOMContentLoaded", function () {
    const btnLogin = document.getElementById("btnLogin");

    if (btnLogin) {
        btnLogin.addEventListener("click", function logar(event) {
            event.preventDefault();

            const email = document.getElementById("email")?.value.trim();
            const password = document.getElementById("password")?.value.trim();
            const rememberMe = document.getElementById("remember-me")?.checked;

            const users = JSON.parse(window.localStorage.getItem("users")) || [];
            const userFound = users.find(user => user.email == email && user.password == password);

            if (userFound) {
                if (rememberMe) {
                    window.localStorage.setItem("rememberedEmail", email);
                    window.localStorage.setItem("rememberedPassword", password);
                } else {
                    window.localStorage.removeItem("rememberedEmail");
                    window.localStorage.removeItem("rememberedPassword");
                }
                alert(`Welcome, ${userFound.name}!`);
                if (["admin", "editor", "salesperson"].includes(userFound.role)) {
                    location.href = "register.html";
                } else {
                    alert("Unauthorized role.");
                }
            } else {
                const errorMessage = document.getElementById("error-message");
                errorMessage.style.display = "block";
            }
        });
        const rememberedEmail = window.localStorage.getItem("rememberedEmail");
        const rememberedPassword = window.localStorage.getItem("rememberedPassword");

        if (rememberedEmail && rememberedPassword) {
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");

            if (emailInput){ 
                emailInput.value = rememberedEmail;
            }
            if (passwordInput){
                 passwordInput.value = rememberedPassword;
            }

            // Optionally, check the "Remember Me" checkbox if values exist
            let rememberMeCheckbox = document.getElementById("remember-me");
            if (rememberMeCheckbox) {
                rememberMeCheckbox.checked = true;
            }
        }
    }
});