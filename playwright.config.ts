import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  retries: 1,
  // fullyParallel: true,
  // forbidOnly: !!process.env.CI,
  // retries: process.env.CI ? 2 : 0,
  // workers: process.env.CI ? 1 : undefined,
   reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    trace: 'retain-on-failure',
    headless: false,
    screenshot: 'on',
  },

  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        ignoreHTTPSErrors: true,
        channel:'chrome',
        permissions: ['geolocation'],
        video: 'retain-on-failure',
        ...devices['Desktop Chrome']
      },
    },

    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        headless: true,
        screenshot: 'off',
        // viewport:{width:720,height:500}
        ...devices['Desktop Firefox']
      },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    {
      name: 'Edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
        headless:false
      },
    }
  ],
});
