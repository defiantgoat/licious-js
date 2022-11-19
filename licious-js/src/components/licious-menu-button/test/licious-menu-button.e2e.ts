import { newE2EPage } from '@stencil/core/testing';

describe('licious-menu-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<licious-menu-button></licious-menu-button>');

    const element = await page.find('licious-menu-button');
    expect(element).toHaveClass('hydrated');
  });
});
