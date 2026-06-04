import StyledComponentsRegistry from '@/lib/registry';
import Providers from '@/components/providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            {/* children: as páginas renderizam aqui */}
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
