export default {
  title: 'Licioius/LiciousIconButton',
  argTypes: {
    icon: {
      options: ["paint", "menu", "trash","save" ,"rubbish" ,"edit" , "close" , "logout"],
      control: { type: 'select' },
    },
  },
  decorators: [(story) => `<div style="display:flex;justify-content:center;align-items:center">${story()}</div>`],
};

const Template = (args) => `<licious-icon-button icon="${args.icon}" disabled="${args.disabled}"></licious-icon-button>`;

export const Example = Template.bind({});
Example.args = {
  icon: 'save',
  disabled: false
};