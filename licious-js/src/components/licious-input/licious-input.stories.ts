export default {
  title: 'Licioius/LiciousInput'
};

const Template = (args) => `<div style="width:${args.width}"><licious-input placeholder="${args.placeholder}" disabled="${args.disabled}"></licious-input></div>`;

export const Example = Template.bind({});
Example.args = {
  width: '300px',
  placeholder: 'Enter a name',
  disabled: false,
};