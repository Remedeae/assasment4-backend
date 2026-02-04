import { frontendURL, backendURL } from "../../packages/shared/variables/url";

test("test that back/frontend URLS doesn't lead to localhost", () => {
  expect(frontendURL).not.toBe("http://localhost:5173");
  expect(backendURL).not.toBe("http://localhost:3000");
});

test("Test if back/frontend URLs leads to railway", () => {
  expect(frontendURL).toMatch(".up.railway.app");
  expect(backendURL).toMatch(".up.railway.app");
});
