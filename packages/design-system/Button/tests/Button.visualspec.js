import { percySnapshot } from '@percy/puppeteer';

describe('<Button>', () => {
  beforeAll(async () => {
    await page.goto(`${HOST}/Button`);
  });

  test('Button', async () => {
    await expect(page).toMatch('Simple Button');
    await percySnapshot(page, 'Button');
  });
});
