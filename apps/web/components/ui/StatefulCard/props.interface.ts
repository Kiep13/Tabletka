import { HTMLProps } from 'react';

export interface IProps extends HTMLProps<HTMLDivElement> {
  isLoading: boolean;
  isError: boolean;
  isNoContent: boolean;
}