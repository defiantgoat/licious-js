export default {
  title: 'Licioius/LiciousInput',
  decorators: [(story) => `<div style="width:300px">${story()}</div>`],
};

const Template = (args: {placeholder: string, disabled: boolean}) => `<licious-input placeholder="${args.placeholder}" disabled="${args.disabled}"></licious-input>`;

export const Example = Template.bind({});
Example.args = {
  placeholder: 'Enter a name',
  disabled: false,
};