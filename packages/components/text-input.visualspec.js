import { percySnapshot } from '@percy/puppeteer';

describe('<Button>', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3001/Button');
  });

  it('Default', async () => {
    await expect(page).toMatch('A label text');
    await percySnapshot(page, 'Button');
  });
});
