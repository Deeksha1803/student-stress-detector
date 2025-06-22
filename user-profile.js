document.getElementById("userProfileForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  data.medical_conditions = data.medical_conditions
  ? data.medical_conditions.split(",").map(i => i.trim())
  : [];
  data.allergies = data.allergies
  ? data.allergies.split(",").map(i => i.trim())
  : [];
  try {
    const res = await fetch("/api/user-profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (res.ok) {
      document.getElementById("message").innerText = "Profile added successfully!";
      this.reset();
    } else {
      document.getElementById("message").innerText = result.error || "Something went wrong.";
    }
  } catch (err) {
    document.getElementById("message").innerText = "Error: " + err.message;
  }
});
