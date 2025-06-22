document.getElementById("userForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("✅ Submit button clicked");

  const formData = new FormData(this);
  const data = Object.fromEntries(formData);
  console.log("🔍 Form data:", data);

  try {
    const res = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      document.getElementById("message").innerText = "✅ User added successfully!";
      this.reset();
    } else {
      document.getElementById("message").innerText = result.error || "❌ Something went wrong.";
    }
  } catch (error) {
    document.getElementById("message").innerText = "❌ Error: " + error.message;
  }
});
