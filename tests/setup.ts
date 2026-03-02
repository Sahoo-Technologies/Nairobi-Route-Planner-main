// Global test setup
import dotenv from "dotenv";
// Explicitly load .env.test for Vitest
const envFile = process.env.VITEST ? ".env.test" : ".env";
dotenv.config({ path: envFile });
import { afterEach } from "vitest";

// Use the real backend app for integration tests
import { app as backendApp, startServer } from "../server/index";

export function createTestApp() {
  // Ensure routes are registered for tests
  if (!backendApp._routesRegistered) {
    startServer();
    backendApp._routesRegistered = true;
  }
  return backendApp;
}

afterEach(() => {
  // Clean up after each test
});
