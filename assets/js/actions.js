document.addEventListener("click", e => {
  if (!e.target.matches(".copy")) return;

  const cmdEl = e.target.closest(".command");
  let cmd = cmdEl.querySelector("code").textContent;

  cmdEl.querySelectorAll("input").forEach(input => {
    cmd = cmd.replace(`{{${input.dataset.var}}}`, input.value);
  });

  navigator.clipboard.writeText(cmd);
});
