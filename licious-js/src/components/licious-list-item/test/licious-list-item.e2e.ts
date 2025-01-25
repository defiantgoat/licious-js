import { newE2EPage } from '@stencil/core/testing';

describe('licious-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<licious-list-item></licious-list-item>');

    const element = await page.find('licious-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
