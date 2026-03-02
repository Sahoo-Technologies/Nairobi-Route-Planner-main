import dotenv from "dotenv";
// Always load .env.test for test runs
dotenv.config({ path: ".env.test" });

export default async function globalSetup() {
  // No-op, dotenv is loaded
}
