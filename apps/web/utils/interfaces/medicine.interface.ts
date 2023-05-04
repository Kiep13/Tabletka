import { PharmaceuticalForms } from '../enums';

export interface IMedicineMin {
  id: string;
  title: string;
}

export interface IMedicine extends IMedicineMin {
  pharmaceuticalForm: PharmaceuticalForms;
  description: string;
  prescribedOnly: boolean;
}