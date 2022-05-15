import { fireEvent, render } from '@testing-library/react';
import { FilterBar } from '../components/FilterBar';

const setup = () => {
  const utils = render(<FilterBar placeholder="Search Products"/>);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const searchInput: any = utils.getByLabelText('filter-input');
  return {
    searchInput,
    ...utils,
  };
};

test('search filter\'s value should be change onchange', () => {
  const { searchInput } = setup();
  fireEvent.change(searchInput, { target: { value: 'product' } });
  expect(searchInput.value).toBe('product');
});

test('search filter\'s placeholder must be pass with props', () => {
  const { searchInput } = setup();
  expect(searchInput.placeholder).toBe('Search Products');
});