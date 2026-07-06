// ═══════════════════════════════════════════════════════════
// PSMIS Dashboard — Chart Panel Components
// Recharts wrappers for all dashboard chart sections
// ═══════════════════════════════════════════════════════════

const {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell,
    ComposedChart, Line, Area
} = Recharts;

// ── Custom Tooltip ──────────────────────────────────────────
// Shared tooltip component used by all charts
const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;

    return (
        <div
            className="chart-tooltip"
            style={{
                background: 'var(--bg-tooltip)',
                border: '1px solid var(--border-color)',
                borderRadius: 12,
                padding: '10px 14px',
                boxShadow: 'var(--shadow-md)',
            }}
        >
            <div className="chart-tooltip-label">{label}</div>
            {payload.map((entry, i) => (
                <div
                    key={i}
                    className="chart-tooltip-item"
                    style={{ color: entry.color }}
                >
                    {entry.name}: {DashboardData.FMT.format(entry.value)}
                </div>
            ))}
        </div>
    );
};

// ── Workforce Stacked Bar Chart ─────────────────────────────
// Displays officer vs permanent-employee counts per category
const WorkforceChart = ({ data }) => (
    <div className="chart-container" style={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12, fill: 'var(--text-muted)' }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    tick={{ fontSize: 11, fill: 'var(--text-muted)' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => DashboardData.FMT.format(v)}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                    wrapperStyle={{ fontSize: 12 }}
                />
                <Bar
                    dataKey="ข้าราชการ"
                    fill="#1e40af"
                    stackId="a"
                    radius={[0, 0, 0, 0]}
                    animationDuration={1200}
                    animationBegin={300}
                />
                <Bar
                    dataKey="ลูกจ้างประจำ"
                    fill="#38bdf8"
                    stackId="a"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1200}
                    animationBegin={300}
                />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

// ── Conscript Donut Pie Chart ───────────────────────────────
// Pie chart showing military conscript distribution with center total
const ConscriptPieChart = ({ data }) => {
    const total = data.reduce((sum, d) => sum + d.amount, 0);

    return (
        <div className="chart-container" style={{ height: 280, position: 'relative' }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="amount"
                        nameKey="name"
                        cx="45%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={105}
                        paddingAngle={4}
                        animationDuration={1500}
                        animationBegin={200}
                    >
                        {data.map((_, i) => (
                            <Cell
                                key={i}
                                fill={DashboardData.PALETTE[i % DashboardData.PALETTE.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        layout="vertical"
                        align="right"
                        verticalAlign="middle"
                        wrapperStyle={{ fontSize: 12 }}
                    />
                </PieChart>
            </ResponsiveContainer>
            {/* Center text showing total amount */}
            <div className="donut-center">
                <div className="donut-center-label">รวม (ลบ.)</div>
                <div className="donut-center-value">
                    {DashboardData.FMT.format(total)}
                </div>
            </div>
        </div>
    );
};

// ── Budget Composed Chart (Area + Line) ─────────────────────
// Area for disbursement with gradient, dashed line for allocation
const BudgetComposedChart = ({ data }) => (
    <div className="chart-container" style={{ height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
                <defs>
                    <linearGradient id="gSpend" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0.03} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis
                    dataKey="month"
                    tick={{ fontSize: 11, fill: 'var(--text-muted)' }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    tick={{ fontSize: 11, fill: 'var(--text-muted)' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => DashboardData.FMT.format(v)}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Area
                    type="monotone"
                    dataKey="เบิกจ่าย"
                    fill="url(#gSpend)"
                    stroke="#2563eb"
                    strokeWidth={2.5}
                    animationDuration={1500}
                    animationBegin={300}
                />
                <Line
                    type="monotone"
                    dataKey="จัดสรร"
                    stroke="#10b981"
                    strokeWidth={2}
                    strokeDasharray="6 4"
                    dot={false}
                    animationDuration={1500}
                    animationBegin={300}
                />
            </ComposedChart>
        </ResponsiveContainer>
    </div>
);

// ── Certificate Horizontal Bar Chart ────────────────────────
// Vertical-layout BarChart comparing received vs approved certs
const CertBarChart = ({ data }) => (
    <div className="chart-container" style={{ height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis
                    type="number"
                    tick={{ fontSize: 11, fill: 'var(--text-muted)' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => DashboardData.FMT.format(v)}
                />
                <YAxis
                    type="category"
                    dataKey="name"
                    tick={{ fontSize: 12, fill: 'var(--text-muted)' }}
                    axisLine={false}
                    tickLine={false}
                    width={100}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar
                    dataKey="รับเรื่อง"
                    fill="#2563eb"
                    radius={[0, 4, 4, 0]}
                    animationDuration={1200}
                />
                <Bar
                    dataKey="อนุมัติ"
                    fill="#10b981"
                    radius={[0, 4, 4, 0]}
                    animationDuration={1200}
                />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

// ── Expose to global scope ──────────────────────────────────
window.CustomTooltip      = CustomTooltip;
window.WorkforceChart      = WorkforceChart;
window.ConscriptPieChart   = ConscriptPieChart;
window.BudgetComposedChart = BudgetComposedChart;
window.CertBarChart        = CertBarChart;
