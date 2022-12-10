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
        <svg part='icon' viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.0114 7.09714V18.9257H3.54857V7.09714H13.0114ZM11.2371 0H5.32286L4.14 1.18286H0V3.54857H16.56V1.18286H12.42L11.2371 0ZM15.3771 4.73143H1.18286V18.9257C1.18286 20.2269 2.24743 21.2914 3.54857 21.2914H13.0114C14.3126 21.2914 15.3771 20.2269 15.3771 18.9257V4.73143Z"
            fill="currentColor"
          />
        </svg>
      ),
      paint: (
        <svg part='icon' viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.72157 10.3898C3.15401 10.3898 1.88863 11.6552 1.88863 13.2227C1.88863 14.4598 0.793223 15.1114 0 15.1114C0.868768 16.2634 2.35134 17 3.77725 17C5.86419 17 7.55451 15.3097 7.55451 13.2227C7.55451 11.6552 6.28913 10.3898 4.72157 10.3898ZM17.6681 1.54159L16.4027 0.276212C16.0344 -0.0920705 15.4395 -0.0920705 15.0712 0.276212L6.61019 8.73726L9.20706 11.3341L17.6681 2.87307C18.0364 2.50479 18.0364 1.90987 17.6681 1.54159Z"
            fill="currentColor"
          />
        </svg>
      ),
      menu: (
        <svg part='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20"><polygon fill="currentColor" points="1.68 12 5 12 27 12 30.32 12 32 10.02 32 10.02 32 10.02 30.3 8 27 8 5 8 1.7 8 0 10.02 0 10.02 0 10.02 1.68 12" /><polygon fill="currentColor" points="5 4 27 4 30.32 4 32 2.02 32 2.02 30.3 0 27 0 5 0 1.7 0 0 2.02 0 2.02 1.68 4 5 4" /><polygon fill="currentColor" points="30.3 16 27 16 5 16 1.7 16 0 18.02 0 18.02 0 18.02 1.68 20 5 20 27 20 30.32 20 32 18.02 32 18.02 32 18.02 30.3 16" /></svg> // <svg part='icon' viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        //   <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="currentColor" />
        // </svg>
      ),
      trash: (
        <svg part='icon' viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.0114 7.09714V18.9257H3.54857V7.09714H13.0114ZM11.2371 0H5.32286L4.14 1.18286H0V3.54857H16.56V1.18286H12.42L11.2371 0ZM15.3771 4.73143H1.18286V18.9257C1.18286 20.2269 2.24743 21.2914 3.54857 21.2914H13.0114C14.3126 21.2914 15.3771 20.2269 15.3771 18.9257V4.73143Z"
            fill="currentColor"
          />
        </svg>
      ),
      save: (
        <svg part='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><polygon fill="currentColor" points="30 18 30 30 4 30 4 18 0 14 0 34 34 34 34 14 30 18" /><polygon fill="currentColor" points="24 10.94 19 15.44 19 0 15 0 15 15.44 10 10.94 10 16.4 15 20.99 15 20.99 17 23 19 20.99 19 20.99 24 16.4 24 10.94" /></svg>
      ),
      edit: (
        <svg part='icon' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 13.6571V16.5278C0 16.7923 0.207749 17 0.472157 17H3.34287C3.46563 17 3.58839 16.9528 3.67338 16.8584L13.9853 6.55589L10.4441 3.01472L0.141647 13.3172C0.0472158 13.4116 0 13.5249 0 13.6571ZM16.7238 3.81739C17.0921 3.4491 17.0921 2.85419 16.7238 2.4859L14.5141 0.276212C14.1458 -0.0920705 13.5509 -0.0920705 13.1826 0.276212L11.4545 2.0043L14.9957 5.54548L16.7238 3.81739Z"
            fill="currentColor"
          />
        </svg>
      ),
      close: (
        <svg part='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><polygon fill="currentColor" points="32 0 29.34 0 16 13.34 2.66 0 0 0 0 2.66 13.34 16 0 29.34 0 32 2.66 32 16 18.66 29.34 32 32 32 32 29.34 18.66 16 32 2.66 32 0" /></svg>
        // <svg part='icon' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        //   <path
        //     d="M16.6229 0.390027C16.12 -0.112817 15.3077 -0.112817 14.8049 0.390027L8.5 6.68203L2.19511 0.377133C1.69226 -0.125711 0.879977 -0.125711 0.377133 0.377133C-0.125711 0.879977 -0.125711 1.69226 0.377133 2.19511L6.68203 8.5L0.377133 14.8049C-0.125711 15.3077 -0.125711 16.12 0.377133 16.6229C0.879977 17.1257 1.69226 17.1257 2.19511 16.6229L8.5 10.318L14.8049 16.6229C15.3077 17.1257 16.12 17.1257 16.6229 16.6229C17.1257 16.12 17.1257 15.3077 16.6229 14.8049L10.318 8.5L16.6229 2.19511C17.1128 1.70516 17.1128 0.879978 16.6229 0.390027Z"
        //     fill="currentColor"
        //   />
        // </svg>
      ),
      logout: (
        <svg part='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><polygon fill="currentColor" points="16 30 4 30 4 4 16 4 20 0 0 0 0 34 20 34 16 30" /><polygon fill="currentColor" points="21.94 10 26.44 15 11 15 11 19 26.44 19 21.94 24 27.4 24 31.99 19 31.99 19 34 17 31.99 15 31.99 15 27.4 10 21.94 10" /></svg>
        // <svg part='icon' viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        //   <path
        //     d="M12.75 3.4L11.5515 4.5985L13.7445 6.8H5.1V8.5H13.7445L11.5515 10.693L12.75 11.9L17 7.65L12.75 3.4ZM1.7 1.7H8.5V0H1.7C0.765 0 0 0.765 0 1.7V13.6C0 14.535 0.765 15.3 1.7 15.3H8.5V13.6H1.7V1.7Z"
        //     fill="currentColor"
        //   />
        // </svg>
      ),
    }

    return icons[icon];
  }

  @Prop() icon: "paint" | "menu" | "trash" | "save" | "rubbish" | "edit" | "close" | "logout";

  render() {
    return (
      <Host>
        <div part='icon-container' exportparts='icon'>{this.getIcon(this.icon)}</div>
      </Host>
    );
  }

}
