const clipboard = new ClipboardJS("#button-copy", {
  text: function (trigger) {
    return trigger.getAttribute("data-clipboard-text");
  },
});
