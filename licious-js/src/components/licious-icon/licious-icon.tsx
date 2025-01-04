import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'licious-icon',
  styleUrl: 'licious-icon.css',
  shadow: false,
})
export class LiciousIcon {
  getIcon(icon: string) {
    const icons = {
      rubbish: (
        <svg part="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 36">
          <path fill="currentColor" d="M219,8" transform="translate(-217)" />
          <polygon fill="currentColor" points="30 2 21 1.99 21 0 11 0 11 1.98 2.02 1.97 0 4.04 0 5.97 2.02 8 4 6 4 5.97 28 6 29.98 8 32 6 32 4.04 30 2" />
          <path fill="currentColor" d="M224,7h-2V34l2,2h18l2-2V7Zm16,4V32H226V11" transform="translate(-217)" />
          <polygon fill="currentColor" points="16 26 16 29 10 29 10 31 21 31 21 29 21 26 16 26" />
        </svg>
      ),
      paint: (
        <svg part="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
          <polygon fill="currentColor" points="32.77 0.02 31.17 0 29.55 1.67 29.55 1.67 7.58 20.13 13.88 26.44 31.39 3.51 31.39 3.51 33 1.83 32.96 0.21 32.77 0.02" />
          <path
            fill="currentColor"
            d="M390.44,23.86s-2.55.86-2.55,5.05c0,3.14-3.39,5.59-3.39,5.59s10.37-1.23,10.37-4.54C394.87,25.76,390.44,23.86,390.44,23.86Z"
            transform="translate(-384.5 -1.5)"
          />
        </svg>
      ),
      menu: (
        <svg part="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20">
          <polygon fill="currentColor" points="1.68 12 5 12 27 12 30.32 12 32 10.02 32 10.02 32 10.02 30.3 8 27 8 5 8 1.7 8 0 10.02 0 10.02 0 10.02 1.68 12" />
          <polygon fill="currentColor" points="5 4 27 4 30.32 4 32 2.02 32 2.02 30.3 0 27 0 5 0 1.7 0 0 2.02 0 2.02 1.68 4 5 4" />
          <polygon fill="currentColor" points="30.3 16 27 16 5 16 1.7 16 0 18.02 0 18.02 0 18.02 1.68 20 5 20 27 20 30.32 20 32 18.02 32 18.02 32 18.02 30.3 16" />
        </svg>
      ),
      trash: (
        <svg part="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 36">
          <path fill="currentColor" d="M219,8" transform="translate(-217)" />
          <polygon fill="currentColor" points="30 2 21 1.99 21 0 11 0 11 1.98 2.02 1.97 0 4.04 0 5.97 2.02 8 4 6 4 5.97 28 6 29.98 8 32 6 32 4.04 30 2" />
          <path fill="currentColor" d="M224,7h-2V34l2,2h18l2-2V7Zm16,4V32H226V11" transform="translate(-217)" />
          <polygon fill="currentColor" points="16 26 16 29 10 29 10 31 21 31 21 29 21 26 16 26" />
        </svg>
      ),
      save: (
        <svg part="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
          <polygon fill="currentColor" points="30 18 30 30 4 30 4 18 0 14 0 34 34 34 34 14 30 18" />
          <polygon fill="currentColor" points="24 10.94 19 15.44 19 0 15 0 15 15.44 10 10.94 10 16.4 15 20.99 15 20.99 17 23 19 20.99 19 20.99 24 16.4 24 10.94" />
        </svg>
      ),
      //   <path
      edit: (
        <svg part="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <polygon fill="currentColor" points="27.64 0.02 26.11 0 24.6 1.5 30.5 7.38 31.98 5.91 32 4.37 27.64 0.02" />
          <polygon fill="currentColor" points="0 32 9.12 28.26 3.5 22.65 0 32" />
          <polygon fill="currentColor" points="4.97 21.03 10.87 26.92 29.16 8.72 23.26 2.84 4.97 21.03" />
        </svg>
      ),
      close: (
        <svg part="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <polygon fill="currentColor" points="32 0 29.34 0 16 13.34 2.66 0 0 0 0 2.66 13.34 16 0 29.34 0 32 2.66 32 16 18.66 29.34 32 32 32 32 29.34 18.66 16 32 2.66 32 0" />
        </svg>
      ),
      logout: (
        <svg part="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
          <polygon fill="currentColor" points="16 30 4 30 4 4 16 4 20 0 0 0 0 34 20 34 16 30" />
          <polygon fill="currentColor" points="21.94 10 26.44 15 11 15 11 19 26.44 19 21.94 24 27.4 24 31.99 19 31.99 19 34 17 31.99 15 31.99 15 27.4 10 21.94 10" />
        </svg>
      ),
      custom: null,
    };

    return icons[icon];
  }

  @Prop() icon: 'paint' | 'menu' | 'trash' | 'save' | 'rubbish' | 'edit' | 'close' | 'logout' | 'custom';

  render() {
    return (
      <Host>
        <div part="icon-container" exportparts="icon">
          {this.getIcon(this.icon)}
        </div>
      </Host>
    );
  }
}
