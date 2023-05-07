import { IMedicineMin } from './medicine.interface';
import { IPharmacyMin } from './pharmacy.interface';

export interface IAssortment {
  id;
  medicine: IMedicineMin;
  pharmacy: IPharmacyMin;
  amount: string;
  price: string;
}