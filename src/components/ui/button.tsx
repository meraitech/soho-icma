import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border text-base font-bold whitespace-nowrap transition-colors outline-none select-none focus-visible:outline-2 focus-visible:outline-[rgba(7,100,221,0.6)] focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /* DESIGN.md §4: primary CTAs are pills (9999px), 48–52px height, 16px/700 */
        default:
          "rounded-full border-2 border-[#090d46] bg-[#090d46] px-6 text-white hover:border-[#084697] hover:bg-[#084697] active:border-[#0a5cc7] active:bg-[#0a5cc7]",
        secondary:
          "rounded-full border-0 bg-[#0a5cc7] px-6 text-white hover:bg-[#084697] active:bg-[#0a5cc7]",
        highlight:
          "rounded-full border-0 bg-[#ffd400] px-6 text-[#090d46] hover:bg-white active:bg-[#444444] active:text-white",
        outline:
          "rounded-none border border-[#090d46] bg-transparent px-6 text-[#090d46] hover:bg-[#090d46] hover:text-white aria-expanded:bg-[#090d46] aria-expanded:text-white",
        ghost:
          "rounded-none hover:bg-[rgba(115,133,159,0.5)] hover:text-foreground aria-expanded:bg-[rgba(115,133,159,0.5)]",
        destructive:
          "rounded-none bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "h-auto rounded-none p-0 font-normal text-[#090d46] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 gap-1.5 px-6 has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
        xs: "h-8 gap-1 rounded-none px-3 text-sm has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-10 gap-1 rounded-full px-5 text-sm has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-[52px] gap-1.5 px-6 has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
        icon: "size-12 rounded-none",
        "icon-xs": "size-8 rounded-none [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-10 rounded-none",
        "icon-lg": "size-[52px] rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
