import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'licious-list-item',
  styleUrl: 'licious-list-item.css',
  shadow: false,
})
export class LiciousListItem {
  @Prop() placeholder: string;
  @Prop() value: string = '';
  @Prop() mode: 'display' | 'edit' = 'display';
  @Prop() header: string = '';
  @Prop() subheader: string = '';

  render() {
    return (
      <Host>
        {this.mode === 'display' ? (
          <div class="container">
            <div class="content">
              <h2 class="licious">{this.header}</h2>
              {this.subheader > '' ? <h3 class="licious">{this.subheader}</h3> : null}
            </div>
            <span class="buttons">
              <slot name="display-mode-buttons"></slot>
            </span>
          </div>
        ) : null}
        {this.mode === 'edit' ? (
          <div class="container">
            <div class="content">
              <licious-input value={this.value} placeholder={this.placeholder} />
            </div>
            <span class="buttons">
              <slot name="edit-mode-buttons"></slot>
            </span>
          </div>
        ) : null}
      </Host>
    );
  }
}
