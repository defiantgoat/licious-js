var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../licious-icon/licious-icon.js';
let LiciousButton = class LiciousButton extends LitElement {
    constructor() {
        super(...arguments);
        this.label = "";
        this.disabled = false;
    }
    render() {
        this.icon
            ? html `<button part="button" exportparts="icon label" disabled="${this.disabled}" class="icon ${this.size}">
      <div part="icon"><licious-icon icon="${this.icon}"></licious-icon></div><div part="label"><span class="label-text">${this.label}</span></div>
    </button>`
            : html `<button part="button" exportparts='label' disabled="${this.disabled}" class="${this.size}">
      <div part="label"><span class="label-text">${this.label}</span></div>
    </button>`;
    }
};
// Define scoped styles right with your component, in plain CSS
LiciousButton.styles = css `
    :host {
      display: flex;
    }
    button {
      background-color: var(--licious-default-background);
      border-color: var(--light-gray);
      border-width: 1px;
      border-radius: 5px;
      border-style: solid;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
      display: flex;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      color: var(--licious-secondary);
      flex: 1;
      cursor: pointer;
      padding: 0;
      max-height: 2.75rem;
    }
    button > div:first-child {
      padding: 0.72rem 2rem;
      flex: 1;
      display: flex;
      align-content: center;
      justify-content: center;
    }
    button.icon {
      align-items: stretch;
    }
    button.icon > svg {
      width: 1rem;
    }
    button.icon > div:first-child div {
      display: flex;
    }
    button.icon > div:first-child svg {
      width: 1rem;
      color: var(--licious-secondary);
    }
    button.icon > div:first-child {
      display: flex;
      align-items: center;
      justify-items: center;
      flex:0;
      padding: 0 0.9rem;
      border-right: 1px dashed var(--light-gray);
    }
    button.icon > div:nth-child(2) {
      flex: 1;
      display: flex;
      justify-content: center;
      padding: 0.72rem 2rem;
      align-items: center;
    }
    button.sm {
      font-size: .75rem;
      max-height: 2.25rem;
    }
    button.sm .label-text {
      padding-top: 0;
    }
    button.sm > div:first-child {
      padding: 0.63rem 1rem;
    }
    button.sm.icon > div:first-child {
      display: flex;
      align-content: center;
      justify-content: center;
      flex:0;
      padding: 0 0.6rem;
      border-right: 1px dashed var(--light-gray);
    }
    button.sm.icon > div:nth-child(2) {
      flex: 1;
      display: flex;
      align-content: center;
      justify-content: center;
      padding: 0;
      padding:0.63rem 1rem;
    }
    button:disabled, button:disabled:hover, button:disabled:active {
      background: none;
      border-color: var(--licious-disabled-foreground);
      color: var(--licious-disabled-foreground);
      cursor: default;
      box-shadow: none;
    }
    button.icon:disabled > div:first-child svg,
    button.icon:disabled:hover > div:first-child svg{
      width: 1rem;
      color: var(--licious-disabled-foreground);
    }
    button:hover, button:active {
      background-color: var(--licious-pressed-background);
      border-color: var(--licious-pressed-foreground);
      color: var(--licious-primary);
    }
    button:hover.icon > div:first-child svg {
      color: var(--licious-primary);
    }
    button:active.icon > div:first-child svg{
      color: var(--licious-default-background);
    }
    button:active {
      box-shadow: none;
      background-color: var(--licious-secondary);
      color: var(--licious-default-background);
      border-color: var(--licious-default-background);
    }
    button.icon:disabled > div:first-child, button.icon:disabled:hover > div:first-child, button.icon:disabled:active > div:first-child,
    button.sm.icon:disabled > div:first-child, button.sm.icon:disabled:hover > div:first-child, button.sm.icon:disabled:active > div:first-child {
      border-right: 1px dashed var(--licious-disabled-foreground);
    }
    button.icon:hover > div:first-child, button.sm.icon:hover > div:first-child {
      border-right: 1px dashed var(--licious-primary);
    }
    button.icon:active > div:first-child, button.sm.icon:active > div:first-child {
      border-right: 1px dashed var(--licious-default-background);
    }  
  `;
__decorate([
    property({ type: String })
], LiciousButton.prototype, "icon", void 0);
__decorate([
    property({ type: String })
], LiciousButton.prototype, "size", void 0);
__decorate([
    property({ type: String })
], LiciousButton.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], LiciousButton.prototype, "disabled", void 0);
LiciousButton = __decorate([
    customElement('licious-button')
], LiciousButton);
export { LiciousButton };
