import Link from 'next/link';

import { Container, NextLink, PreviousLink } from './styled';
import { PaginationData } from '@/domain/pagination';
import { getPaginationViewModel } from './utils/get-pagination-view-model';

type PaginationProps = PaginationData;

export function Pagination(props: PaginationProps) {
  const { nextLink, previousLink, hasNextPage, hasPreviousPage } =
    getPaginationViewModel(props);

  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link href={previousLink}>Previous</Link>
        </PreviousLink>
      )}

      {hasNextPage && (
        <NextLink>
          <Link href={nextLink}>Next</Link>
        </NextLink>
      )}
    </Container>
  );
}
