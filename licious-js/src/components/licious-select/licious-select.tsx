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
        {/* <div exportparts='select svg'> */}
          <select part='select' disabled={this.disabled}>
            {
              this.options.map(({ value, label }) => <option value={value}>{label}</option>)
            }
          </select>
          {/* <svg part='svg' viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="currentColor" />
          </svg>
        </div> */}
      </Host>
    );
  }

}
