import { render } from '@testing-library/react';

import Service from './service';

describe('Service', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Service />);
    expect(baseElement).toBeTruthy();
  });
});
