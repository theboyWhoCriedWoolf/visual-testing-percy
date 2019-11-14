import React from 'react';
import { Spec, Suite } from '@test/percy';
import { Button } from 'ui-kit';

export const routePath = '/Button';

export const component = () => (
  <Suite>
    <Spec label="Default">
      <Button>Hello world</Button>
    </Spec>
  </Suite>
);
