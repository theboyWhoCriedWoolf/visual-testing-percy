import React from 'react';

import Button from '..';

export default { title: 'Button' };

export const WithText = () => <Button>Simple Button</Button>;

export const WithEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
