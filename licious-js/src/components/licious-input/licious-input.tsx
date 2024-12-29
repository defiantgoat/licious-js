import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'licious-input',
  styleUrl: 'licious-input.css',
  shadow: true,
})
export class LiciousInput {
  @Prop() disabled: boolean;
  @Prop() placeholder: string;
  @Prop() value: string = '';

  render() {
    return (
      <Host>
        <input disabled={this.disabled} value={this.value} type="text" placeholder={this.placeholder || ''} />
      </Host>
    );
  }
}
