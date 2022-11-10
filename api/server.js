const app = require("./app");

const port = 8000;

app.listen(port, () => {
  console.log(`Ad API app listening at http://localhost:${port}`);
});
