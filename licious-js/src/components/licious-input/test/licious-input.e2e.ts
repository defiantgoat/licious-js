import { newE2EPage } from '@stencil/core/testing';

describe('licious-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<licious-input></licious-input>');

    const element = await page.find('licious-input');
    expect(element).toHaveClass('hydrated');
  });
});
