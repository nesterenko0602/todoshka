import { shallowWithRequiredProps } from 'tests/helpers';
import Checkbox from 'components/ui/Checkbox';

const getWrapper = shallowWithRequiredProps(
  Checkbox,
  {
    props: { id: 1 },
  },
);

describe('Checkbox', () => {
  it('triggers event on change', () => {
    const wrapper = getWrapper();
    const checkboxElement = wrapper.find('input[type="checkbox"]');

    [false, true].forEach((checked) => {
      checkboxElement.element.checked = !checked;
      checkboxElement.trigger('click');

      expect(wrapper.emitted().change[Number(checked)])
        .toEqual([{ checked, id: 1 }]);
    });
  });

  it('turns to passed state', () => {
    const wrapper = getWrapper();

    [true, false].forEach((checked) => {
      wrapper.setProps({ checked });

      expect(
        wrapper.find('input[type="checkbox"]').element.checked,
      ).toBe(checked);
    });
  });
});
