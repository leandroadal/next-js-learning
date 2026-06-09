import Link from 'next/link';

import { Container, NextLink, PreviousLink } from './styled';
import { PaginationData } from '@/domain/pagination';
import { getPaginationViewModel } from './utils/get-pagination-view-model';
import { CategoryData } from '@/domain/category';
import { CategorySelector } from '../CategorySelector';

type PaginationProps = PaginationData & {
  categories: CategoryData[];
};

export function Pagination(props: PaginationProps) {
  const {
    categories,
    nextLink,
    previousLink,
    categoryName,
    hasNextPage,
    hasPreviousPage,
  } = getPaginationViewModel(props, props.categories);

  return (
    <Container>
      <PreviousLink>
        {hasPreviousPage && <Link href={previousLink}>Previous</Link>}
      </PreviousLink>

      <CategorySelector
        categories={categories}
        selectedCategory={categoryName}
      />

      <NextLink>{hasNextPage && <Link href={nextLink}>Next</Link>}</NextLink>
    </Container>
  );
}
