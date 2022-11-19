import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'licious-input',
  styleUrl: 'licious-input.css',
  shadow: true,
})
export class LiciousInput {

  @Prop() disabled: boolean;
  @Prop() placeholder: string;
  @Prop({mutable: true}) value: string;

  @Event() changed: EventEmitter<string>;

  handleChange(event) {
    this.value = event.target?.value;
    this.changed.emit(this.value);
  }

  render() {
    return (
      <Host>
        <input
          disabled={this.disabled}
          type='text'
          placeholder={this.placeholder || ""}
          onInput={(event) => this.handleChange(event)}
        />
      </Host>
    );
  }

}
