export default {
  title: 'Licioius/LiciousPanel',
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
};

const Template = (args) => `<licious-panel open="${args.open}" header="${args.header}" size="${args.size}"><div slot="content">Content</div></licious-panel>`;

export const Example = Template.bind({});
Example.args = {
  size: 'md',
  header: 'Header',
  open: true
};
