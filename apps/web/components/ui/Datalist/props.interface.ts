import { IDatalistOption } from '@utils/interfaces';

export interface IProps {
  options: IDatalistOption[];
  handleTyping: (value: string) => void;
  handleSelection: (value: IDatalistOption) => void;
  isLoading?: boolean;
}