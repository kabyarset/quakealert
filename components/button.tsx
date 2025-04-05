// components/ui/card.tsx
export function Card({ children, className }: any) {
  return <div className={`rounded-lg shadow ${className}`}>{children}</div>;
}
export function CardContent({ children, className }: any) {
  return <div className={className}>{children}</div>;
}
