import { ThemeProps } from '@/common/interfaces';

interface BackButtonProps extends ThemeProps {
  label?: string;
}

export const BackButton = (props: BackButtonProps) => {
  const { label = 'Back to markfazzio.com', theme } = props;

  const themeClassName =
    theme === 'light'
      ? 'bg-slate-300 text-black shadow-slate-300/20 hover:shadow-slate-300/40 '
      : 'bg-slate-600 text-white shadow-slate-500/20 hover:shadow-slate-500/40';
  const twBtnClassName =
    'select-none rounded-lg py-3 px-6 inline-flex items-center align-middle font-sans text-xs font-bold uppercase shadow-md transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';
  const finalClassName = `${twBtnClassName} ${themeClassName}`;

  const svgClassName = `ml-2 ${
    theme === 'light' ? 'ml-2 fill-black' : 'fill-white'
  }`;

  return (
    <a href="http://markfazzio.com" className={finalClassName}>
      <span>{label}</span>
      <svg
        className={svgClassName}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path
          fillRule="nonzero"
          d="M12 4.354V5h1.745a.75.75 0 0 1 .743.647l.007.102.007 4.251h-1.5l-.005-3.5H12v4.505l1.002-.001.001-.004h1.501l-.001.004h4.939L17.72 9.28a.75.75 0 0 1-.073-.976l.073-.084a.75.75 0 0 1 .976-.073l.084.073 2.997 2.997a.75.75 0 0 1 .073.976l-.072.084-2.997 3.004a.75.75 0 0 1-1.134-.975l.072-.085 1.713-1.717h-7.431L12 17.002h1.014l-.007-3.501h1.501l.007 4.25a.75.75 0 0 1-.648.745l-.102.006H12v.749a.75.75 0 0 1-.88.739l-8.5-1.502A.75.75 0 0 1 2 17.75V5.75a.75.75 0 0 1 .628-.74l8.5-1.396a.75.75 0 0 1 .872.74ZM8.502 11.5a1.002 1.002 0 1 0 0 2.004 1.002 1.002 0 0 0 0-2.004Z"
        />
      </svg>
    </a>
  );
};
