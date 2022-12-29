import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'licious-select',
  styleUrl: 'licious-select.css',
  shadow: true,
})
export class LiciousSelect {

  @Prop() options: { value: string | number, label: string }[] = []
  @Prop() disabled: boolean;

  render() {
    return (
      <Host>
        <select part='select' disabled={this.disabled}>
          {
            this.options.map(({ value, label }) => <option value={value}>{label}</option>)
          }
        </select>
      </Host>
    );
  }

}
