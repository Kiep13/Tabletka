import { IOrganizationMin } from './organization.interface';

export interface IPharmacyMin {
  address: string;
  organization: IOrganizationMin
}