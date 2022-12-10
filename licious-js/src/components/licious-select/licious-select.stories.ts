import { within } from '@storybook/testing-library';

export default {
  title: 'Licioius/LiciousSelect',
  argTypes: {
    width: {
      control: { type: 'text' },
    },
    options: {
      control: { type: 'array'},
    }
  },
};

const Template = (args) => {
  console.log(args);
  return `<div style="width:${args.width}"><licious-select data-testid="licious-select" disabled="${args.disabled}"></licious-select></div>`;
}

export const Example = Template.bind({});
Example.args = {
  width: '300px',
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

Example.play = async ({ canvasElement, userEvent }) => {
  console.log("select: ", canvasElement, userEvent)
  const canvas= within(canvasElement);

  const [select] = canvas.getAllByTestId('licious-select');

    // @ts-ignore
    select.options = [{
      value: 1,
      label: "One"
    },
    {
      value: 2,
      label: "Two"
    }
  ];

};
