import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'licious-panel',
  styleUrl: 'licious-panel.css',
  shadow: true,
})

export class LiciousPanel {

  @Prop() open: boolean = false;
  @Prop() header: string = "Header";
  @Prop() size: "sm" | "md" | "lg" = "lg";

  @Event() panelClosed: EventEmitter<boolean>;

  panelClosedHandler(evt: boolean) {
    console.log('panelclosedd')
    this.panelClosed.emit(evt);
  }

  handleClose() {
      this.open = false;
      this.panelClosedHandler(true);
  }

  render() {
    return (
      <Host class={this.open ? "open" : "closed"}>
        <div class={`panel ${this.size}`}>
          <div class="header">
            <h1 part='panel-title'>{this.header}</h1>
            <licious-toolbar-button onClick={() => this.handleClose()} icon="close" size="sm"></licious-toolbar-button>
          </div>
          <div class="content">
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
