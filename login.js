document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const loginMessage = document.getElementById("login-message");

      const validUser = "admin";
      const validPass = "password123";

      if (username === validUser && password === validPass) {
        loginMessage.textContent = "Login successful!";
        loginMessage.style.color = "green";
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      } else {
        loginMessage.textContent = "Invalid username or password.";
        loginMessage.style.color = "red";
      }
    });