import Select from "react-select";

const FormSelect = (props: any) => {
  const {
    className,
    validation,
    invalid = "false",
    dirty = "false",
    onTurnDirty,
    ...selectProps
  } = props;

  function handleBlur() {
    onTurnDirty(props.name);
  }

  return (
    <div className={className} data-invalid={invalid} data-dirty={dirty}>
      <Select {...selectProps} onBlur={handleBlur} />
    </div>
  );
};

export default FormSelect;
