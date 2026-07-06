// ═══════════════════════════════════════════════════════════
// PSMIS Dashboard — Data Module
// ข้อมูลทั้งหมดจากเดิม + ฟังก์ชันโหลดข้อมูลจากภายนอก
// ═══════════════════════════════════════════════════════════

const DashboardData = (() => {

    // ── ข้อมูลอัตรากำลัง ──
    const workforceData = [
        { name: 'ตำรวจ',       ข้าราชการ: 361424, ลูกจ้างประจำ: 749 },
        { name: 'ทหาร',        ข้าราชการ: 495783, ลูกจ้างประจำ: 17798 },
        { name: 'พลเรือน',     ข้าราชการ: 485135, ลูกจ้างประจำ: 25868 },
        { name: 'มหาวิทยาลัย', ข้าราชการ: 13642,  ลูกจ้างประจำ: 2549 },
        { name: 'ครู/บุคลากร', ข้าราชการ: 454507, ลูกจ้างประจำ: 5574 },
    ];

    // ── ข้อมูลเงินเดือนและค่าจ้าง ──
    const salaryData = [
        { type: 'เงินเดือน รอบ 1',     count: 11353,   amount: 171.77 },
        { type: 'เงินเดือน รอบ 2',     count: 1319041, amount: 48952.15 },
        { type: 'ค่าจ้างประจำ รอบ 1',  count: 127,     amount: 1.03 },
        { type: 'ค่าจ้างประจำ รอบ 2',  count: 29265,   amount: 985.15 },
        { type: 'กบข. รอบ 1',          count: 9927,    amount: 29.36 },
        { type: 'กบข. รอบ 2',          count: 1219224, amount: 4368.49 },
        { type: 'กสจ. รอบ 1',          count: 117,     amount: 0.14 },
        { type: 'กสจ. รอบ 2',          count: 25286,   amount: 53.59 },
        { type: 'กยศ.ข้าราชการ',       count: 192922,  amount: 206.92 },
        { type: 'กยศ.ลูกจ้าง',         count: 88,      amount: 0.07 },
    ];

    // ── ข้อมูลทหารกองประจำการ ──
    const conscriptData = [
        { name: 'สป.กลาโหม',     count: 1206,   amount: 9.67 },
        { name: 'กองทัพบก',       count: 105310, amount: 848.83 },
        { name: 'กองทัพเรือ',     count: 18686,  amount: 152.36 },
        { name: 'กองทัพอากาศ',    count: 9446,   amount: 75.45 },
        { name: 'บก.กองทัพไทย',   count: 1268,   amount: 10.16 },
    ];

    // ── ข้อมูลงบกลาง ──
    const budgetData = [
        { month: 'ต.ค.68',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 39476.68 },
        { month: 'พ.ย.68',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 73338.64 },
        { month: 'ธ.ค.68',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 107183.05 },
        { month: 'ม.ค.69',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 140911.26 },
        { month: 'ก.พ.69',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 174477.18 },
        { month: 'มี.ค.69', งบประมาณ: 364288.75, จัดสรร: 273216.56, เบิกจ่าย: 208003.79 },
        { month: 'เม.ย.69', งบประมาณ: 364288.75, จัดสรร: 273726.38, เบิกจ่าย: 241722.48 },
        { month: 'พ.ค.69',  งบประมาณ: 364288.75, จัดสรร: 364288.75, เบิกจ่าย: 274726.38 },
    ];

    // ── ข้อมูลบำนาญ ──
    const pensionData = [
        { name: 'เบี้ยหวัด',                                              count: 5820,   amount: 78.92 },
        { name: 'บำเหน็จปกติ',                                             count: 62,     amount: 28.07 },
        { name: 'บำนาญปกติ',                                               count: 916349, amount: 28720.06 },
        { name: 'บำนาญพิเศษ',                                              count: 9018,   amount: 88.72 },
        { name: 'บำเหน็จตกทอด',                                            count: 4678,   amount: 731.74 },
        { name: 'บำเหน็จลูกจ้าง',                                          count: 18,     amount: 3.47 },
        { name: 'บำนาญตกทอด',                                              count: 113,    amount: 1.07 },
        { name: 'บำเหน็จดำรงชีพ',                                          count: 7611,   amount: 1140.49 },
        { name: 'บำนาญข้าราชการการเมือง',                                   count: 25,     amount: 0.34 },
        { name: 'มาตรการพัฒนาและบริหารกำลังคนฯ',                            count: 2,      amount: 1.35 },
        { name: 'บำนาญพิเศษเหตุทุพพลภาพอาสาสมัคร',                         count: 526,    amount: 9.00 },
        { name: 'บำเหน็จปกติลูกจ้างตาย',                                    count: 11,     amount: 11.00 },
        { name: 'บำนาญพิเศษเหตุทุพพลภาพ',                                  count: 1044,   amount: 16.36 },
        { name: 'บำนาญพิเศษอาสาสมัครตาย',                                   count: 1051,   amount: 11.05 },
        { name: 'บำเหน็จรายเดือน',                                          count: 107446, amount: 1902.16 },
        { name: 'บำเหน็จพิเศษรายเดือน',                                     count: 1,      amount: 0.04 },
        { name: 'บำเหน็จตกทอดผู้รับเหน็จรายเดือน/บำเหน็จพิเศษรายเดือน',      count: 384,    amount: 22.30 },
        { name: 'บำเหน็จตกทอดค้ำประกัน',                                     count: 2451,   amount: 1661.83 },
        { name: 'บำเหน็จตกทอดค้ำประกันลูกจ้าง',                              count: 108,    amount: 25.42 },
        { name: 'เงินทำขวัญ',                                               count: 1,      amount: 0.22 },
    ];

    // ── ข้อมูลหนังสือรับรอง ──
    const certData = [
        { name: 'กรมบัญชีกลาง',  รับเรื่อง: 3700, อนุมัติ: 3656 },
        { name: 'สถาบันการเงิน', รับเรื่อง: 2616, อนุมัติ: 2561 },
    ];

    // ── ข้อมูลเงินสงเคราะห์ ──
    const welfareData = [
        { label: 'อนุมัติจ่าย (ราย)',                               value: 0,     icon: '👤', color: '#1e40af', bg: 'var(--kpi-blue-bg)' },
        { label: 'เงินชดเชย (ล้านบาท)',                             value: 0,     icon: '💰', color: '#0891b2', bg: 'var(--kpi-teal-bg)' },
        { label: 'เงินดำรงชีพ (ล้านบาท)',                           value: 0,     icon: '🏠', color: '#059669', bg: 'var(--kpi-green-bg)' },
        { label: 'เงินชดเชยรพหว่างพักรักษาตัวที่ รพ. (ล้านบาท)',    value: 0.612, icon: '🏥', color: '#db2777', bg: 'var(--kpi-pink-bg)' },
    ];

    // ── Chart Palette ──
    const PALETTE = ['#1e40af', '#3b82f6', '#0ea5e9', '#38bdf8', '#7dd3fc'];

    // ── Number Formatter ──
    const FMT = new Intl.NumberFormat('th-TH', { maximumFractionDigits: 2 });

    // ── KPI Summary Calculations ──
    const getKpiSummary = (data) => {
        const d = data || { workforceData, salaryData, conscriptData, budgetData };
        return {
            totalWorkforce:  d.workforceData.reduce((a, row) => a + row.ข้าราชการ + row.ลูกจ้างประจำ, 0),
            totalSalary:     d.salaryData.reduce((a, row) => a + row.amount, 0),
            totalConscript:  d.conscriptData.reduce((a, row) => a + row.amount, 0),
            latestBudget:    d.budgetData[d.budgetData.length - 1].เบิกจ่าย,
        };
    };

    // ── Load JSON from URL ──
    const loadFromJSON = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to load JSON');
            return await response.json();
        } catch (err) {
            console.error('Error loading JSON:', err);
            return null;
        }
    };

    // ── Load Excel file (requires SheetJS/xlsx) ──
    const loadFromExcel = (file) => {
        return new Promise((resolve, reject) => {
            if (!window.XLSX) {
                reject(new Error('SheetJS library not loaded'));
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const workbook = XLSX.read(e.target.result, { type: 'array' });
                    const result = {};
                    workbook.SheetNames.forEach(name => {
                        result[name] = XLSX.utils.sheet_to_json(workbook.Sheets[name]);
                    });
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    };

    // ── Topics configuration ──
    const topics = [
        { id: 't1', label: 'อัตรากำลัง ขรก./ลจ.',       iconKey: 'People' },
        { id: 't2', label: 'จ่ายตรงเงินเดือน ขรก./ลจ.', iconKey: 'Money' },
        { id: 't3', label: 'จ่ายตรงทหารกองประจำการ',     iconKey: 'Shield' },
        { id: 't4', label: 'การจ่ายงบกลาง',              iconKey: 'TrendUp' },
        { id: 't5', label: 'จ่ายตรงบำนาญและเงินอื่น',   iconKey: 'Heart' },
        { id: 't6', label: 'การออกหนังสือรับรอง',        iconKey: 'Doc' },
        { id: 't7', label: 'การจ่ายเงินสงเคราะห์',      iconKey: 'Gift' },
    ];

    // ── Pension dot colors ──
    const pensionDotColors = [
        '#1e40af', '#3b82f6', '#0ea5e9', '#38bdf8', '#10b981',
        '#db2777', '#7c3aed', '#f59e0b', '#94a3b8', '#ef4444',
        '#06b6d4', '#8b5cf6', '#f97316', '#14b8a6', '#ec4899',
        '#6366f1', '#84cc16', '#a855f7', '#22d3ee', '#f43f5e'
    ];

    return {
        workforceData,
        salaryData,
        conscriptData,
        budgetData,
        pensionData,
        certData,
        welfareData,
        PALETTE,
        FMT,
        topics,
        pensionDotColors,
        getKpiSummary,
        loadFromJSON,
        loadFromExcel,
    };
})();
