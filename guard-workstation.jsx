import { useState } from "react";

const LOGO_SRC = "data:image/png;base64,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";

const T = {
  bg: "#F0EDE7", surface: "#FFFFFF", hover: "#F7F5F1",
  border: "#DDD8CF", borderLight: "#E8E4DC",
  text: "#1A1612", muted: "#6B6158", dim: "#A09686",
  accent: "#F0960E",
  green: "#1B8C3D", greenBg: "#E6F5EB", greenBorder: "#B8E0C4",
  red: "#C0392B", redBg: "#FDEAEA", redBorder: "#F0C4C4",
  blue: "#2670B3", blueBg: "#E8F0FA", blueBorder: "#B3D1EE",
  orange: "#D4820A", orangeBg: "#FFF3E0", orangeBorder: "#F0D4A0",
  grey: "#6B7280", greyBg: "#F3F4F6",
};
const ff = "'Outfit','DM Sans','Segoe UI',sans-serif";
const fm = "'IBM Plex Mono','SF Mono',monospace";

/* ─── Simple Icon ─── */
const I = ({ name, size = 24, color = T.muted }) => {
  const d = {
    user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    truck: <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
    login: <><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></>,
    logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    x: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    check: <><polyline points="20 6 9 17 4 12"/></>,
    search: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    box: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    alert: <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
    trash: <><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></>,
    camera: <><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></>,
    bell: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d[name]}</svg>;
};

/* ─── Big Button ─── */
const BigBtn = ({ children, onClick, color, bg, border, icon, style: s, disabled }) => (
    <button onClick={disabled ? undefined : onClick} style={{
      display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
      padding: "18px 28px", borderRadius: 14, border: "2px solid " + (border || color),
      background: bg || "#FFF", color: color || T.text,
      fontSize: 18, fontWeight: 700, fontFamily: ff, cursor: disabled ? "not-allowed" : "pointer",
      transition: "all 0.15s", opacity: disabled ? 0.4 : 1, width: "100%",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)", ...s,
    }}>
      {icon && <I name={icon} size={24} color={color} />}
      {children}
    </button>
);

