export const useTheme = () => {
    const theme = useState<'light' | 'dark'>('theme', () => {
        // Check localStorage first, then system preference
        if (import.meta.client) {
            const stored = localStorage.getItem('theme')
            if (stored === 'light' || stored === 'dark') {
                return stored
            }
            // Fall back to system preference
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }
        return 'light'
    })

    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
        if (import.meta.client) {
            localStorage.setItem('theme', theme.value)
            updateThemeClass()
        }
    }

    const setTheme = (newTheme: 'light' | 'dark') => {
        theme.value = newTheme
        if (import.meta.client) {
            localStorage.setItem('theme', newTheme)
            updateThemeClass()
        }
    }

    const updateThemeClass = () => {
        if (import.meta.client) {
            const html = document.querySelector('html')
            if (html) {
                if (theme.value === 'dark') {
                    html.classList.add('dark')
                } else {
                    html.classList.remove('dark')
                }
            }
        }
    }

    // Initialize theme class on mount
    if (import.meta.client) {
        updateThemeClass()
    }

    return {
        theme: readonly(theme),
        toggleTheme,
        setTheme,
        isDark: computed(() => theme.value === 'dark')
    }
}
