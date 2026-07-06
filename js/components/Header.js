// ═══════════════════════════════════════════════════════════
// PSMIS Dashboard — Header Component
// Gradient header with glassmorphism, hamburger menu, theme toggle
// ═══════════════════════════════════════════════════════════

const Header = ({ onMenuClick, onShareClick, onFileUpload }) => {
    const fileInputRef = React.useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && onFileUpload) {
            onFileUpload(file);
        }
        // Reset input so same file can be re-uploaded
        e.target.value = '';
    };

    return (
        <header className="header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
                {/* Hamburger menu (mobile only) */}
                <button className="header-menu-btn" onClick={onMenuClick} aria-label="เปิดเมนู">
                    <Ic.Menu />
                </button>

                <div style={{ minWidth: 0 }}>
                    <h1 className="header-title">
                        รายงานการเบิกจ่ายเงินเดือน ค่าจ้าง และบำเหน็จบำนาญ ประจำเดือน พฤษภาคม 2569
                    </h1>
                    <p className="header-subtitle">
                        กองบริหารการเบิกจ่ายเงินเดือน ค่าจ้าง บำเหน็จบำนาญ : กลุ่มงานวิเคราะห์และประเมินผล
                    </p>
                </div>
            </div>

            <div className="header-actions">
                {/* Upload JSON/Excel button */}
                <input
                    ref={fileInputRef}
                    type="file"
                    className="upload-input"
                    accept=".json,.xlsx,.xls"
                    onChange={handleFileChange}
                />
                <button
                    className="upload-btn"
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    title="โหลดข้อมูลจาก JSON หรือ Excel"
                >
                    <Ic.Upload />
                    <span>นำเข้าข้อมูล</span>
                </button>

                {/* Theme toggle */}
                <ThemeToggle />

                {/* Share button */}
                <button className="share-btn" onClick={onShareClick}>
                    <Ic.Share />
                    <span>แชร์ Dashboard</span>
                </button>
            </div>
        </header>
    );
};

window.Header = Header;
