
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

function SkeletonText({
  className,
  lines = 1,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { lines?: number }) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-4 bg-muted rounded animate-shimmer",
            i === lines - 1 && lines > 1 && "w-3/4" // Last line shorter
          )}
          style={{
            backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            backgroundSize: '200px 100%',
            animation: 'shimmer 2s infinite linear'
          }}
        />
      ))}
    </div>
  )
}

function SkeletonAvatar({
  className,
  size = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { size?: "sm" | "default" | "lg" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    default: "w-10 h-10",
    lg: "w-12 h-12"
  }

  return (
    <div
      className={cn(
        "bg-muted rounded-full animate-pulse",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
}

function SkeletonCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg border bg-card p-6 shadow-soft", className)}
      {...props}
    >
      <div className="space-y-4">
        <SkeletonText lines={1} className="w-3/4" />
        <SkeletonText lines={2} />
        <div className="flex items-center space-x-2">
          <SkeletonAvatar size="sm" />
          <SkeletonText lines={1} className="w-1/3" />
        </div>
      </div>
    </div>
  )
}

export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard }
