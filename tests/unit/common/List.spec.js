import { shallowWithRequiredProps } from 'tests/helpers';

import List from 'components/common/List';
import Collection from 'components/ui/Collection/Collection';
import Input from 'components/ui/Input';
import TextHeader from 'components/ui/TextHeader';

const defaultItems = [{ id: 6, checked: true, message: 'Test message' }];
const getWrapper = shallowWithRequiredProps(
  List,
  {
    getters: {
      getItems: () => defaultItems,
    },
  },
);

describe('List', () => {
  it('renders TextHeader', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(TextHeader).exists()).toBe(true);
  });

  it('renders Input', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(Input).exists()).toBe(true);
  });

  it('renders Collection and passes items prop', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(Collection).exists()).toBe(true);
    expect(wrapper.find(Collection).props('items')).toBe(defaultItems);
  });

  describe('Actions', () => {
    it('emits on collection update', () => {
      const updateItem = jest.fn();
      const wrapper = getWrapper({}, { actions: { updateItem } });
      const collectionElement = wrapper.find(Collection);

      const updatingItem = {
        ...defaultItems[0],
        checked: false,
      };

      collectionElement.vm.$emit('update', updatingItem);

      expect(updateItem)
        .toHaveBeenCalledWith(expect.any(Object), updatingItem, undefined);
    });

    it('emits on collection item delete', () => {
      const deleteItem = jest.fn();
      const wrapper = getWrapper({}, { actions: { deleteItem } });
      const collectionElement = wrapper.find(Collection);

      const deletingItem = {
        ...defaultItems[0],
        checked: false,
      };

      collectionElement.vm.$emit('delete', deletingItem);

      expect(deleteItem)
        .toHaveBeenCalledWith(expect.any(Object), deletingItem, undefined);
    });

    it('emits on submit new item', () => {
      const addItem = jest.fn();
      const wrapper = getWrapper({}, { actions: { addItem } });
      const inputElement = wrapper.find(Input);

      const addingItem = {
        message: 'New item',
      };

      inputElement.vm.$emit('submit', addingItem);

      expect(addItem)
        .toHaveBeenCalledWith(expect.any(Object), addingItem, undefined);
    });
  });
});
