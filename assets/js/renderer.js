function renderPanel(panelName, data) {
  const panel = document.querySelector(`[data-panel="${panelName}"] .panel-content`);

  Object.entries(data).forEach(([os, commands]) => {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = os;
    details.appendChild(summary);

    commands.forEach(c => {
      const div = document.createElement("div");
      div.className = "command" + (c.danger ? " danger" : "");
      div.innerHTML = `<code>${c.cmd}</code><small>${c.note || ""}</small>`;
      details.appendChild(div);
    });

    panel.appendChild(details);
  });
}
