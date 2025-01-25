import { newSpecPage } from '@stencil/core/testing';
import { LiciousListItem } from '../licious-list-item';

describe('licious-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LiciousListItem],
      html: `<licious-list-item></licious-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <licious-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </licious-list-item>
    `);
  });
});
