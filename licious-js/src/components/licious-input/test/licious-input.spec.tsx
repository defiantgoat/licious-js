import { newSpecPage } from '@stencil/core/testing';
import { LiciousInput } from '../licious-input';

describe('licious-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LiciousInput],
      html: `<licious-input></licious-input>`,
    });
    expect(page.root).toEqualHtml(`
      <licious-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </licious-input>
    `);
  });
});
