import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-none border border-transparent px-2.5 py-0.5 text-xs font-bold tracking-[0px] whitespace-nowrap uppercase transition-colors focus-visible:outline-2 focus-visible:outline-[rgba(7,100,221,0.6)] [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-[#090d46] text-white [a]:hover:bg-[#084697]",
        secondary: "bg-[#ffd400] text-[#090d46] [a]:hover:bg-white",
        destructive:
          "bg-destructive/10 text-destructive [a]:hover:bg-destructive/20",
        outline: "border-[#d6d9da] text-[#222222] [a]:hover:bg-[#f7f7f7]",
        ghost: "text-[#767676] hover:bg-[#f7f7f7]",
        link: "text-[#090d46] underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
