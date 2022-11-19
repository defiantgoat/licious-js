import { newE2EPage } from '@stencil/core/testing';

describe('licious-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<licious-button></licious-button>');

    const element = await page.find('licious-button');
    expect(element).toHaveClass('hydrated');
  });
});
