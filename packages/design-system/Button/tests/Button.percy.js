import React from 'react';
import { Spec, Suite } from '@test/percy';
import { Button } from 'design-system';

export const routePath = '/Button';

export const component = () => (
  <Suite>
    <Spec label="Default">
      <Button>Simple Button</Button>
    </Spec>
  </Suite>
);
