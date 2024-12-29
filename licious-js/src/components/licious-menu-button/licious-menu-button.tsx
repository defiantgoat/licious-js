import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'licious-menu-button',
  styleUrl: 'licious-menu-button.css',
  shadow: true,
})
export class LiciousMenuButton {
  @Prop() disabled: boolean;
  @Prop() opened: boolean;

  render() {
    return (
      <Host>
        <span class={this.opened ? 'opened' : 'closed'}>
          <button disabled={this.disabled}>
            <licious-icon icon="menu"></licious-icon>
          </button>
        </span>
      </Host>
    );
  }
}
