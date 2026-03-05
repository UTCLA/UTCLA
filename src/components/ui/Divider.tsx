export default function Divider({ className = "" }: { className?: string }) {
  return (
    <hr
      className={`border-t border-earth-200 my-12 ${className}`}
    />
  );
}
