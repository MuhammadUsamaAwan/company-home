import { cn } from '~/lib/cn';

export function Button({ className, children, ...props }: React.ComponentProps<'button'>) {
  return (
    <button className={cn('cursor-pointer border border-white hover:bg-white', className)} {...props}>
      <span className='gradient-hover-no-animate block px-[50px] py-[24px] font-sans text-xs leading-[0.2em] font-medium text-white uppercase'>
        {children}
      </span>
    </button>
  );
}
