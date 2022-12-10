export default {
  title: 'Licioius/LiciousIconButton',
  argTypes: {
    icon: {
      options: ["paint", "menu", "trash","save" ,"rubbish" ,"edit" , "close" , "logout"],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
};

const Template = (args) => `<licious-icon-button icon="${args.icon}" disabled="${args.disabled}"></licious-icon-button>`;

export const Example = Template.bind({});
Example.args = {
  icon: 'save',
  disabled: false
};