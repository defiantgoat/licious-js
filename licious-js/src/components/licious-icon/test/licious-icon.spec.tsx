import { newSpecPage } from '@stencil/core/testing';
import { LiciousIcon } from '../licious-icon';

describe('licious-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LiciousIcon],
      html: `<licious-icon></licious-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <licious-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </licious-icon>
    `);
  });
});
