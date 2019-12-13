import { percySnapshot } from '@percy/puppeteer';

describe('<Button>', () => {
  it('Default', async () => {
    await page.goto('http://localhost:3001/Button');
    // await expect(page).toMatch('A label text');
    await percySnapshot(page, 'Button', { widths: [300] });
  });
});
