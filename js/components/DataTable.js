// ═══════════════════════════════════════════════════════════
// PSMIS Dashboard — Data Table Components
// Salary & Pension tables with totals and scrollable wrappers
// ═══════════════════════════════════════════════════════════

// ── Salary Table ────────────────────────────────────────────
// Displays salary/wage breakdown with type, count, and amount
const SalaryTable = ({ data }) => {
    const totalCount  = data.reduce((sum, row) => sum + row.count, 0);
    const totalAmount = data.reduce((sum, row) => sum + row.amount, 0);

    return (
        <div
            className="data-table-wrapper custom-scrollbar"
            style={{ maxHeight: 320, overflowY: 'auto' }}
        >
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left' }}>ประเภทเงิน</th>
                        <th style={{ textAlign: 'right' }}>จำนวนราย</th>
                        <th style={{ textAlign: 'right' }}>จำนวนเงิน (ลบ.)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            <td style={{ textAlign: 'left' }}>{row.type}</td>
                            <td style={{ textAlign: 'right' }}>
                                {DashboardData.FMT.format(row.count)}
                            </td>
                            <td style={{ textAlign: 'right', color: 'var(--teal)' }}>
                                {DashboardData.FMT.format(row.amount)}
                            </td>
                        </tr>
                    ))}
                    {/* Total row */}
                    <tr className="table-total-row">
                        <td
                            style={{
                                textAlign: 'left',
                                background: 'var(--kpi-blue-bg)',
                                color: 'var(--text-accent)',
                                fontWeight: 800,
                            }}
                        >
                            รวม
                        </td>
                        <td
                            style={{
                                textAlign: 'right',
                                background: 'var(--kpi-blue-bg)',
                                color: 'var(--text-accent)',
                                fontWeight: 800,
                            }}
                        >
                            {DashboardData.FMT.format(totalCount)}
                        </td>
                        <td
                            style={{
                                textAlign: 'right',
                                background: 'var(--kpi-blue-bg)',
                                color: 'var(--text-accent)',
                                fontWeight: 800,
                            }}
                        >
                            {DashboardData.FMT.format(totalAmount)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

// ── Pension Table ───────────────────────────────────────────
// Displays pension items with colored dot indicators per row
const PensionTable = ({ data }) => {
    const totalCount  = data.reduce((sum, row) => sum + row.count, 0);
    const totalAmount = data.reduce((sum, row) => sum + row.amount, 0);

    return (
        <div
            className="data-table-wrapper custom-scrollbar"
            style={{ maxHeight: 340, overflowY: 'auto' }}
        >
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left' }}>รายการ</th>
                        <th style={{ textAlign: 'right' }}>จำนวนราย</th>
                        <th style={{ textAlign: 'right' }}>จำนวนเงิน (ลบ.)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            <td style={{ textAlign: 'left' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                }}>
                                    {/* Colored dot indicator */}
                                    <span style={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        background: DashboardData.pensionDotColors[i] || '#94a3b8',
                                        display: 'inline-block',
                                        flexShrink: 0,
                                    }} />
                                    {row.name}
                                </div>
                            </td>
                            <td style={{ textAlign: 'right' }}>
                                {DashboardData.FMT.format(row.count)}
                            </td>
                            <td style={{ textAlign: 'right', color: 'var(--pink)' }}>
                                {DashboardData.FMT.format(row.amount)}
                            </td>
                        </tr>
                    ))}
                    {/* Total row */}
                    <tr className="table-total-row">
                        <td
                            style={{
                                textAlign: 'left',
                                background: 'var(--kpi-pink-bg)',
                                color: '#9d174d',
                                fontWeight: 800,
                            }}
                        >
                            รวม
                        </td>
                        <td
                            style={{
                                textAlign: 'right',
                                background: 'var(--kpi-pink-bg)',
                                color: '#9d174d',
                                fontWeight: 800,
                            }}
                        >
                            {DashboardData.FMT.format(totalCount)}
                        </td>
                        <td
                            style={{
                                textAlign: 'right',
                                background: 'var(--kpi-pink-bg)',
                                color: '#9d174d',
                                fontWeight: 800,
                            }}
                        >
                            {DashboardData.FMT.format(totalAmount)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

// ── Expose to global scope ──────────────────────────────────
window.SalaryTable  = SalaryTable;
window.PensionTable = PensionTable;
