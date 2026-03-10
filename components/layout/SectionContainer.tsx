interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({ children, className = "" }: SectionContainerProps) {
  return (
    <section className={`min-h-screen page-container flex flex-col justify-center py-16 ${className}`}>
      {children}
    </section>
  );
}
