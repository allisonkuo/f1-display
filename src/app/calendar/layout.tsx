export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex px-10 py-8 bg-f1-dark-grey min-h-screen'>
      {children}
    </div>
  );
}
