interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg border border-earth-200 shadow-sm p-6 ${className}`}
    >
      {children}
    </div>
  );
}
