import { formatDate } from '@/utils/format-data';
import { Container } from './styled';

export type DateProps = {
  date: string;
};

export const Date = ({ date }: DateProps) => {
  return <Container>{formatDate(date)}</Container>;
};
