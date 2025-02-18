import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'licious-toolbar-button',
  styleUrl: 'licious-toolbar-button.css',
  shadow: true,
})
export class LiciousToolbarButton {
  @Prop() icon: 'paint' | 'trash' | 'save' | 'rubbish' | 'edit' | 'close' | 'logout';
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  @Prop() disabled: boolean;

  render() {
    return (
      <Host>
        <button disabled={this.disabled} class={this.size}>
          <licious-icon icon={this.icon}></licious-icon>
        </button>
      </Host>
    );
  }
}