/* ─── Slide Panel (full screen on purpose — easier for elderly) ─── */
const Panel = ({ title, children, onClose }) => (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, background: T.bg, display: "flex", flexDirection: "column", animation: "slideUp 0.2s ease" }}>
      <div style={{ padding: "16px 24px", background: T.surface, borderBottom: "2px solid " + T.border, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <span style={{ fontSize: 22, fontWeight: 800, fontFamily: ff, color: T.text }}>{title}</span>
        <button onClick={onClose} style={{ width: 48, height: 48, borderRadius: 12, background: T.redBg, border: "2px solid " + T.redBorder, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <I name="x" size={24} color={T.red} />
        </button>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: 24 }}>{children}</div>
    </div>
);

/* ─── Field display ─── */
const Field = ({ label, value, big }) => (
    <div style={{ marginBottom: big ? 20 : 14 }}>
      <div style={{ fontSize: 13, color: T.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: big ? 20 : 17, fontWeight: 700, color: T.text }}>{value}</div>
    </div>
);

/* ─── Input ─── */
const Inp = ({ label, value, onChange, placeholder, textarea, select, options }) => (
    <div style={{ marginBottom: 18 }}>
      <label style={{ display: "block", fontSize: 14, color: T.muted, fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</label>
      {select ? (
          <select value={value} onChange={e => onChange(e.target.value)} style={{ width: "100%", padding: "16px 18px", background: "#FFF", border: "2px solid " + T.border, borderRadius: 12, color: T.text, fontSize: 18, fontFamily: ff, outline: "none", appearance: "none" }}>
            {options.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
          </select>
      ) : textarea ? (
          <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={3} style={{ width: "100%", padding: "16px 18px", background: "#FFF", border: "2px solid " + T.border, borderRadius: 12, color: T.text, fontSize: 18, fontFamily: ff, outline: "none", resize: "vertical", boxSizing: "border-box" }} />
      ) : (
          <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{ width: "100%", padding: "16px 18px", background: "#FFF", border: "2px solid " + T.border, borderRadius: 12, color: T.text, fontSize: 18, fontFamily: ff, outline: "none", boxSizing: "border-box" }} />
      )}
    </div>
);

/* ═══════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════ */
export default function GuardKPP() {
  const [panel, setPanel] = useState(null);
  const [toast, setToast] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // all | people | vehicles

  const showToast = (msg, type = "success") => { setToast({ msg, type }); setTimeout(() => setToast(null), 3500); };

  /* ─── Everyone/everything currently on territory ─── */
  const [entries] = useState([
    { id: 1, type: "person", name: "Иванов Пётр Сергеевич", company: "ТОО «СтройМонтаж»", purpose: "Ремонт дробилки", host: "Каримов А.Б.", timeIn: "09:45", badge: "В-0147", doc: "Удостоверение, №034521", iin: "850412301245", siz: "Выдано на КПП", tmc: ["Ноутбук Lenovo", "Сумка с инструментами"] },
    { id: 2, type: "person", name: "Сидорова Анна Вячеславовна", company: "ИП «ТехСервис»", purpose: "Обслуживание оборудования", host: "Темирбаев Д.К.", timeIn: "11:20", badge: "В-0148", doc: "Паспорт, №N1234567", iin: "900615402158", siz: "Своё", tmc: ["Мультиметр", "Набор отвёрток"] },
    { id: 3, type: "person", name: "Козлов Дмитрий Михайлович", company: "АО «МеталлПром»", purpose: "Поставка ГСМ", host: "Жумагалиев Н.О.", timeIn: "13:05", badge: "В-0149", doc: "Удостоверение, №078654", iin: "780923501369", siz: "Выдано на КПП", tmc: [] },
    { id: 4, type: "vehicle", name: "Мухамедов Айдар Нурланович", plate: "А 123 ВС 01", vType: "БелАЗ-75131", purpose: "Вывоз породы", timeIn: "08:00", pass: "Сотрудник", cargoIn: "Пустой", cargoOut: "" },
    { id: 5, type: "vehicle", name: "Кузнецов Виталий Петрович", plate: "Н 012 ХМ 01", vType: "Автокран КС-55713", purpose: "Монтажные работы", timeIn: "11:30", pass: "#302", cargoIn: "Спецтехника (автокран)", cargoOut: "" },
    { id: 6, type: "person", name: "Нурланов Ерлан Бахтиярович", company: "ТОО «ЭнергоГрупп»", purpose: "Проверка электросети", host: "Смагулов Т.Е.", timeIn: "14:10", badge: "В-0150", doc: "Паспорт, №N9876543", iin: "880301600847", siz: "Своё", tmc: ["Тепловизор Fluke", "Планшет iPad"] },
  ]);

  const filtered = entries.filter(e => {
    if (filter === "people" && e.type !== "person") return false;
    if (filter === "vehicles" && e.type !== "vehicle") return false;
    if (search) {
      const s = search.toLowerCase();
      const fields = [e.name, e.company, e.plate, e.vType, e.badge, e.purpose].filter(Boolean).join(" ").toLowerCase();
      return fields.includes(s);
    }
    return true;
  });

  const peopleCnt = entries.filter(e => e.type === "person").length;
  const vehicleCnt = entries.filter(e => e.type === "vehicle").length;

  /* ═══ RENDER ═══ */
  return (
      <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: T.bg, fontFamily: ff, overflow: "hidden" }}>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:${T.bg}}::-webkit-scrollbar-thumb{background:${T.border};border-radius:4px}
        @keyframes slideUp{from{transform:translateY(40px);opacity:0.8}to{transform:translateY(0);opacity:1}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        select option{background:#FFF;color:${T.text};font-size:18px}
        input::placeholder,textarea::placeholder{color:${T.dim}}
      `}</style>

        {/* ═══ HEADER ═══ */}
        <div style={{ background: "#2C2420", padding: "14px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img src={LOGO_SRC} width={38} height={38} style={{ objectFit: "contain" }} alt="" />
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#F0EBE4", fontFamily: ff }}>Polymetal СБ</div>
              <div style={{ fontSize: 12, color: "#A09686", fontFamily: fm }}>КПП-1 ГЛАВНЫЙ • ОХРАННИК</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(27,140,61,0.15)", borderRadius: 10, border: "1px solid rgba(27,140,61,0.3)" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: T.green, boxShadow: "0 0 6px " + T.green + "60" }} />
              <span style={{ fontSize: 13, color: "#6BBF7E", fontFamily: fm, fontWeight: 600 }}>ОНЛАЙН</span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#F0EBE4", fontFamily: fm, letterSpacing: "0.05em" }}>14:32</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#F0960E,#6B5B4E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#FFF" }}>СБ</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#F0EBE4" }}>Серіков Б.Т.</div>
                <div style={{ fontSize: 11, color: "#A09686" }}>Дневная смена</div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ ACTION BAR ═══ */}
        <div style={{ padding: "16px 28px", background: T.surface, borderBottom: "2px solid " + T.border, display: "flex", gap: 16, alignItems: "center", flexShrink: 0 }}>
          <BigBtn color="#FFF" bg={T.green} border={T.green} icon="login" onClick={() => setPanel("entry")}
                  style={{ flex: 1, maxWidth: 320, boxShadow: "0 4px 16px rgba(27,140,61,0.25)" }}>
            ВХОД
          </BigBtn>
          <BigBtn color="#FFF" bg={T.red} border={T.red} icon="logout" onClick={() => setPanel("exitChoose")}
                  style={{ flex: 1, maxWidth: 320, boxShadow: "0 4px 16px rgba(192,57,43,0.25)" }}>
            ВЫХОД
          </BigBtn>
          <div style={{ width: 2, height: 48, background: T.border, flexShrink: 0 }} />
          <BigBtn color={T.blue} bg={T.blueBg} border={T.blueBorder} icon="truck" onClick={() => setPanel("vehicleEntry")}
                  style={{ flex: 1, maxWidth: 280 }}>
            ВЪЕЗД ТС
          </BigBtn>
        </div>

        {/* ═══ FILTER + SEARCH BAR ═══ */}
        <div style={{ padding: "14px 28px", display: "flex", gap: 12, alignItems: "center", flexShrink: 0 }}>
          {/* Filter pills */}
          {[
            { id: "all", label: "Все (" + entries.length + ")", color: T.text },
            { id: "people", label: "Люди (" + peopleCnt + ")", color: T.accent },
            { id: "vehicles", label: "Транспорт (" + vehicleCnt + ")", color: T.blue },
          ].map(f => (
              <button key={f.id} onClick={() => setFilter(f.id)} style={{
                padding: "12px 24px", borderRadius: 10, fontSize: 16, fontWeight: 700, fontFamily: ff,
                border: "2px solid " + (filter === f.id ? f.color : T.border),
                background: filter === f.id ? (f.id === "all" ? T.greyBg : f.color + "12") : T.surface,
                color: filter === f.id ? f.color : T.muted,
                cursor: "pointer", transition: "all 0.15s",
              }}>{f.label}</button>
          ))}

          <div style={{ flex: 1 }} />

          {/* Search */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: T.surface, border: "2px solid " + T.border, borderRadius: 12, padding: "10px 18px", width: 340 }}>
            <I name="search" size={22} color={T.dim} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Поиск по имени, номеру..." style={{ flex: 1, border: "none", background: "none", fontSize: 17, fontFamily: ff, color: T.text, outline: "none" }} />
            {search && <button onClick={() => setSearch("")} style={{ background: "none", border: "none", cursor: "pointer", padding: 2 }}><I name="x" size={18} color={T.dim} /></button>}
          </div>
        </div>

        {/* ═══ MAIN LIST ═══ */}
        <div style={{ flex: 1, overflow: "auto", padding: "0 28px 28px" }}>
          {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: 60, color: T.dim }}>
                <I name="search" size={48} color={T.dim} />
                <div style={{ fontSize: 20, fontWeight: 600, marginTop: 16 }}>Ничего не найдено</div>
              </div>
          )}

          {filtered.map(e => (
              <div key={e.id} onClick={() => setPanel({ type: "detail", data: e })} style={{
                background: T.surface, border: "2px solid " + T.border, borderRadius: 16,
                padding: "18px 24px", marginBottom: 12, cursor: "pointer",
                display: "flex", alignItems: "center", gap: 18,
                transition: "all 0.15s",
              }}
                   onMouseEnter={ev => { ev.currentTarget.style.borderColor = e.type === "person" ? T.accent : T.blue; ev.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"; }}
                   onMouseLeave={ev => { ev.currentTarget.style.borderColor = T.border; ev.currentTarget.style.boxShadow = "none"; }}
              >
                {/* Avatar / Icon */}
                <div style={{
                  width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                  background: e.type === "person" ? T.orangeBg : T.blueBg,
                  border: "2px solid " + (e.type === "person" ? T.orangeBorder : T.blueBorder),
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <I name={e.type === "person" ? "user" : "truck"} size={28} color={e.type === "person" ? T.orange : T.blue} />
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 19, fontWeight: 700, color: T.text, marginBottom: 4 }}>{e.name}</div>
                  {e.type === "person" ? (
                      <div style={{ fontSize: 15, color: T.muted }}>
                        {e.company} • {e.purpose}
                        {e.tmc && e.tmc.length > 0 && (
                            <span style={{ marginLeft: 10, display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 10px", background: T.orangeBg, border: "1px solid " + T.orangeBorder, borderRadius: 6, fontSize: 13, fontWeight: 600, color: T.orange }}>
                      <I name="box" size={14} color={T.orange} /> ТМЦ: {e.tmc.length}
                    </span>
                        )}
                      </div>
                  ) : (
                      <div style={{ fontSize: 15, color: T.muted }}>
                        <span style={{ fontFamily: fm, fontWeight: 700, fontSize: 17, color: T.text, letterSpacing: "0.03em" }}>{e.plate}</span>
                        <span style={{ margin: "0 8px" }}>•</span>{e.vType}
                        {e.cargoIn && <span style={{ marginLeft: 10, display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 10px", background: T.blueBg, border: "1px solid " + T.blueBorder, borderRadius: 6, fontSize: 13, fontWeight: 600, color: T.blue }}>
                    <I name="box" size={14} color={T.blue} /> Груз: {e.cargoIn}
                  </span>}
                      </div>
                  )}
                </div>

                {/* Time + badge */}
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 22, fontWeight: 800, fontFamily: fm, color: T.text }}>{e.timeIn}</div>
                  {e.type === "person" && <div style={{ fontSize: 14, fontWeight: 700, color: T.accent, background: T.orangeBg, padding: "2px 10px", borderRadius: 6, marginTop: 4, display: "inline-block", border: "1px solid " + T.orangeBorder }}>{e.badge}</div>}
                  {e.type === "vehicle" && <div style={{ fontSize: 13, fontWeight: 600, color: T.blue, marginTop: 4 }}>{e.pass}</div>}
                </div>

                {/* Quick exit button */}
                <button onClick={ev => { ev.stopPropagation(); setPanel({ type: e.type === "person" ? "exitPerson" : "exitVehicle", data: e }); }} style={{
                  width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                  background: T.redBg, border: "2px solid " + T.redBorder,
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.15s",
                }}
                        onMouseEnter={ev => { ev.currentTarget.style.background = T.red; ev.currentTarget.querySelector("svg").setAttribute("stroke", "#FFF"); }}
                        onMouseLeave={ev => { ev.currentTarget.style.background = T.redBg; ev.currentTarget.querySelector("svg").setAttribute("stroke", T.red); }}
                >
                  <I name="logout" size={24} color={T.red} />
                </button>
              </div>
          ))}
        </div>

        {/* ═══ STATUS BAR ═══ */}
        <div style={{ padding: "10px 28px", background: T.surface, borderTop: "2px solid " + T.border, display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 24 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: T.green }}>● На территории: {entries.length}</span>
            <span style={{ fontSize: 15, color: T.muted }}>Людей: {peopleCnt}</span>
            <span style={{ fontSize: 15, color: T.muted }}>Транспорт: {vehicleCnt}</span>
          </div>
          <span style={{ fontSize: 13, color: T.dim }}>01 мая 2026 • Дневная смена • КПП-1</span>
        </div>

        {/* ═══════════════════════════════════════
         PANELS
         ═══════════════════════════════════════ */}

        {/* ── ENTRY: Register person ── */}
        {panel === "entry" && (
            <Panel title="🚶 Регистрация входа — Посетитель" onClose={() => setPanel(null)}>
              <div style={{ maxWidth: 700, margin: "0 auto" }}>
                <Inp label="ФИО посетителя" placeholder="Иванов Пётр Сергеевич" value="" onChange={() => {}} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Inp label="ИИН" placeholder="850412301245" value="" onChange={() => {}} />
                  <Inp label="Документ и номер" placeholder="Удостоверение, №034521" value="" onChange={() => {}} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Inp label="Организация" placeholder="ТОО «СтройМонтаж»" value="" onChange={() => {}} />
                  <Inp label="Номер пропуска" placeholder="#302" value="" onChange={() => {}} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Inp label="Цель визита" placeholder="Ремонт дробилки" value="" onChange={() => {}} />
                  <Inp label="К кому (ФИО)" placeholder="Каримов А.Б." value="" onChange={() => {}} />
                </div>
                <Inp label="СИЗ" select options={[{ v: "own", l: "Своё" }, { v: "issued", l: "Выдано на КПП" }, { v: "no", l: "Нет" }]} value="own" onChange={() => {}} />

                {/* TMC Section */}
                <div style={{ background: T.orangeBg, border: "2px solid " + T.orangeBorder, borderRadius: 14, padding: 20, marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <I name="box" size={22} color={T.orange} />
                    <span style={{ fontSize: 18, fontWeight: 700, color: T.orange }}>ТМЦ (вещи посетителя)</span>
                  </div>
                  <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                    <input placeholder="Название предмета (напр. Ноутбук Lenovo)" style={{ flex: 1, padding: "14px 16px", border: "2px solid " + T.orangeBorder, borderRadius: 10, fontSize: 17, fontFamily: ff, outline: "none", background: "#FFF" }} />
                    <button style={{ width: 52, height: 52, borderRadius: 10, background: T.accent, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <I name="plus" size={24} color="#FFF" />
                    </button>
                  </div>
                  <div style={{ fontSize: 15, color: T.muted, fontStyle: "italic" }}>Нет записей. Добавьте ТМЦ если посетитель вносит предметы.</div>
                </div>

                <Inp label="Примечания" textarea placeholder="Дополнительная информация..." value="" onChange={() => {}} />

                <BigBtn color="#FFF" bg={T.green} border={T.green} icon="login" onClick={() => { setPanel(null); showToast("✅ Вход зарегистрирован — бейдж В-0151 выдан"); }}>
                  ЗАРЕГИСТРИРОВАТЬ ВХОД
                </BigBtn>
              </div>
            </Panel>
        )}

        {/* ── VEHICLE ENTRY ── */}
        {panel === "vehicleEntry" && (
            <Panel title="🚛 Регистрация въезда транспорта" onClose={() => setPanel(null)}>
              <div style={{ maxWidth: 700, margin: "0 auto" }}>
                <Inp label="Гос. номер" placeholder="А 123 ВС 01" value="" onChange={() => {}} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Inp label="Марка / Тип ТС" placeholder="КамАЗ-6520" value="" onChange={() => {}} />
                  <Inp label="ФИО водителя" placeholder="Мухамедов А.Н." value="" onChange={() => {}} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Inp label="Номер пропуска" placeholder="#302" value="" onChange={() => {}} />
                  <Inp label="Цель" placeholder="Завоз стройматериалов" value="" onChange={() => {}} />
                </div>

                {/* Cargo Section */}
                <div style={{ background: T.blueBg, border: "2px solid " + T.blueBorder, borderRadius: 14, padding: 20, marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <I name="box" size={22} color={T.blue} />
                    <span style={{ fontSize: 18, fontWeight: 700, color: T.blue }}>Груз при въезде</span>
                  </div>
                  <Inp label="Описание груза" textarea placeholder="Цемент 20 тонн, кирпич 500 шт..." value="" onChange={() => {}} />
                  <Inp label="Номер ТТН / накладной" placeholder="ТТН-2026-0547" value="" onChange={() => {}} />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 14, color: T.muted, fontWeight: 600, textTransform: "uppercase", marginBottom: 10 }}>Результат досмотра</div>
                  <div style={{ display: "flex", gap: 14 }}>
                    <button style={{ flex: 1, padding: 18, borderRadius: 14, border: "3px solid " + T.greenBorder, background: T.greenBg, cursor: "pointer", fontSize: 18, fontWeight: 700, color: T.green, fontFamily: ff, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                      <I name="check" size={24} color={T.green} /> Без нарушений
                    </button>
                    <button style={{ flex: 1, padding: 18, borderRadius: 14, border: "3px solid " + T.redBorder, background: T.redBg, cursor: "pointer", fontSize: 18, fontWeight: 700, color: T.red, fontFamily: ff, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                      <I name="alert" size={24} color={T.red} /> Нарушение
                    </button>
                  </div>
                </div>

                <BigBtn color="#FFF" bg={T.blue} border={T.blue} icon="login" onClick={() => { setPanel(null); showToast("✅ Въезд ТС зарегистрирован"); }}>
                  ЗАРЕГИСТРИРОВАТЬ ВЪЕЗД
                </BigBtn>
              </div>
            </Panel>
        )}

        {/* ── EXIT choose who ── */}
        {panel === "exitChoose" && (
            <Panel title="🚪 Регистрация выхода — выберите" onClose={() => setPanel(null)}>
              <div style={{ maxWidth: 700, margin: "0 auto" }}>
                <div style={{ fontSize: 18, color: T.muted, marginBottom: 20 }}>Нажмите на человека или транспорт для регистрации выхода:</div>
                {entries.map(e => (
                    <div key={e.id} onClick={() => setPanel({ type: e.type === "person" ? "exitPerson" : "exitVehicle", data: e })} style={{
                      background: T.surface, border: "2px solid " + T.border, borderRadius: 14,
                      padding: "18px 22px", marginBottom: 12, cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 16, transition: "all 0.15s",
                    }}
                         onMouseEnter={ev => ev.currentTarget.style.borderColor = T.red}
                         onMouseLeave={ev => ev.currentTarget.style.borderColor = T.border}
                    >
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: e.type === "person" ? T.orangeBg : T.blueBg, border: "2px solid " + (e.type === "person" ? T.orangeBorder : T.blueBorder), display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <I name={e.type === "person" ? "user" : "truck"} size={24} color={e.type === "person" ? T.orange : T.blue} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 18, fontWeight: 700, color: T.text }}>{e.name}</div>
                        <div style={{ fontSize: 15, color: T.muted }}>{e.type === "person" ? e.company : e.plate + " • " + e.vType}</div>
                      </div>
                      <div style={{ fontSize: 17, fontFamily: fm, fontWeight: 700, color: T.muted }}>с {e.timeIn}</div>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: T.redBg, border: "2px solid " + T.redBorder, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <I name="logout" size={22} color={T.red} />
                      </div>
                    </div>
                ))}
              </div>
            </Panel>
        )}

        {/* ── EXIT person ── */}
        {panel?.type === "exitPerson" && (
            <Panel title="🚪 Выход — " + panel.data.name onClose={() => setPanel(null)}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ background: T.surface, border: "2px solid " + T.border, borderRadius: 14, padding: 24, marginBottom: 20 }}>
          <Field big label="ФИО" value={panel.data.name} />
          <Field label="Организация" value={panel.data.company} />
  <Field label="Время входа" value={panel.data.timeIn} />
  <Field label="Бейдж" value={panel.data.badge} />
</div>

  {/* TMC check */}
  <div style={{ background: T.orangeBg, border: "2px solid " + T.orangeBorder, borderRadius: 14, padding: 20, marginBottom: 20 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      <I name="box" size={22} color={T.orange} />
      <span style={{ fontSize: 18, fontWeight: 700, color: T.orange }}>Проверка ТМЦ при выходе</span>
    </div>
    {panel.data.tmc && panel.data.tmc.length > 0 ? (
        panel.data.tmc.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#FFF", borderRadius: 10, marginBottom: 8, border: "1px solid " + T.orangeBorder }}>
              <I name="box" size={20} color={T.orange} />
              <span style={{ flex: 1, fontSize: 17, fontWeight: 600, color: T.text }}>{item}</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: T.green }}>✓ На месте</span>
            </div>
        ))
    ) : (
        <div style={{ fontSize: 16, color: T.muted }}>ТМЦ не регистрировались при входе</div>
    )}
  </div>

  <Inp label="Примечания при выходе" textarea placeholder="Дополнительная информация..." value="" onChange={() => {}} />

  <BigBtn color="#FFF" bg={T.red} border={T.red} icon="logout" onClick={() => { setPanel(null); showToast("✅ Выход " + panel.data.name + " зарегистрирован. Бейдж " + panel.data.badge + " сдан."); }}>
    ЗАРЕГИСТРИРОВАТЬ ВЫХОД
  </BigBtn>
</div>
</Panel>
)}

{/* ── EXIT vehicle ── */}
{panel?.type === "exitVehicle" && (
    <Panel title={"🚛 Выезд — " + panel.data.plate} onClose={() => setPanel(null)}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ background: T.surface, border: "2px solid " + T.border, borderRadius: 14, padding: 24, marginBottom: 20 }}>
          <Field big label="Гос. номер" value={panel.data.plate} />
          <Field label="Тип ТС" value={panel.data.vType} />
          <Field label="Водитель" value={panel.data.name} />
          <Field label="Время въезда" value={panel.data.timeIn} />
          {panel.data.cargoIn && <Field label="Груз при въезде" value={panel.data.cargoIn} />}
        </div>

        {/* Cargo out */}
        <div style={{ background: T.blueBg, border: "2px solid " + T.blueBorder, borderRadius: 14, padding: 20, marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <I name="box" size={22} color={T.blue} />
            <span style={{ fontSize: 18, fontWeight: 700, color: T.blue }}>Груз при выезде</span>
          </div>
          <Inp label="Описание груза" textarea placeholder="Что вывозит? (пустой, руда 20т, отходы...)" value="" onChange={() => {}} />
          <Inp label="ТТН / накладная" placeholder="ТТН-2026-0548" value="" onChange={() => {}} />
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, color: T.muted, fontWeight: 600, textTransform: "uppercase", marginBottom: 10 }}>Досмотр при выезде</div>
          <div style={{ display: "flex", gap: 14 }}>
            <button style={{ flex: 1, padding: 18, borderRadius: 14, border: "3px solid " + T.greenBorder, background: T.greenBg, cursor: "pointer", fontSize: 18, fontWeight: 700, color: T.green, fontFamily: ff, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <I name="check" size={24} color={T.green} /> Без нарушений
            </button>
            <button style={{ flex: 1, padding: 18, borderRadius: 14, border: "3px solid " + T.redBorder, background: T.redBg, cursor: "pointer", fontSize: 18, fontWeight: 700, color: T.red, fontFamily: ff, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <I name="alert" size={24} color={T.red} /> Нарушение
            </button>
          </div>
        </div>

        <BigBtn color="#FFF" bg={T.red} border={T.red} icon="logout" onClick={() => { setPanel(null); showToast("✅ Выезд " + panel.data.plate + " зарегистрирован"); }}>
          ЗАРЕГИСТРИРОВАТЬ ВЫЕЗД
        </BigBtn>
      </div>
    </Panel>
)}

{/* ── DETAIL (click on row) ── */}
{panel?.type === "detail" && (
    <Panel title={panel.data.type === "person" ? "👤 " + panel.data.name : "🚛 " + panel.data.plate} onClose={() => setPanel(null)}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {panel.data.type === "person" ? (<>
          <div style={{ background: T.surface, border: "2px solid " + T.border, borderRadius: 14, padding: 24, marginBottom: 20 }}>
            <Field big label="ФИО" value={panel.data.name} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <Field label="ИИН" value={panel.data.iin} />
              <Field label="Документ" value={panel.data.doc} />
              <Field label="Организация" value={panel.data.company} />
              <Field label="Цель визита" value={panel.data.purpose} />
              <Field label="К кому" value={panel.data.host} />
              <Field label="Бейдж" value={panel.data.badge} />
              <Field label="Время входа" value={panel.data.timeIn} />
              <Field label="СИЗ" value={panel.data.siz} />
            </div>
          </div>
          {panel.data.tmc && panel.data.tmc.length > 0 && (
              <div style={{ background: T.orangeBg, border: "2px solid " + T.orangeBorder, borderRadius: 14, padding: 20, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <I name="box" size={22} color={T.orange} />
                  <span style={{ fontSize: 18, fontWeight: 700, color: T.orange }}>ТМЦ при входе ({panel.data.tmc.length})</span>
                </div>
                {panel.data.tmc.map((item, i) => (
                    <div key={i} style={{ padding: "12px 16px", background: "#FFF", borderRadius: 10, marginBottom: 6, fontSize: 17, fontWeight: 600, color: T.text, border: "1px solid " + T.orangeBorder }}>
                      {i + 1}. {item}
                    </div>
                ))}
              </div>
          )}
        </>) : (<>
          <div style={{ background: T.surface, border: "2px solid " + T.border, borderRadius: 14, padding: 24, marginBottom: 20 }}>
            <Field big label="Гос. номер" value={panel.data.plate} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <Field label="Тип ТС" value={panel.data.vType} />
              <Field label="Водитель" value={panel.data.name} />
              <Field label="Время въезда" value={panel.data.timeIn} />
              <Field label="Пропуск" value={panel.data.pass} />
              <Field label="Цель" value={panel.data.purpose} />
              {panel.data.cargoIn && <Field label="Груз при въезде" value={panel.data.cargoIn} />}
            </div>
          </div>
        </>)}

        <BigBtn color="#FFF" bg={T.red} border={T.red} icon="logout"
                onClick={() => setPanel({ type: panel.data.type === "person" ? "exitPerson" : "exitVehicle", data: panel.data })}>
          ЗАРЕГИСТРИРОВАТЬ ВЫХОД
        </BigBtn>
      </div>
    </Panel>
)}

{/* ═══ TOAST ═══ */}
{toast && (
    <div style={{
      position: "fixed", bottom: 30, left: "50%", transform: "translateX(-50%)", zIndex: 3000,
      background: toast.type === "danger" ? T.redBg : T.greenBg,
      border: "3px solid " + (toast.type === "danger" ? T.redBorder : T.greenBorder),
      borderRadius: 16, padding: "20px 36px",
      fontSize: 20, fontWeight: 700, color: toast.type === "danger" ? T.red : T.green,
      fontFamily: ff, boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
      animation: "fadeIn 0.3s ease", textAlign: "center", maxWidth: 600,
    }}>
      {toast.msg}
    </div>
)}
</div>
);
}
