const PANELS = ["services", "software", "access", "troubleshooting"];

PANELS.forEach(panel => {
  fetch(`data/${panel}.json`)
    .then(r => r.json())
    .then(data => renderPanel(panel, data));
});
