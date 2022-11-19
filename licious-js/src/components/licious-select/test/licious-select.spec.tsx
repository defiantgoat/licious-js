import { newSpecPage } from '@stencil/core/testing';
import { LiciousSelect } from '../licious-select';

describe('licious-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LiciousSelect],
      html: `<licious-select></licious-select>`,
    });
    expect(page.root).toEqualHtml(`
      <licious-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </licious-select>
    `);
  });
});
