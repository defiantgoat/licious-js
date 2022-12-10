export default {
  title: 'Licioius/LiciousMenuButton',
};

const Template = (args) => `<div style="height:65px;background-color:black"><licious-menu-button disabled="${args.disabled}"></licious-menu-button><div>`;

export const Example = Template.bind({});
Example.args = {
  disabled: false
};