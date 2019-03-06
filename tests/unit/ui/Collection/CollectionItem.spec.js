import { shallowWithRequiredProps } from 'tests/helpers';
import Checkbox from 'components/ui/Checkbox';
import CollectionItem from 'components/ui/Collection/CollectionItem';
import Icon from 'components/ui/Icon';


const item = { id: 1, checked: true, message: 'Test message' };
const getWrapper = shallowWithRequiredProps(CollectionItem, { props: item });

describe('CollectionItem', () => {
  it('renders Checkbox', () => {
    const wrapper = getWrapper();
    const checkboxElement = wrapper.find(Checkbox);

    expect(checkboxElement.attributes('id')).toBe(item.id.toString());
    expect(checkboxElement.attributes('checked')).toBe(item.checked.toString());
  });

  it('renders label', () => {
    const wrapper = getWrapper();
    const labelElement = wrapper.find('label');

    expect(labelElement.attributes('for')).toBe(item.id.toString());
    expect(labelElement.text()).toBe(item.message);
  });

  it('renders Icon', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(Icon).exists()).toBe(true);
  });

  describe('Actions', () => {
    it('emits on checkbox state changing', () => {
      const wrapper = getWrapper();
      const checkboxElement = wrapper.find(Checkbox);

      checkboxElement.vm.$emit('change');

      expect(wrapper.emitted().update[0])
        .toEqual([{
          ...item,
          checked: !item.checked,
        }]);
    });

    it('emits on delete Icon click', () => {
      const wrapper = getWrapper();

      wrapper.find(Icon).trigger('click');

      expect(wrapper.emitted().delete[0])
        .toEqual([item.id]);
    });
  });
});
