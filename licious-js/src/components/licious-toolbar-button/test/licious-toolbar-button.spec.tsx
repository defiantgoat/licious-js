import { newSpecPage } from '@stencil/core/testing';
import { LiciousToolbarButton } from '../licious-toolbar-button';

describe('licious-toolbar-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LiciousToolbarButton],
      html: `<licious-toolbar-button></licious-toolbar-button>`,
    });
    expect(page.root).toEqualHtml(`
      <licious-toolbar-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </licious-toolbar-button>
    `);
  });
});
