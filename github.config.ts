import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        headless: false,
        browserName: "chromium",
    },
    timeout: 10 * 100000,
    testMatch: ["checkTotalPrice.ts"],
    retries: 1
}
export default config;
