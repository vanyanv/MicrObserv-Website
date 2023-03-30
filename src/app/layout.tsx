import './globals.css';

export const metadata = {
  title: 'MicrObserv',
  description: 'Observation Tool for Microservices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
