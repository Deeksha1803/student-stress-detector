document.getElementById("chatForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch("/api/chat-messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (res.ok) {
      document.getElementById("message").innerText = "Message sent!";
      this.reset();
    } else {
      document.getElementById("message").innerText = result.error || "Failed to send.";
    }
  } catch (err) {
    document.getElementById("message").innerText = "Error: " + err.message;
  }
});
