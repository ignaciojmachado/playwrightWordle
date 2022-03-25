// @ts-check
const { getWords } = require("../utils.js");
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.wordleunlimited.com/');
});

test.describe('Wordle', () => {
  test('attempt', async ({ page }) => {
    //magic goes here
  });
});
