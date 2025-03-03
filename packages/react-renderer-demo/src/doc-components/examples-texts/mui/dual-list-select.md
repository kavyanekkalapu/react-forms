This a custom component with a custom design.

## Props

Dual list select is wrapped in a form group, so it accepts all [form group props](/provided-mappers/component-api#formgroupwrappedcomponents).

|Props|Type|Default|Description|
|-----|----|-------|-----------|
|options|array|[]|`[{label, value, ...props}]` *see below*|
|leftTitle|String|'Options'|Title for options|
|rightTitle|String|'Selected'|Title for selected items|
|moveLeftTitle|String|'Move selected to left'|Tooltip for move to left button|
|moveRightTitle|String|'Move selected to right'|Tooltip for move to right button|
|moveAllLeftTitle|String|'Move all to left'|Tooltip for move all to left button|
|moveAllRightTitle|String|'Move all to right'|Tooltip for move all to right button|
|allToLeft|Boolean|true|Hides all to left button|
|allToRight|Boolean|true|Hides all to right button|
|noValueTitle|String|'No selected'|Placeholder for empty value|
|noOptionsTitle|String|'No available options'|Placeholder for empty options|
|filterOptionsTitle|String|'Filter options'|Placeholder for options filter input|
|filterValueTitle|String|'Filter selected value'|Placeholder for value filter input|
|filterValueText|String|'Remove your filter to see all selected'|Placeholder for value when there is no filtered value|
|filterOptionsText|String|'Remove your filter to see all options'|Placeholder for options when there is no filtered option|
|checkboxVariant|bool|false|Change list item to checkboxes|

### Options

|Props|Type|Description|
|-----|----|-----------|
|value|string|Value of the option|
|label|node|ListItemText primary text|
|icon|element|Icon for the ListItemIcon|
|isCheckbox|bool|Checkbox variant|
|secondaryActions|element|Children of secondaryActions component|
|ListItemProps|object|Props passed to ListItem|
|ListItemIconProps|object|Props passed to ListItemIcon|
|ListItemTextProps|object|Props passed to ListItemText|
|ListItemSecondaryActionProps|object|Props passed to ListItemSecondaryAction|

### Customization

MUI DualListSelect provides fully customization. When the props offers Right/Left variant, you can pass props to `RightXXX` or to `LeftXXX` props. Example: `ListGridProps` is Right/Left, so there are two more props: `RightListGridProps` and `LeftListGridProps`. These props overrides the standard props, except `className`, that are being combined. All these props are objects.

|Props|Right/Left variant|
|-----|----|
|FormFieldGridProps||
|InternalGridProps||
|ListGridProps|yes|
|ListProps|yes|
|ButtonsGridProps||
|ButtonsInternalGridProps||
|ButtonGridProps||
|ToRightGridProps||
|IconButtonProps||
|ToRightIconButtonProps||
|IconProps||
|AllToLeftIconProps||
|AllToRightGridProps||
|AllToRightIconButtonProps||
|AllToLeftGridProps||
|AllToLeftIconButtonProps||
|ToLeftGridProps||
|ToLeftIconProps||
|ToLeftIconButtonProps||
|ListItemProps|yes|
|ListItemIconProps|yes|
|ListItemTextProps|yes|
|ListItemSecondaryActionProps|yes|
|FormControlProps||
|FormLabelProps||
|FormHelperTextProps||
|TitleProps|yes|
|ToolbarProps|yes|
|FilterFieldProps|yes|
|SortIconButtonProps|yes|
|SortIconProps|yes|
