import componentTypes from '@data-driven-forms/react-form-renderer/dist/cjs/component-types';

const options = [
  {
    label: 'Morton',
    value: 'Jenifer'
  },
  {
    label: 'Vega',
    value: 'Cervantes'
  },
  {
    label: 'Gilbert',
    value: 'Wallace'
  },
  {
    label: 'Jami',
    value: 'Cecilia'
  },
  {
    label: 'Ebony',
    value: 'Kay'
  }
];

const loadOptions = (inputValue = '') => {
  return new Promise((res) =>
    setTimeout(() => {
      if (inputValue.length === 0) {
        return res(options.slice(0, 3));
      }

      return res(options.filter(({ label }) => label.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())));
    }, 1500)
  );
};

const selectSchema = {
  fields: [
    {
      component: componentTypes.SELECT,
      name: 'simple-portal-select',
      label: 'Simple portal select',
      options,
      menuIsPortal: true
    },
    {
      component: componentTypes.SELECT,
      name: 'simple-async-select',
      label: 'Simple async select',
      loadOptions
    },
    {
      component: componentTypes.SELECT,
      name: 'simple-searchable-async-select',
      label: 'Simple searchable async select',
      loadOptions,
      isSearchable: true
    },
    {
      component: componentTypes.SELECT,
      name: 'multi-async-select',
      label: 'multi async select',
      loadOptions,
      isMulti: true
    },
    {
      component: componentTypes.SELECT,
      name: 'searchable-multi-async-select',
      label: 'Multi searchable async select',
      loadOptions,
      isSearchable: true
    },
    {
      component: componentTypes.SELECT,
      name: 'multi-simple-select',
      label: 'Simple multi select',
      options,
      isMulti: true
    },
    {
      component: componentTypes.SELECT,
      name: 'multi-searchable-select',
      label: 'Searchable multi select',
      options,
      isMulti: true,
      isSearchable: true
    },
    {
      component: componentTypes.SELECT,
      name: 'multi-clearable-searchable-select',
      label: 'Searchable clearable multi select',
      options,
      isMulti: true,
      isSearchable: true,
      isClearable: true
    },
    {
      component: componentTypes.SELECT,
      name: 'simple-select',
      label: 'Simple-select',
      options
    },
    {
      component: componentTypes.SELECT,
      name: 'disabled-select',
      label: 'Disabled-select',
      options,
      isDisabled: true
    },
    {
      component: componentTypes.SELECT,
      name: 'clearable-select',
      label: 'Clearable-select',
      options,
      isClearable: true
    },
    {
      component: componentTypes.SELECT,
      name: 'searchable-select',
      label: 'Clearable-select',
      options,
      isSearchable: true
    }
  ]
};

export default {
  ...selectSchema
};
