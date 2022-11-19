import { newE2EPage } from '@stencil/core/testing';

describe('licious-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<licious-select></licious-select>');

    const element = await page.find('licious-select');
    expect(element).toHaveClass('hydrated');
  });
});
