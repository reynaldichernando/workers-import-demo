import * as cowsay from "cowsay";

router.get("/", async () => {
  return cowsay.say({ text: "Hello, World!" });
});
