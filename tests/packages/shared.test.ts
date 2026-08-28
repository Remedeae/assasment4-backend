import {
  frontendURL,
  backendURL,
  dev,
} from "../../packages/shared/variables/urls";

test("if dev is TRUE, back/frontend URL leads to local host, otherwise railway URLs are used", () => {
  if (dev) {
    expect(frontendURL).toBe("http://localhost:5173");
    expect(backendURL).toBe("http://localhost:3000");
  } else {
    expect(frontendURL).toMatch(".up.railway.app");
    expect(backendURL).toMatch(".up.railway.app");
  }
});
