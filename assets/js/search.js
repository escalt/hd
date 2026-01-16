document.getElementById("globalSearch").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll(".command").forEach(cmd => {
    cmd.style.display = cmd.innerText.toLowerCase().includes(q) ? "" : "none";
  });
});
