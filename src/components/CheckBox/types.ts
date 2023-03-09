export interface CheckBoxProps  {
  name?: string;
  label?: string;
  checked?: boolean;
  onChange?: (newState: boolean) => void;
}
