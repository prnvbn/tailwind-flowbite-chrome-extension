document.getElementById("openOptions").addEventListener("click", () => {
  chrome.runtime.openOptionsPage();
});

document.getElementById("coolButton").addEventListener("click", function () {
  chrome.tabs.create({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
});
