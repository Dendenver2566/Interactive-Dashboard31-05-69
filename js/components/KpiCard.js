// ═══════════════════════════════════════════════════════════
// PSMIS Dashboard — KPI Card & Section Header Components
// Reusable UI building blocks for dashboard sections
// ═══════════════════════════════════════════════════════════

// ── KPI Card ────────────────────────────────────────────────
// Displays a single KPI metric with icon, label, and value
// Props:
//   icon    — emoji string (e.g. '👤')
//   label   — description text
//   value   — numeric value (formatted with FMT)
//   color   — accent color for value text
//   bgClass — CSS variable or color for card background
const KpiCard = ({ icon, label, value, color, bgClass }) => (
    <div
        className="kpi-card"
        style={{
            background: bgClass,
            borderColor: color + '22',
        }}
    >
        <div className="kpi-icon">{icon}</div>
        <div className="kpi-label">{label}</div>
        <div className="kpi-value" style={{ color }}>
            {DashboardData.FMT.format(value)}
        </div>
    </div>
);

// ── Section Header ──────────────────────────────────────────
// Renders a numbered section heading with a gradient icon badge
// Props:
//   num   — section number (not rendered, reserved for ordering)
//   title — heading text (Thai)
//   icon  — React component (SVG icon from Ic module)
//   color — primary color used for gradient and glow
const SectionHeader = ({ num, title, icon, color }) => (
    <div className="section-header">
        <div
            className="section-header-icon"
            style={{
                background: `linear-gradient(135deg, ${color}, ${color}aa)`,
                boxShadow: `0 4px 10px ${color}30`,
            }}
        >
            {icon}
        </div>
        <h3 className="section-header-title">{title}</h3>
    </div>
);

// ── Expose to global scope ──────────────────────────────────
window.KpiCard       = KpiCard;
window.SectionHeader = SectionHeader;
