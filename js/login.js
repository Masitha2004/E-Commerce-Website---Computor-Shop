// ----------------------
// TAB SWITCHING
// ----------------------
function showLogin(){
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginTab").classList.add("active");
  document.getElementById("registerTab").classList.remove("active");
}

function showRegister(){
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
  document.getElementById("registerTab").classList.add("active");
  document.getElementById("loginTab").classList.remove("active");
}

// ----------------------
// REGISTER USER
// ----------------------
function registerUser(e){
  e.preventDefault();

  const user = {
    name: document.getElementById("regName").value,
    email: document.getElementById("regEmail").value,
    password: document.getElementById("regPassword").value
  };

  // Save user in localStorage
  localStorage.setItem("user", JSON.stringify(user));

  // Show success popup (alert optional)
  alert("Registration successful! Please login.");

  // Switch to login tab
  showLogin();
}

// ----------------------
// LOGIN USER
// ----------------------
function loginUser(e){
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if(!storedUser){
    // Show graphical "User Not Found" popup
    document.getElementById("userNotFound").classList.add("active");
    return;
  }

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if(email === storedUser.email && password === storedUser.password){
    // Save logged-in status
    localStorage.setItem("loggedIn", "true");

    // Show success popup or message
    document.getElementById("loginSuccess").classList.add("active");

    // Redirect to home page after 2 seconds
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }else{
    alert("Invalid email or password");
  }
}

// ----------------------
// POPUP HANDLING
// ----------------------
function goToRegister(){
  const popup = document.getElementById("userNotFound");
  popup.classList.remove("active");

  // Wait for animation to finish
  setTimeout(() => {
    showRegister();
  }, 200);
}

// Close popup when clicking outside
document.getElementById("userNotFound").addEventListener("click", function(e){
  if(e.target === this){
    this.classList.remove("active");
  }
});
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}
