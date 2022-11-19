import { newE2EPage } from '@stencil/core/testing';

describe('licious-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<licious-icon></licious-icon>');

    const element = await page.find('licious-icon');
    expect(element).toHaveClass('hydrated');
  });
});
