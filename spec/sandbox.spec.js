import { Selector } from "testcafe";

fixture`Sandbox`.page`https://e2e-boilerplate.github.io/sandbox/`;

test("should be on Sandbox", async (t) => {
  await t
    .expect(Selector("title").innerText)
    .eql("Sandbox")
    .expect(Selector("h1").innerText)
    .eql("Sandbox");
});
