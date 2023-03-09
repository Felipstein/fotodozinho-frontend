export interface CheckBoxProps  {
  label: string;
  checked?: boolean;
  onChange?: (newState: boolean) => void;
}
