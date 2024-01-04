"use client";

import { useTheme } from "next-themes";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useMemo } from "react";

type PickerProps = {
  onChange: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
};

const IconPicker = ({ onChange, children, asChild }: PickerProps) => {
    const { resolvedTheme } = useTheme();
  
    const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap;
  
    const themeMap = {
      light: Theme.LIGHT,
      dark: Theme.DARK,
    };
  
    const theme = useMemo(() => themeMap[currentTheme], [currentTheme]);
  
    const memoizedIconPicker = useMemo(() => (
      <Popover>
        <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
        <PopoverContent className="p-0 w-full border-none shadow-none">
          <EmojiPicker
            height={350}
            theme={theme}
            onEmojiClick={(data) => onChange(data.emoji)}
          />
        </PopoverContent>
      </Popover>
    ), [asChild, children, onChange, theme]);
  
    return memoizedIconPicker;
  };

export default IconPicker;
