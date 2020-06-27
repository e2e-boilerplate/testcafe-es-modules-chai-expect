import { Selector } from "testcafe";
import { expect } from "chai";

fixture`Sandbox`.page`https://www.google.com`;

test("should be on Sandbox", async () => {
  const title = await Selector("title").innerText;

  expect(title).to.equal("Google");
});
