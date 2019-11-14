import { percySnapshot } from '@percy/puppeteer';

describe('<Button>', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3001/Button');
  });

  it('Default', async () => {
    await expect(page).toMatch('Hello');
    await percySnapshot(page, 'Button');
  });

  it('New', async () => {
    expect(true).toBe('true');
  });
});
