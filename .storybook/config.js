import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const context = require.context('../src/components', true, /\.stories\.js$/);

const loadStories = () => {
  context.keys().forEach(filename => context(filename));
}

addDecorator(withInfo({
  inline: true,
  header: false,
}));

configure(loadStories, module);
