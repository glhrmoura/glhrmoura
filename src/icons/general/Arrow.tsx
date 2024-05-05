import { useTheme } from 'styled-components';

interface ArrowProps {
  size?: number;
  color?: string;
  dir?: 'up' | 'down' | 'left' | 'right';
}

const Arrow = ({ dir, size = 18, color }: ArrowProps) => {
  const theme = useTheme();

  const getTransformRotation = () => {
    switch (dir) {
      case 'up':
        return 'rotate(0)';
      case 'right':
        return 'rotate(90deg)';
      case 'down':
        return 'rotate(180deg)';
      case 'left':
        return 'rotate(-90deg)';
      default:
        return 'up';
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color || theme.colors.foreground}
      style={{ transition: 'all 0.2s', transform: getTransformRotation() }}
    >
      <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" />
    </svg>
  );
};

export { Arrow };
