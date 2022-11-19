import { newE2EPage } from '@stencil/core/testing';

describe('licious-toolbar-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<licious-toolbar-button></licious-toolbar-button>');

    const element = await page.find('licious-toolbar-button');
    expect(element).toHaveClass('hydrated');
  });
});
