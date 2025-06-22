document.getElementById("surveyResponseForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this));

  try {
    const res = await fetch("/api/survey-responses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    document.getElementById("message").innerText = res.ok ? "Submitted successfully!" : result.error;
    if (res.ok) this.reset();
  } catch (err) {
    document.getElementById("message").innerText = "Error: " + err.message;
  }
});
