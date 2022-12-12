export default {
  title: 'Licioius/LiciousSelect',
  argTypes: {
    width: {
      control: { type: 'text' },
    },
    options: {
      control: { type: 'array' },
    }
  },
  decorators: [(story) => `<div style="width:300px">${story()}</div>`],
};

const Template = (args: { width: string, disabled: boolean, options: any[] }) => {
  setTimeout(() => {
    const [element] = [...document.getElementsByTagName('licious-select')];
    element.options = args.options || [];
  });
  return `<licious-select disabled="${args.disabled}"></licious-select>`;
}

export const Example = Template.bind({});
Example.args = {
  disabled: false,
  options: [{
    value: 1,
    label: "One"
  },
  {
    value: 2,
    label: "Two"
  }
  ]
};
