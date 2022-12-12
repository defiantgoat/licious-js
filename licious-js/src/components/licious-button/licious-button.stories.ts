export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Licioius/LiciousButton',
  argTypes: {
    icon: {
      options: ["paint", "menu", "trash","save" ,"rubbish" ,"edit" , "close" , "logout"],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
    size: {
      options: ['lg', 'sm',],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
  decorators: [(story) => `<div style="display:flex;justify-content:center;align-items:center">${story()}</div>`],
};

const Template = (args) => `<div style="width:${args.width}"><licious-button icon="${args.icon}" size="${args.size}" label="${args.label}" disabled="${args.disabled}"></licious-button></div>`;

export const Large = Template.bind({});
Large.args = {
  width: '200px',
  icon: 'paint',
  size: 'lg',
  label: 'Paint',
  disabled: false
};
export const Small = Template.bind({});
Small.args = {
  width: '120px',
  icon: 'paint',
  size: 'sm',
  label: 'Paint',
  disabled: false
};