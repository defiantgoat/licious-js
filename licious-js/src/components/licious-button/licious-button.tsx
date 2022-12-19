import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'licious-button',
  styleUrl: 'licious-button.css',
  shadow: true,
})

export class LiciousButton {

  @Prop() icon: "paint" | "menu" | "trash" | "save" | "rubbish" | "edit" | "close" | "logout";
  @Prop() size: "sm" | "lg";
  @Prop() label: string;
  @Prop() disabled: boolean;

  connectedCallback() {
    console.log('licious button initiated')
  }

  render() {
    return (
      <Host>
        {
          this.icon
            ? <button part='button' exportparts="icon label" disabled={this.disabled} class={`icon ${this.size}`}>
              <div part="icon"><licious-icon icon={this.icon}></licious-icon></div><div part="label"><span class={'label-text'}>{this.label}</span></div>
            </button>
            : <button part="button" exportparts='label' disabled={this.disabled} class={this.size}>
              <div part="label"><span class={'label-text'}>{this.label}</span></div>
            </button>
        }
      </Host>
    );
  }
}
