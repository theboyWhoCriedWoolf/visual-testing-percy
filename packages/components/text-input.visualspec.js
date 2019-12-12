import puppeteer from 'puppeteer';
import { percySnapshot } from '@percy/puppeteer';

const platform = require('os').platform();
const puppeteerArgs = /^win/.test(platform) ? [] : ['--single-process'];

describe('<Button>', () => {
  let page;
  let server;
  let browser;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      timeout: 10000,
      args: puppeteerArgs,
    });

    page = await browser.newPage();

    await page.goto('http://localhost:3001/Button');
  });

  afterEach(function() {
    // Close the Puppeteer browser instance.
    browser.close();
  });

  it('Default', async () => {
    // await expect(page).toMatch('A label text');
    await percySnapshot(page, 'Button');
  });
});
