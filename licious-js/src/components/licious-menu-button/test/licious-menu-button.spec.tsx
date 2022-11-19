import { newSpecPage } from '@stencil/core/testing';
import { LiciousMenuButton } from '../licious-menu-button';

describe('licious-menu-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LiciousMenuButton],
      html: `<licious-menu-button></licious-menu-button>`,
    });
    expect(page.root).toEqualHtml(`
      <licious-menu-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </licious-menu-button>
    `);
  });
});
