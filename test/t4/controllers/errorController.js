exports.getError = (req, res) => {
  res
    .status(404)
    .render("error", { route: "error", pageTitle: "Uh oh...", cssFile: null });
};
