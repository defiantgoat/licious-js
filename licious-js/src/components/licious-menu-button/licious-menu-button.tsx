import { Component, Host, h, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'licious-menu-button',
  styleUrl: 'licious-menu-button.css',
  shadow: true,
})
export class LiciousMenuButton {

  @State() opened: boolean = false;

  @Listen('click', { capture: true })
  handleClick() {
    if(!this.disabled) {
      this.opened = !this.opened;
    }
  }

  @Prop() disabled: boolean;

  render() {
    return (
      <Host>
        <span
        class={this.opened ? "opened" : "closed"}
        >
        <button
          disabled={this.disabled} 
        >
          <licious-icon icon="menu"></licious-icon>
        </button>
        </span>
      </Host>
    );
  }

}
