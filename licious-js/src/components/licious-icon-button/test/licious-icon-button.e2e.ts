import { newE2EPage } from '@stencil/core/testing';

describe('licious-icon-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<licious-icon-button></licious-icon-button>');

    const element = await page.find('licious-icon-button');
    expect(element).toHaveClass('hydrated');
  });
});
