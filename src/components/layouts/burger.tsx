import { cn } from '~/lib/cn';

type BurgerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Burger({ open, setOpen }: BurgerProps) {
  return (
    <button className={cn('block lg:hidden', !open && 'space-y-[5px]')} onClick={() => setOpen(prev => !prev)}>
      <div className={cn('h-px bg-black duration-200 ease-in-out', open ? 'w-8 rotate-45' : 'w-[39px]')}></div>
      <div className={cn('h-px bg-black duration-200 ease-in-out', open ? 'w-8 rotate-135' : 'ml-auto w-6')}></div>
    </button>
  );
}
