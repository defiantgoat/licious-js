import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'licious-select',
  styleUrl: 'licious-select.css',
  shadow: true,
})
export class LiciousSelect {
  @Prop() options: { value: string | number; label: string; selected?: boolean }[] = [];
  @Prop() disabled: boolean;

  render() {
    return (
      <Host>
        <select part="select" disabled={this.disabled}>
          {this.options.map(({ value, label, selected = false }) => (
            <option value={value} selected={selected}>
              {label}
            </option>
          ))}
        </select>
      </Host>
    );
  }
}
