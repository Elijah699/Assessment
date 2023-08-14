import { useTheme } from '@chakra-ui/react';
import { useMemo } from 'react';

export const useColor = () => {
  const theme = useTheme();
  const urlParams = new URLSearchParams(window.location.search);
  const color = urlParams.get('color');

  const SelectedColor = useMemo(() => {
    switch (color) {
      case 'blue':
        return theme.themeUtil.colors.blue;
      case 'purple':
        return theme.themeUtil.colors.purple;
      case 'orange':
        return theme.themeUtil.colors.orange;
      default:
        return theme.themeUtil.colors.blue;
    }
  }, [color, theme]);

  return { color: SelectedColor };
};
