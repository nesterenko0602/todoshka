import { shallowWithRequiredProps } from 'tests/helpers';
import Collection from 'components/ui/Collection/Collection';
import CollectionItem from 'components/ui/Collection/CollectionItem';

const items = [
  { id: 1, checked: true, message: 'm1' },
  { id: 2, checked: true, message: 'm2' },
];
const getWrapper = shallowWithRequiredProps(
  Collection,
  {
    props: { items },
  },
);

describe('Collection', () => {
  it('renders message for empty list', () => {
    const wrapper = getWrapper({ items: [] });

    expect(wrapper.text()).toBe('No tasks in your list');
  });

  it('renders passed items', () => {
    const wrapper = getWrapper({ items });

    expect(wrapper.findAll(CollectionItem).length).toBe(items.length);
  });

  it('passes all required attributes to CollectionItem', () => {
    const wrapper = getWrapper({ items });
    const firstItem = items[0];
    const firstCollectionItem = wrapper.find(CollectionItem);

    expect(firstCollectionItem.attributes('id')).toBe(firstItem.id.toString());
    expect(firstCollectionItem.attributes('checked')).toBe(firstItem.checked.toString());
    expect(firstCollectionItem.attributes('message')).toBe(firstItem.message);
  });

  describe('Actions', () => {
    it('emits on item update', () => {
      const wrapper = getWrapper();

      const item = items[0];
      const itemElement = wrapper.find(CollectionItem);
      itemElement.vm.$emit('update', item);

      expect(wrapper.emitted().update[0])
        .toEqual([item]);
    });

    it('emits on item delete', () => {
      const wrapper = getWrapper();

      const item = items[0];
      const itemElement = wrapper.find(CollectionItem);
      itemElement.vm.$emit('delete', item);

      expect(wrapper.emitted().delete[0])
        .toEqual([item]);
    });
  });
});
