import { CategoryData } from '@/domain/category';
import { CategoryLink } from './styled';
import Link from 'next/link';

type CategorySelectorProps = {
  selectedCategory: string;
  categories: CategoryData[];
};

export function CategorySelector({
  selectedCategory,
  categories,
}: CategorySelectorProps) {
  return (
    <CategoryLink>
      <details>
        <summary>Categoria: {selectedCategory} ▼</summary>

        <nav>
          <Link href="/post/page/1">Todas</Link>

          {categories.map((category) => (
            <Link key={category.id} href={`/post/page/1/${category.name}`}>
              {category.name}
            </Link>
          ))}
        </nav>
      </details>
    </CategoryLink>
  );
}
