import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'licious-icon-button',
  styleUrl: 'licious-icon-button.css',
  shadow: true,
})
export class LiciousIconButton {
  @Prop() icon: 'paint' | 'menu' | 'trash' | 'save' | 'rubbish' | 'edit' | 'close' | 'logout';
  @Prop() disabled: boolean;
  @Prop() size: 'sm' | 'lg' = 'lg';

  render() {
    return (
      <Host>
        <button disabled={this.disabled} class={this.size} part="button" exportparts="icon">
          <div part="icon">
            <licious-icon icon={this.icon}></licious-icon>
          </div>
        </button>
      </Host>
    );
  }
}
