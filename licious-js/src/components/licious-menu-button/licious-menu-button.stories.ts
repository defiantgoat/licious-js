export default {
  title: 'Licioius/LiciousMenuButton',
  decorators: [(story) => `<div style="height:4rem;background-color:black">${story()}</div>`],

};

const Template = (args: {disabled: boolean}) => `<licious-menu-button disabled="${args.disabled}"></licious-menu-button>`;

export const Example = Template.bind({});
Example.args = {
  disabled: false
};