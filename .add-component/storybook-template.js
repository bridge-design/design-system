module.exports = (name) => `
import { Meta, Canvas, Story } from '@storybook/addon-docs';
import { ArgsTable } from @storybook/blocks';

import ${name} from ".";

<Meta title="Components/${name}" />

## ${name}

TODO: add component description

<Canvas>
  <Story name="Default">
    <${name}/>
  </Story>
</Canvas>

<ArgsTable of={${name}} />
`;
