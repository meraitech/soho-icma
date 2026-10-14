import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-[3px] border border-[#c8c8c8] bg-white px-4 py-3 text-sm transition-colors outline-none placeholder:text-[#303030] focus-visible:border-[#0a5cc7] focus-visible:outline-2 focus-visible:outline-[rgba(7,100,221,0.6)] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
