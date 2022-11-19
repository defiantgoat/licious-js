import { newSpecPage } from '@stencil/core/testing';
import { LiciousIconButton } from '../licious-icon-button';

describe('licious-icon-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LiciousIconButton],
      html: `<licious-icon-button></licious-icon-button>`,
    });
    expect(page.root).toEqualHtml(`
      <licious-icon-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </licious-icon-button>
    `);
  });
});
