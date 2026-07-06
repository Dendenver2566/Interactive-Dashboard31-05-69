// ═══════════════════════════════════════════════════════════
// PSMIS Dashboard — Icons Module
// SVG Icons ทั้งหมด (reusable components)
// ═══════════════════════════════════════════════════════════

const Ic = {
    Logo: () => (
        React.createElement('svg', { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none' },
            React.createElement('rect', { width: 32, height: 32, rx: 10, fill: 'url(#lg)' }),
            React.createElement('path', { d: 'M8 16h4l3-6 4 12 3-6h4', stroke: 'white', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' }),
            React.createElement('defs', null,
                React.createElement('linearGradient', { id: 'lg', x1: 0, y1: 0, x2: 32, y2: 32, gradientUnits: 'userSpaceOnUse' },
                    React.createElement('stop', { stopColor: '#2563eb' }),
                    React.createElement('stop', { offset: 1, stopColor: '#38bdf8' })
                )
            )
        )
    ),

    Filter: () => React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('polygon', { points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' })
    ),

    Check: () => React.createElement('svg', { width: 12, height: 12, viewBox: '0 0 24 24', fill: 'none', stroke: 'white', strokeWidth: 3.5, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('polyline', { points: '20 6 9 17 4 12' })
    ),

    Share: () => React.createElement('svg', { width: 15, height: 15, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('circle', { cx: 18, cy: 5, r: 3 }),
        React.createElement('circle', { cx: 6, cy: 12, r: 3 }),
        React.createElement('circle', { cx: 18, cy: 19, r: 3 }),
        React.createElement('line', { x1: 8.59, y1: 13.51, x2: 15.42, y2: 17.49 }),
        React.createElement('line', { x1: 15.41, y1: 6.51, x2: 8.59, y2: 10.49 })
    ),

    Copy: () => React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('rect', { x: 9, y: 9, width: 13, height: 13, rx: 2 }),
        React.createElement('path', { d: 'M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1' })
    ),

    Close: () => React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'round' },
        React.createElement('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
        React.createElement('line', { x1: 6, y1: 6, x2: 18, y2: 18 })
    ),

    People: () => React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('path', { d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' }),
        React.createElement('circle', { cx: 9, cy: 7, r: 4 }),
        React.createElement('path', { d: 'M23 21v-2a4 4 0 00-3-3.87' }),
        React.createElement('path', { d: 'M16 3.13a4 4 0 010 7.75' })
    ),

    Money: () => React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('line', { x1: 12, y1: 1, x2: 12, y2: 23 }),
        React.createElement('path', { d: 'M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6' })
    ),

    Shield: () => React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
    ),

    PieI: () => React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('path', { d: 'M21.21 15.89A10 10 0 118 2.83' }),
        React.createElement('path', { d: 'M22 12A10 10 0 0012 2v10z' })
    ),

    TrendUp: () => React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('polyline', { points: '23 6 13.5 15.5 8.5 10.5 1 18' }),
        React.createElement('polyline', { points: '17 6 23 6 23 12' })
    ),

    Doc: () => React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('path', { d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' }),
        React.createElement('polyline', { points: '14 2 14 8 20 8' }),
        React.createElement('line', { x1: 16, y1: 13, x2: 8, y2: 13 }),
        React.createElement('line', { x1: 16, y1: 17, x2: 8, y2: 17 }),
        React.createElement('polyline', { points: '10 9 9 9 8 9' })
    ),

    Heart: () => React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('path', { d: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z' })
    ),

    Gift: () => React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('polyline', { points: '20 12 20 22 4 22 4 12' }),
        React.createElement('rect', { x: 2, y: 7, width: 20, height: 5 }),
        React.createElement('line', { x1: 12, y1: 22, x2: 12, y2: 7 }),
        React.createElement('path', { d: 'M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z' }),
        React.createElement('path', { d: 'M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z' })
    ),

    Wallet: () => React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('path', { d: 'M21 12V7H5a2 2 0 010-4h14v4' }),
        React.createElement('path', { d: 'M3 5v14a2 2 0 002 2h16v-5' }),
        React.createElement('path', { d: 'M18 12a2 2 0 000 4h4v-4z' })
    ),

    Link: () => React.createElement('svg', { width: 15, height: 15, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('path', { d: 'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71' }),
        React.createElement('path', { d: 'M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71' })
    ),

    // New icons for the modern dashboard
    Sun: () => React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: '#f59e0b', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('circle', { cx: 12, cy: 12, r: 5 }),
        React.createElement('line', { x1: 12, y1: 1, x2: 12, y2: 3 }),
        React.createElement('line', { x1: 12, y1: 21, x2: 12, y2: 23 }),
        React.createElement('line', { x1: 4.22, y1: 4.22, x2: 5.64, y2: 5.64 }),
        React.createElement('line', { x1: 18.36, y1: 18.36, x2: 19.78, y2: 19.78 }),
        React.createElement('line', { x1: 1, y1: 12, x2: 3, y2: 12 }),
        React.createElement('line', { x1: 21, y1: 12, x2: 23, y2: 12 }),
        React.createElement('line', { x1: 4.22, y1: 19.78, x2: 5.64, y2: 18.36 }),
        React.createElement('line', { x1: 18.36, y1: 5.64, x2: 19.78, y2: 4.22 })
    ),

    Moon: () => React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: '#93c5fd', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('path', { d: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' })
    ),

    Menu: () => React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('line', { x1: 3, y1: 6, x2: 21, y2: 6 }),
        React.createElement('line', { x1: 3, y1: 12, x2: 21, y2: 12 }),
        React.createElement('line', { x1: 3, y1: 18, x2: 21, y2: 18 })
    ),

    Upload: () => React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('path', { d: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4' }),
        React.createElement('polyline', { points: '17 8 12 3 7 8' }),
        React.createElement('line', { x1: 12, y1: 3, x2: 12, y2: 15 })
    ),

    Download: () => React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('path', { d: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4' }),
        React.createElement('polyline', { points: '7 10 12 15 17 10' }),
        React.createElement('line', { x1: 12, y1: 15, x2: 12, y2: 3 })
    ),

    QR: () => React.createElement('svg', { width: 64, height: 64, viewBox: '0 0 100 100', fill: 'none' },
        React.createElement('rect', { x: 5, y: 5, width: 35, height: 35, rx: 4, stroke: '#2563eb', strokeWidth: 6, fill: 'none' }),
        React.createElement('rect', { x: 16, y: 16, width: 14, height: 14, rx: 2, fill: '#2563eb' }),
        React.createElement('rect', { x: 60, y: 5, width: 35, height: 35, rx: 4, stroke: '#2563eb', strokeWidth: 6, fill: 'none' }),
        React.createElement('rect', { x: 71, y: 16, width: 14, height: 14, rx: 2, fill: '#2563eb' }),
        React.createElement('rect', { x: 5, y: 60, width: 35, height: 35, rx: 4, stroke: '#2563eb', strokeWidth: 6, fill: 'none' }),
        React.createElement('rect', { x: 16, y: 71, width: 14, height: 14, rx: 2, fill: '#2563eb' }),
        React.createElement('rect', { x: 60, y: 60, width: 10, height: 10, rx: 2, fill: '#2563eb' }),
        React.createElement('rect', { x: 75, y: 60, width: 10, height: 10, rx: 2, fill: '#2563eb' }),
        React.createElement('rect', { x: 60, y: 75, width: 10, height: 10, rx: 2, fill: '#0ea5e9' }),
        React.createElement('rect', { x: 75, y: 75, width: 10, height: 10, rx: 2, fill: '#0ea5e9' }),
        React.createElement('rect', { x: 90, y: 60, width: 5, height: 5, rx: 1, fill: '#38bdf8' }),
        React.createElement('rect', { x: 60, y: 90, width: 5, height: 5, rx: 1, fill: '#38bdf8' }),
        React.createElement('rect', { x: 68, y: 90, width: 12, height: 5, rx: 1, fill: '#3b82f6' }),
        React.createElement('rect', { x: 85, y: 80, width: 10, height: 5, rx: 1, fill: '#3b82f6' })
    ),
};

// Icon getter by key name (used in topics config)
const getIcon = (key) => Ic[key] || Ic.Filter;
