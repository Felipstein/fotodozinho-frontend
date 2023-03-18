export type CheckBoxOnChange = (newState: boolean) => void;

export interface CheckBoxProps  {
  name?: string;
  label?: string;
  checked?: boolean;
  onChange?: CheckBoxOnChange;
}
