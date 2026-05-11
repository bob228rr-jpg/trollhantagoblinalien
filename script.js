const copyButton = document.querySelector("#copyContract");

copyButton?.addEventListener("click", async () => {
  const message = "Contract coming soon";

  try {
    await navigator.clipboard.writeText(message);
    copyButton.textContent = "Copied: coming soon";
  } catch {
    copyButton.textContent = "Coming soon";
  }

  window.setTimeout(() => {
    copyButton.textContent = "Copy when live";
  }, 1800);
});
