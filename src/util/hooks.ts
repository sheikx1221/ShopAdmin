import { useTheme } from "@react-navigation/native"

export const useColorsHook = () => {
    const { colors, dark } = useTheme();
    return { colors, dark };
}