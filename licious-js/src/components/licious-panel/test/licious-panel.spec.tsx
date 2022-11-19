import { newSpecPage } from '@stencil/core/testing';
import { LiciousPanel } from '../licious-panel';

describe('licious-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LiciousPanel],
      html: `<licious-panel></licious-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <licious-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </licious-panel>
    `);
  });
});
