export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex p-6 bg-f1-dark-grey min-h-screen'>{children}</div>
  );
}
