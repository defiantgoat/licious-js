export default {
  title: 'Licioius/LiciousMenuButton',
  argTypes: {
    icon: {
      options: ["paint", "menu", "trash","save" ,"rubbish" ,"edit" , "close" , "logout"],
      control: { type: 'select' },
    },
    size: {
      options: ["xs", "sm", "lg"],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
  decorators: [(story) => `<div style="height:4rem;background-color:black;display:flex;justify-content:center;align-items:center">${story()}</div>`],
};

const Template = (args: {disabled: boolean, icon: string; size: string}) => `<licious-toolbar-button disabled="${args.disabled}" size="${args.size}" icon="${args.icon}"></licious-toolbar-button>`;

export const Example = Template.bind({});
Example.args = {
  icon: 'close',
  size: 'lg',
  disabled: false
};