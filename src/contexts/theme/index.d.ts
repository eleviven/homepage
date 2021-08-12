export type Theme = "dark" | "light";

export const useTheme: () => { theme: Theme; toggleTheme(): void };
