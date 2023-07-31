import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center gap-2 justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-zinc-950 focus-visible:ring-zinc-800',
  {
    variants: {
      variant: {
        default: 'bg-violet-500 text-zinc-50 hover:bg-violet-500/60 rounded-lg',
        destructive: 'bg-red-500 text-zinc-50 hover:bg-red-500/60 rounded-lg',
        outline:
          'border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 rounded-lg',
        secondary:
          'bg-violet-500 text-zinc-50 hover:bg-violet-500/60 rounded-lg',
        tertiary:
          'bg-violet-500 text-zinc-50 hover:bg-violet-500/60 rounded-full',
        ghost: 'hover:bg-zinc-500/30 hover:text-white rounded-lg',
        link: 'text-zinc-100 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-8 rounded-md px-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
