import { newE2EPage } from '@stencil/core/testing';

describe('licious-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<licious-panel></licious-panel>');

    const element = await page.find('licious-panel');
    expect(element).toHaveClass('hydrated');
  });
});
