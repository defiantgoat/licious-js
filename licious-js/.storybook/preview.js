import {defineCustomElements} from '../loader';
import "../src/global/global.css";

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'cartolicious',
    values: [
      {
        name: 'cartolicious',
        value: '#222222',
      },
      {
        name: 'light',
        value: '#ffffff',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}