 document.getElementById("signupForm").addEventListener("submit", function(e) {
      e.preventDefault();

      let valid = true;
      const name = document.getElementById("fullname");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirmPassword");
      const gender = document.getElementById("gender");
      const dob = document.getElementById("dob");
      const country = document.getElementById("country");
      const terms = document.getElementById("terms");

      document.querySelectorAll(".error-message").forEach(el => el.style.display = "none");

      if (name.value.trim().length < 4) {
        document.getElementById("nameError").style.display = "block";
        valid = false;
      }

      if (!email.value.includes("@")) {
        document.getElementById("emailError").style.display = "block";
        valid = false;
      }

      if (!/^\d{10}$/.test(phone.value)) {
        document.getElementById("phoneError").style.display = "block";
        valid = false;
      }

      if (password.value.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        valid = false;
      }

      if (password.value !== confirmPassword.value) {
        document.getElementById("confirmPasswordError").style.display = "block";
        valid = false;
      }

      if (gender.value === "") {
        document.getElementById("genderError").style.display = "block";
        valid = false;
      }

      if (dob.value === "") {
        document.getElementById("dobError").style.display = "block";
        valid = false;
      }

      if (country.value === "") {
        document.getElementById("countryError").style.display = "block";
        valid = false;
      }

      if (!terms.checked) {
        document.getElementById("termsError").style.display = "block";
        valid = false;
      }

      if (valid) {
        alert("Form submitted successfully!");
        this.reset();
      }
    });