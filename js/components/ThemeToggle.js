// ═══════════════════════════════════════════════════════════
// PSMIS Dashboard — Theme Toggle Component
// Dark/Light mode toggle with localStorage persistence
// ═══════════════════════════════════════════════════════════

const ThemeToggle = () => {
    const [isDark, setIsDark] = React.useState(() => {
        const saved = localStorage.getItem('psmis-theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('psmis-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return (
        <button className="theme-toggle" onClick={toggleTheme} title={isDark ? 'เปลี่ยนเป็น Light Mode' : 'เปลี่ยนเป็น Dark Mode'}>
            <div className="theme-toggle-track">
                <div className="theme-toggle-thumb">
                    <span className="theme-toggle-icon">
                        {isDark ? <Ic.Moon /> : <Ic.Sun />}
                    </span>
                </div>
            </div>
        </button>
    );
};

window.ThemeToggle = ThemeToggle;
