import { newSpecPage } from '@stencil/core/testing';
import { LiciousButton } from '../licious-button';

describe('licious-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LiciousButton],
      html: `<licious-button></licious-button>`,
    });
    expect(page.root).toEqualHtml(`
      <licious-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </licious-button>
    `);
  });
});
