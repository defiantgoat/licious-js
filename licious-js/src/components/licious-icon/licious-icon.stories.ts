export default {
  title: 'Licioius/LiciousIcon',
  argTypes: {
    icon: {
      options: ["paint", "menu", "trash","save" ,"rubbish" ,"edit" , "close" , "logout"],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
  decorators: [(story) => `<div style="width:2rem; height:2rem;">${story()}</div>`],
};

const Template = (args: {icon: string}) => `<licious-icon icon="${args.icon}"></licious-icon>`;

export const Default = Template.bind({});
Default.args = {
  icon: 'trash',
};