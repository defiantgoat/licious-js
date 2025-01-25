import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'licious-list-item',
  styleUrl: 'licious-list-item.css',
  shadow: true,
})
export class LiciousListItem {
  @Prop() placeholder: string;
  @Prop() value: string = '';
  @Prop() mode: 'display' | 'edit' = 'display';
  @Prop() header: string = '';
  @Prop() subheader: string = '';

  @Event() inputChanged: EventEmitter<string>;

  inputChangedHandler(evt: string) {
    this.inputChanged.emit(evt);
  }

  handleInputChanged(e: any) {
    this.inputChangedHandler(e?.target?.shadowRoot?.querySelector('input')?.value || '');
  }

  render() {
    return (
      <Host>
        {this.mode === 'display' ? (
          <div class="container">
            <div class="content">
              <h2 class="licious">{this.header}</h2>
              {this.subheader > '' ? <h3 class="licious">{this.subheader}</h3> : null}
            </div>
            <div class="buttons">
              <slot name="display-mode-buttons"></slot>
            </div>
          </div>
        ) : null}
        {this.mode === 'edit' ? (
          <div class="container">
            <div class="content">
              <licious-input value={this.value} placeholder={this.placeholder} onInput={e => this.handleInputChanged(e)} />
            </div>
            <div class="buttons">
              <slot name="edit-mode-buttons"></slot>
            </div>
          </div>
        ) : null}
      </Host>
    );
  }
}
