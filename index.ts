interface Field {
  name: string;
  label: string;
}

const fields: Field[] = [
  {
    name: 'nomezin',
    label: 'Nome',
  },
  {
    name: 'emailzin',
    label: 'E-mail',
  },
];

const fieldValues: Record<keyof typeof fields, any> = {

};
