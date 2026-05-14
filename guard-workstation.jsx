import { useState } from "react";

/* ─── Logo ─── */
const LOGO_SRC = "data:image/png;base64,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";
const Logo = ({ size = 36 }) => <img src={LOGO_SRC} width={size} height={size} style={{ objectFit: "contain" }} alt="PM" />;

const T = {
  bg: "#F3F1EC", surface: "#FFFFFF", card: "#FFFFFF", cardHover: "#F9F7F3",
  border: "#E2DDD5", borderLight: "#EBE7E0",
  text: "#1A1612", textSec: "#4A4238", textMuted: "#8A8078", textDim: "#B0A89E",
  accent: "#F0960E", accentDim: "rgba(240,150,14,0.10)", accentBorder: "rgba(240,150,14,0.25)",
  slate: "#3D4F5F", slateDim: "rgba(61,79,95,0.08)",
  warning: "#B8860B", warningDim: "rgba(184,134,11,0.08)",
  danger: "#B33A3A", dangerDim: "rgba(179,58,58,0.08)",
  success: "#2D7D46", successDim: "rgba(45,125,70,0.08)",
  earth: "#6B5B4E", earthDim: "rgba(107,91,78,0.08)",
  sidebarBg: "#1E1A16", sidebarText: "#C8BEB4", sidebarActive: "rgba(240,150,14,0.15)",
};
const fd = "'Outfit','DM Sans',sans-serif", fm = "'IBM Plex Mono','SF Mono',monospace", fb = "'DM Sans','Segoe UI',sans-serif";

const Icon = ({ name, size = 20, color = T.textMuted }) => {
  const p = {
    gate:<><rect x="3" y="3" width="7" height="18" rx="1"/><rect x="14" y="3" width="7" height="18" rx="1"/><line x1="10" y1="12" x2="14" y2="12"/></>,
    visitors:<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    pass:<><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M7 15h4"/></>,
    car:<><path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M5 17v2m14-2v2"/><circle cx="8" cy="14" r="1.5"/><circle cx="16" cy="14" r="1.5"/></>,
    key:<><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></>,
    shield:<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
    search:<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    bell:<><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>,
    plus:<><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    check:<><polyline points="20 6 9 17 4 12"/></>,
    x:<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    chevron:<><polyline points="9 18 15 12 9 6"/></>,
    user:<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    logout:<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
    clock:<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    eye:<><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    scan:<><path d="M4 7V4h3"/><path d="M17 4h3v3"/><path d="M20 17v3h-3"/><path d="M7 20H4v-3"/><line x1="4" y1="12" x2="20" y2="12"/></>,
    truck:<><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
    alert:<><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
    camera:<><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></>,
    upload:<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></>,
    doorOpen:<><path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561z"/></>,
    userCheck:<><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></>,
    ban:<><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{p[name]}</svg>;
};

const Badge = ({children,color=T.accent,bg}) => <span style={{display:"inline-flex",alignItems:"center",padding:"3px 10px",borderRadius:5,fontSize:11,fontFamily:fm,fontWeight:600,color,background:bg||color+"12",border:"1px solid "+color+"20"}}>{children}</span>;
const StatusDot = ({color}) => <span style={{width:8,height:8,borderRadius:"50%",background:color,display:"inline-block",boxShadow:"0 0 0 3px "+color+"20"}}/>;

const Btn = ({children,onClick,variant="primary",icon,small,big,style:s,disabled}) => {
  const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,border:"none",cursor:disabled?"not-allowed":"pointer",fontFamily:fb,fontWeight:600,borderRadius:10,transition:"all 0.2s",fontSize:big?16:small?12:14,padding:big?"16px 28px":small?"6px 14px":"10px 20px",boxShadow:"0 1px 2px rgba(0,0,0,0.06)",opacity:disabled?0.5:1};
  const v={primary:{background:T.accent,color:"#FFF"},secondary:{background:T.bg,color:T.textSec,border:"1px solid "+T.border},danger:{background:T.dangerDim,color:T.danger,border:"1px solid "+T.danger+"25"},success:{background:T.success,color:"#FFF"},ghost:{background:"transparent",color:T.textMuted,border:"1px solid "+T.border,boxShadow:"none"}};
  return <button onClick={disabled?undefined:onClick} style={{...base,...v[variant],...s}}>{icon&&<Icon name={icon} size={big?20:small?14:16} color={variant==="primary"||variant==="success"?"#FFF":v[variant].color}/>}{children}</button>;
};

const Input = ({label,value,onChange,placeholder,type="text",textarea,select,options,big}) => (
  <div style={{marginBottom:big?20:16}}>
    {label&&<label style={{display:"block",fontSize:big?12:11,color:T.textMuted,marginBottom:big?8:6,fontFamily:fm,letterSpacing:"0.05em",textTransform:"uppercase",fontWeight:500}}>{label}</label>}
    {select?<select value={value} onChange={e=>onChange(e.target.value)} style={{width:"100%",padding:big?"14px 16px":"10px 14px",background:T.bg,border:"1px solid "+T.border,borderRadius:big?10:8,color:T.text,fontSize:big?16:14,fontFamily:fb,outline:"none",appearance:"none"}}>{options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select>
    :textarea?<textarea value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} rows={3} style={{width:"100%",padding:"10px 14px",background:T.bg,border:"1px solid "+T.border,borderRadius:8,color:T.text,fontSize:14,fontFamily:fb,outline:"none",resize:"vertical",boxSizing:"border-box"}}/>
    :<input type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={{width:"100%",padding:big?"14px 16px":"10px 14px",background:T.bg,border:"1px solid "+T.border,borderRadius:big?10:8,color:T.text,fontSize:big?16:14,fontFamily:fb,outline:"none",boxSizing:"border-box"}}/>}
  </div>
);

const SlideOver = ({title,children,onClose,wide}) => (
  <div style={{position:"fixed",inset:0,zIndex:1000,display:"flex",justifyContent:"flex-end"}} onClick={onClose}>
    <div style={{position:"absolute",inset:0,background:"rgba(30,26,22,0.35)",backdropFilter:"blur(4px)"}}/>
    <div onClick={e=>e.stopPropagation()} style={{position:"relative",width:wide?640:460,maxWidth:"94vw",height:"100vh",background:T.surface,borderLeft:"1px solid "+T.border,boxShadow:"-8px 0 40px rgba(30,26,22,0.15)",display:"flex",flexDirection:"column",animation:"slideRight 0.25s ease"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 22px",borderBottom:"1px solid "+T.border,flexShrink:0}}>
        <h3 style={{margin:0,fontSize:17,fontFamily:fd,color:T.text,fontWeight:700}}>{title}</h3>
        <button onClick={onClose} style={{background:T.bg,border:"1px solid "+T.border,borderRadius:8,cursor:"pointer",padding:6,display:"flex"}}><Icon name="x" size={16} color={T.textMuted}/></button>
      </div>
      <div style={{flex:1,overflow:"auto",padding:22}}>{children}</div>
    </div>
  </div>
);

const DetailFields = ({fields}) => (
  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
    {fields.map(([l,v,c],i)=><div key={i}><div style={{fontSize:10,color:T.textDim,fontFamily:fm,textTransform:"uppercase",marginBottom:4,letterSpacing:"0.05em"}}>{l}</div><div style={{fontSize:14,color:c||T.text,fontWeight:600,fontFamily:fb}}>{v}</div></div>)}
  </div>
);

const Table = ({columns,data,onRowClick}) => (
  <div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",fontFamily:fb,fontSize:13}}>
    <thead><tr>{columns.map(c=><th key={c.key} style={{textAlign:"left",padding:"12px 14px",color:T.textDim,fontSize:10,fontFamily:fm,letterSpacing:"0.08em",textTransform:"uppercase",borderBottom:"2px solid "+T.border,fontWeight:600,background:T.bg}}>{c.label}</th>)}</tr></thead>
    <tbody>{data.map((row,i)=><tr key={i} onClick={()=>onRowClick&&onRowClick(row)} style={{cursor:onRowClick?"pointer":"default",transition:"background 0.15s"}} onMouseEnter={e=>e.currentTarget.style.background=T.cardHover} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>{columns.map(c=><td key={c.key} style={{padding:"12px 14px",borderBottom:"1px solid "+T.borderLight,color:T.text}}>{c.render?c.render(row[c.key],row):row[c.key]}</td>)}</tr>)}</tbody>
  </table></div>
);

/* ═══ TABS ═══ */
const TABS = { LIVE: "live", PASSES: "passes", ACCESS: "access", VEHICLES: "vehicles" };

/* ═══ MAIN ═══ */
export default function GuardWorkstation() {
  const [tab, setTab] = useState(TABS.LIVE);
  const [panel, setPanel] = useState(null);
  const [toast, setToast] = useState(null);
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const showToast = (msg, type = "success") => { setToast({ msg, type }); setTimeout(() => setToast(null), 3000); };

  const now = new Date();
  const timeStr = "14:32";

  const tabs = [
    { id: TABS.LIVE, label: "Проходная", icon: "gate", badge: 3 },
    { id: TABS.PASSES, label: "Пропуска КПП", icon: "pass" },
    { id: TABS.ACCESS, label: "Доступы сотрудников", icon: "key" },
    { id: TABS.VEHICLES, label: "Транспорт", icon: "car" },
  ];

  /* ─── All visitors today ─── */
  const allVisitorsToday = [
    { id: 1, name: "Иванов Пётр С.", iin: "850412301245", company: "ТОО «СтройМонтаж»", purpose: "Ремонт дробилки", host: "Каримов А.Б.", timeIn: "09:45", timeOut: "—", badge: "В-0147", doc: "Удостоверение", siz: "Выдано", photo: true, onSite: true },
    { id: 2, name: "Сидорова Анна В.", iin: "900615402158", company: "ИП «ТехСервис»", purpose: "Обслуживание оборудования", host: "Темирбаев Д.К.", timeIn: "11:20", timeOut: "—", badge: "В-0148", doc: "Паспорт", siz: "Своё", photo: true, onSite: true },
    { id: 3, name: "Козлов Дмитрий М.", iin: "780923501369", company: "АО «МеталлПром»", purpose: "Поставка ГСМ", host: "Жумагалиев Н.О.", timeIn: "13:05", timeOut: "—", badge: "В-0149", doc: "Удостоверение", siz: "Выдано", photo: false, onSite: true },
    { id: 4, name: "Ли Виктор С.", iin: "920714501258", company: "ТОО «АвтоТранс»", purpose: "Доставка запчастей", host: "Каримов А.Б.", timeIn: "08:30", timeOut: "09:15", badge: "В-0140", doc: "Удостоверение", siz: "Своё", photo: true, onSite: false },
    { id: 5, name: "Нурланов Ерлан Б.", iin: "880301600847", company: "ТОО «ЭнергоГрупп»", purpose: "Проверка электросети", host: "Смагулов Т.Е.", timeIn: "08:50", timeOut: "11:45", badge: "В-0141", doc: "Паспорт", siz: "Выдано", photo: true, onSite: false },
    { id: 6, name: "Омаров Бакыт Т.", iin: "790520301456", company: "ИП «ПромСнаб»", purpose: "Поставка спецодежды", host: "Мусин Р.Т.", timeIn: "09:00", timeOut: "09:40", badge: "В-0142", doc: "Удостоверение", siz: "Своё", photo: false, onSite: false },
    { id: 7, name: "Кузнецов Виталий П.", iin: "850101501234", company: "АО «КранСервис»", purpose: "Обслуживание автокрана", host: "Темирбаев Д.К.", timeIn: "09:10", timeOut: "12:30", badge: "В-0143", doc: "Паспорт", siz: "Выдано", photo: true, onSite: false },
    { id: 8, name: "Ахметова Гульнара С.", iin: "910305402589", company: "ТОО «ЛабТест»", purpose: "Отбор проб воды", host: "Жумагалиев Н.О.", timeIn: "10:00", timeOut: "11:00", badge: "В-0144", doc: "Удостоверение", siz: "Своё", photo: true, onSite: false },
    { id: 9, name: "Петренко Игорь В.", iin: "830712501478", company: "ТОО «ТехРемонт»", purpose: "Ремонт конвейера", host: "Каримов А.Б.", timeIn: "10:30", timeOut: "13:15", badge: "В-0145", doc: "Паспорт", siz: "Выдано", photo: true, onSite: false },
    { id: 10, name: "Тастанбеков Нурлан М.", iin: "870215601789", company: "ТОО «СтройМонтаж»", purpose: "Ремонт дробилки", host: "Каримов А.Б.", timeIn: "09:45", timeOut: "12:00", badge: "В-0146", doc: "Удостоверение", siz: "Выдано", photo: false, onSite: false },
    { id: 11, name: "Жангозин Берик К.", iin: "860930501357", company: "ИП «СварМастер»", purpose: "Сварочные работы", host: "Темирбаев Д.К.", timeIn: "08:15", timeOut: "10:00", badge: "В-0138", doc: "Удостоверение", siz: "Своё", photo: true, onSite: false },
    { id: 12, name: "Исмаилов Руслан Д.", iin: "900818501963", company: "ТОО «ЭлектроМонтаж»", purpose: "Прокладка кабеля", host: "Смагулов Т.Е.", timeIn: "08:20", timeOut: "13:00", badge: "В-0139", doc: "Паспорт", siz: "Выдано", photo: true, onSite: false },
    { id: 13, name: "Мухамедов Айдар Н.", iin: "880505601234", company: "Сотрудник", purpose: "Доставка руды", host: "—", timeIn: "08:00", timeOut: "—", badge: "—", doc: "—", siz: "Своё", photo: true, onSite: true, isVehicle: true, plate: "А 123 ВС 01", vType: "БелАЗ-75131" },
    { id: 14, name: "Кузнецов В.П.", iin: "750312501111", company: "АО «КранСервис»", purpose: "Спецтехника", host: "Темирбаев Д.К.", timeIn: "11:30", timeOut: "—", badge: "—", doc: "—", siz: "—", photo: false, onSite: true, isVehicle: true, plate: "Н 012 ХМ 01", vType: "Автокран КС-55713" },
  ];

  /* ─── Vehicle log today ─── */
  const vehicleLogToday = [
    { plate: "А 123 ВС 01", driver: "Мухамедов А.Н.", type: "БелАЗ-75131", dir: "Въезд", time: "08:00", cargo: "Порода (пустая)", pass: "Сотрудник", status: "passed", notes: "Без замечаний" },
    { plate: "К 456 ВА 01", driver: "Петренко И.В.", type: "КамАЗ-6520", dir: "Выезд", time: "13:20", cargo: "Руда медная", pass: "#301", status: "violation", notes: "Перегруз 2т" },
    { plate: "В 789 СТ 01", driver: "Жарылгасинов Т.С.", type: "Toyota LC 200", dir: "Въезд", time: "12:50", cargo: "—", pass: "Сотрудник", status: "passed", notes: "—" },
    { plate: "Н 012 ХМ 01", driver: "Кузнецов В.П.", type: "Автокран КС-55713", dir: "Въезд", time: "11:30", cargo: "Спецтехника", pass: "#302", status: "passed", notes: "Разрешение ОК" },
    { plate: "М 345 РО 01", driver: "Ахметова Г.С.", type: "Газель", dir: "Въезд", time: "10:15", cargo: "Спецодежда", pass: "#299", status: "passed", notes: "—" },
    { plate: "М 345 РО 01", driver: "Ахметова Г.С.", type: "Газель", dir: "Выезд", time: "10:45", cargo: "Пустой", pass: "#299", status: "passed", notes: "—" },
    { plate: "Т 678 АА 01", driver: "Сулейменов Д.Б.", type: "МАЗ-5516", dir: "Въезд", time: "09:30", cargo: "Цемент 20т", pass: "#301", status: "passed", notes: "ТТН проверена" },
    { plate: "Т 678 АА 01", driver: "Сулейменов Д.Б.", type: "МАЗ-5516", dir: "Выезд", time: "10:00", cargo: "Пустой", pass: "#301", status: "passed", notes: "—" },
  ];

  /* ─── Violations today ─── */
  const violationsToday = [
    { time: "13:20", type: "Перегруз", subject: "КамАЗ г/н К456ВА — Петренко И.В.", detail: "Перегруз 2т сверх нормы. Руда медная.", severity: "high", actN: "АКТ-0047" },
  ];

  const liveVisitors = allVisitorsToday.filter(v => v.onSite && !v.isVehicle);

  /* ─── KPP Passes ─── */
  const passes = [
    { id: "#302", type: "people", persons: "Петров И.В., Сидоров А.К., Ким В.С.", count: 3, requester: "Литвинов А.К.", dept: "Горный цех", dateFrom: "01.05", dateTo: "15.05", status: "active", approved: "Ахметов К.Б.", reason: "Подрядные работы — ремонт дробилки" },
    { id: "#301", type: "vehicle", persons: "КамАЗ-6520 г/н А456ВС", count: 1, requester: "Касымова Н.Р.", dept: "Логистика", dateFrom: "01.05", dateTo: "03.05", status: "active", approved: "Ахметов К.Б.", reason: "Завоз стройматериалов" },
    { id: "#300", type: "people", persons: "Нурланов Е.Б.", count: 1, requester: "Бектуров С.А.", dept: "АХО", dateFrom: "30.04", dateTo: "30.04", status: "expired", approved: "Ахметов К.Б.", reason: "Обслуживание вентиляции" },
    { id: "#299", type: "people", persons: "Ли В.С., Омаров Б.Т.", count: 2, requester: "Мусин Р.Т.", dept: "IT", dateFrom: "28.04", dateTo: "30.04", status: "expired", approved: "Ахметов К.Б.", reason: "Настройка АСУТП" },
    { id: "#298", type: "vehicle", persons: "Газель г/н М345РО", count: 1, requester: "Жангозин Б.К.", dept: "Склад", dateFrom: "28.04", dateTo: "28.04", status: "revoked", approved: "—", reason: "Вывоз масла — отменено" },
  ];

  /* ─── Employee Access ─── */
  const employees = [
    { tabN: "PM-00142", name: "Серіков Бауыржан Т.", position: "Механик", dept: "Горный цех", access: "Карьер, Цех №1, Склад", level: "standard", card: "4521-0142", status: "active", photo: true, shift: "Дневная", phone: "+7 701 111 2233" },
    { tabN: "PM-00156", name: "Қасымов Ерлан Р.", position: "Нач. смены", dept: "Обогатительная фабрика", access: "Полный доступ", level: "extended", card: "4521-0156", status: "active", photo: true, shift: "Дневная", phone: "+7 702 222 3344" },
    { tabN: "PM-00289", name: "Мусин Рустем Т.", position: "Электрик", dept: "Энергослужба", access: "Подстанция, Цех №1-3", level: "standard", card: "4521-0289", status: "active", photo: true, shift: "Ночная", phone: "+7 705 333 4455" },
    { tabN: "PM-00215", name: "Жуматаев Арман К.", position: "Водитель БелАЗ", dept: "Горный цех", access: "Карьер, ГСМ", level: "standard", card: "4521-0215", status: "blocked", photo: true, shift: "—", phone: "+7 707 444 5566" },
    { tabN: "PM-00312", name: "Бисенов Даулет Н.", position: "Лаборант", dept: "Лаборатория", access: "Лаборатория, Фабрика", level: "limited", card: "4521-0312", status: "active", photo: true, shift: "Дневная", phone: "+7 708 555 6677" },
    { tabN: "PM-00401", name: "Алиева Марина С.", position: "Бухгалтер", dept: "Бухгалтерия", access: "Офис", level: "limited", card: "4521-0401", status: "active", photo: false, shift: "Дневная", phone: "+7 771 666 7788" },
  ];

  /* ─── Vehicles log ─── */
  const vehicles = [
    { plate: "А 123 ВС 01", driver: "Мухамедов А.Н.", type: "БелАЗ-75131", dir: "Въезд", time: "13:47", cargo: "Порода (пустая)", pass: "#301", status: "passed", notes: "Без замечаний" },
    { plate: "К 456 ВА 01", driver: "Петренко И.В.", type: "КамАЗ-6520", dir: "Выезд", time: "13:20", cargo: "Руда медная", pass: "#301", status: "violation", notes: "Перегруз 2т" },
    { plate: "В 789 СТ 01", driver: "Жарылгасинов Т.С.", type: "Toyota LC 200", dir: "Въезд", time: "12:50", cargo: "—", pass: "Сотрудник", status: "passed", notes: "—" },
    { plate: "Н 012 ХМ 01", driver: "Кузнецов В.П.", type: "Автокран КС-55713", dir: "Въезд", time: "11:30", cargo: "Спецтехника", pass: "#302", status: "passed", notes: "Разрешение ОК" },
  ];

  const NOTIFS = [
    { text: "Пропуск #300 истёк — Нурланов Е.Б. ещё на территории", time: "2 мин", color: T.danger },
    { text: "Перегруз КамАЗ г/н К456ВА — акт составлен", time: "15 мин", color: T.warning },
    { text: "Карта PM-00215 заблокирована — Жуматаев А.К.", time: "30 мин", color: T.danger },
    { text: "Въезд спецтехники — автокран КС-55713", time: "1 ч", color: T.slate },
  ];

  /* ═══ PAGES ═══ */

  /* ── Live (Проходная) ── */
  const LivePage = () => {
    const [liveFilter, setLiveFilter] = useState("onsite");
    const statCards = [
      { id: "onsite", icon: "visitors", label: "На территории", value: String(allVisitorsToday.filter(v => v.onSite).length), color: T.success },
      { id: "today", icon: "clock", label: "Вошли сегодня", value: String(allVisitorsToday.filter(v => !v.isVehicle).length), color: T.accent },
      { id: "vehicles", icon: "car", label: "ТС за смену", value: String(vehicleLogToday.length), color: T.slate },
      { id: "violations", icon: "alert", label: "Нарушений", value: String(violationsToday.length), color: T.danger },
    ];
    const tableTitle = { onsite: "Сейчас на территории", today: "Все посетители сегодня", vehicles: "Транспорт за смену", violations: "Нарушения за смену" };
    const tableIcon = { onsite: T.success, today: T.accent, vehicles: T.slate, violations: T.danger };

    return (
    <div>
      {/* Quick Actions */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 24 }}>
        <button onClick={() => setPanel({ type: "registerVisitor" })} style={{
          background: T.accent, border: "none", borderRadius: 14, padding: "24px 20px",
          cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          boxShadow: "0 4px 16px " + T.accent + "30", transition: "transform 0.15s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
        >
          <Icon name="plus" size={28} color="#FFF" />
          <span style={{ fontSize: 15, fontWeight: 700, color: "#FFF", fontFamily: fd }}>Зарегистрировать вход</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Новый посетитель / подрядчик</span>
        </button>
        <button onClick={() => setPanel({ type: "scanPass" })} style={{
          background: T.surface, border: "2px solid " + T.accent + "30", borderRadius: 14, padding: "24px 20px",
          cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          transition: "all 0.15s",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = T.accent + "30"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <Icon name="scan" size={28} color={T.accent} />
          <span style={{ fontSize: 15, fontWeight: 700, color: T.text, fontFamily: fd }}>Проверить пропуск</span>
          <span style={{ fontSize: 12, color: T.textMuted }}>Сканировать / ввести номер</span>
        </button>
        <button onClick={() => setPanel({ type: "checkEmployee" })} style={{
          background: T.surface, border: "2px solid " + T.slate + "20", borderRadius: 14, padding: "24px 20px",
          cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          transition: "all 0.15s",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = T.slate; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = T.slate + "20"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <Icon name="userCheck" size={28} color={T.slate} />
          <span style={{ fontSize: 15, fontWeight: 700, color: T.text, fontFamily: fd }}>Проверить сотрудника</span>
          <span style={{ fontSize: 12, color: T.textMuted }}>По карте / таб. номеру</span>
        </button>
      </div>

      {/* Clickable Stats row */}
      <div style={{ display: "flex", gap: 14, marginBottom: 22 }}>
        {statCards.map((s) => {
          const active = liveFilter === s.id;
          return (
          <div key={s.id} onClick={() => setLiveFilter(s.id)} style={{
            background: T.surface, border: active ? "2px solid " + s.color : "1px solid " + T.border,
            borderRadius: 12, padding: active ? "15px 19px" : "16px 20px", flex: 1,
            boxShadow: active ? "0 4px 16px " + s.color + "20" : "0 1px 3px rgba(0,0,0,0.04)",
            position: "relative", overflow: "hidden", cursor: "pointer", transition: "all 0.2s",
          }}
          onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = s.color + "60"; }}
          onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = T.border; }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: s.color, borderRadius: "12px 12px 0 0" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: s.color + (active ? "20" : "10"), border: "1px solid " + s.color + "20", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={s.icon} size={16} color={s.color} /></div>
              <div><div style={{ fontSize: 24, fontWeight: 800, fontFamily: fd, color: T.text }}>{s.value}</div><div style={{ fontSize: 11, color: active ? s.color : T.textMuted, fontFamily: fm, textTransform: "uppercase", letterSpacing: "0.03em", fontWeight: active ? 600 : 400 }}>{s.label}</div></div>
            </div>
          </div>
        );})}
      </div>

      {/* Dynamic Table */}
      <div style={{ background: T.surface, border: "1px solid " + T.border, borderRadius: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid " + T.borderLight, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <StatusDot color={tableIcon[liveFilter]} />
            <span style={{ fontSize: 15, fontWeight: 700, fontFamily: fd, color: T.text }}>{tableTitle[liveFilter]}</span>
            <Badge color={tableIcon[liveFilter]}>
              {liveFilter === "onsite" ? allVisitorsToday.filter(v => v.onSite).length + " чел./ТС" :
               liveFilter === "today" ? allVisitorsToday.filter(v => !v.isVehicle).length + " чел." :
               liveFilter === "vehicles" ? vehicleLogToday.length + " записей" :
               violationsToday.length + " шт."}
            </Badge>
          </div>
        </div>

        {/* ── On-site ── */}
        {liveFilter === "onsite" && allVisitorsToday.filter(v => v.onSite).map((v, i, arr) => (
          <div key={v.id} onClick={() => setPanel({ type: v.isVehicle ? "vehicleDetail" : "visitorDetail", data: v.isVehicle ? { plate: v.plate, driver: v.name, type: v.vType, dir: "Въезд", time: v.timeIn, cargo: v.purpose, pass: "Сотрудник", status: "passed", notes: "—" } : v })} style={{
            display: "flex", alignItems: "center", gap: 14, padding: "14px 20px",
            borderBottom: i < arr.length - 1 ? "1px solid " + T.borderLight : "none",
            cursor: "pointer", transition: "background 0.15s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = T.cardHover}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <div style={{ width: 42, height: 42, borderRadius: 12, background: v.isVehicle ? T.slateDim : T.accentDim, border: "1px solid " + (v.isVehicle ? T.slate : T.accent) + "25", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={v.isVehicle ? "truck" : "user"} size={20} color={v.isVehicle ? T.slate : T.accent} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: T.text, fontFamily: fd }}>{v.isVehicle ? v.plate + " — " + v.name : v.name}</span>
                {!v.isVehicle && <Badge color={T.accent}>{v.badge}</Badge>}
                {v.isVehicle && <Badge color={T.slate}>{v.vType}</Badge>}
              </div>
              <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{v.isVehicle ? "Водитель" : v.company + " • " + v.purpose}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 13, fontFamily: fm, fontWeight: 600, color: T.text }}>с {v.timeIn}</div>
              {!v.isVehicle && <div style={{ fontSize: 11, color: T.textMuted }}>К: {v.host}</div>}
            </div>
            {!v.isVehicle && <Btn small variant="danger" icon="logout" onClick={e => { e.stopPropagation(); showToast(v.name + " — выход зарегистрирован"); }}>Выход</Btn>}
          </div>
        ))}

        {/* ── All today ── */}
        {liveFilter === "today" && (
          <Table columns={[
            { key: "name", label: "ФИО", render: (v, r) => <div><div style={{ fontWeight: 600 }}>{v}</div><div style={{ fontSize: 11, color: T.textDim }}>{r.company}</div></div> },
            { key: "purpose", label: "Цель визита" },
            { key: "host", label: "К кому" },
            { key: "badge", label: "Бейдж", render: v => <span style={{ fontFamily: fm }}>{v}</span> },
            { key: "timeIn", label: "Вход", render: v => <span style={{ fontFamily: fm }}>{v}</span> },
            { key: "timeOut", label: "Выход", render: v => <span style={{ fontFamily: fm, color: v === "—" ? T.success : T.text }}>{v === "—" ? "на территории" : v}</span> },
            { key: "onSite", label: "Статус", render: v => v ? <Badge color={T.success}>Здесь</Badge> : <Badge color={T.textDim}>Ушёл</Badge> },
          ]} data={allVisitorsToday.filter(v => !v.isVehicle)} onRowClick={r => setPanel({ type: "visitorDetail", data: r })} />
        )}

        {/* ── Vehicles ── */}
        {liveFilter === "vehicles" && (
          <Table columns={[
            { key: "plate", label: "Гос. номер", render: v => <span style={{ fontFamily: fm, fontWeight: 700, fontSize: 14 }}>{v}</span> },
            { key: "driver", label: "Водитель" },
            { key: "type", label: "Тип ТС" },
            { key: "dir", label: "Напр.", render: v => <span style={{ color: v === "Въезд" ? T.success : T.accent, fontWeight: 600 }}>{v === "Въезд" ? "→" : "←"} {v}</span> },
            { key: "time", label: "Время", render: v => <span style={{ fontFamily: fm }}>{v}</span> },
            { key: "cargo", label: "Груз" },
            { key: "pass", label: "Пропуск", render: v => <span style={{ fontFamily: fm }}>{v}</span> },
            { key: "status", label: "Досмотр", render: v => <Badge color={v === "passed" ? T.success : T.danger}>{v === "passed" ? "ОК" : "Нарушение"}</Badge> },
          ]} data={vehicleLogToday} onRowClick={r => setPanel({ type: "vehicleDetail", data: r })} />
        )}

        {/* ── Violations ── */}
        {liveFilter === "violations" && (
          violationsToday.length > 0 ? violationsToday.map((v, i) => (
            <div key={i} style={{ padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: T.dangerDim, border: "1px solid " + T.danger + "25", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="alert" size={20} color={T.danger} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: T.danger, fontFamily: fd }}>{v.type}</span>
                  <Badge color={T.danger}>{v.severity === "high" ? "СЕРЬЁЗНОЕ" : "НЕЗНАЧИТЕЛЬНОЕ"}</Badge>
                  <span style={{ fontSize: 12, fontFamily: fm, color: T.textDim, marginLeft: "auto" }}>{v.time}</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 4 }}>{v.subject}</div>
                <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 8 }}>{v.detail}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Badge color={T.earth}>{v.actN}</Badge>
                  <Btn small variant="ghost" icon="eye" onClick={() => showToast("Открытие акта " + v.actN)}>Открыть акт</Btn>
                </div>
              </div>
            </div>
          )) : (
            <div style={{ padding: 40, textAlign: "center" }}>
              <Icon name="check" size={32} color={T.success} />
              <div style={{ fontSize: 15, fontWeight: 600, color: T.success, marginTop: 10, fontFamily: fd }}>Нарушений нет</div>
              <div style={{ fontSize: 13, color: T.textMuted, marginTop: 4 }}>За текущую смену нарушений не зафиксировано</div>
            </div>
          )
        )}
      </div>
    </div>
  );};

  /* ── Passes ── */
  const PassesPage = () => {
    const [f, setF] = useState("active");
    const fd2 = f === "all" ? passes : passes.filter(p => p.status === f);
    return (
      <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
          {[{ v: "all", l: "Все" }, { v: "active", l: "Действующие" }, { v: "expired", l: "Истёкшие" }, { v: "revoked", l: "Отозванные" }].map(x => (
            <button key={x.v} onClick={() => setF(x.v)} style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid " + (f === x.v ? T.accent : T.border), background: f === x.v ? T.accentDim : T.surface, color: f === x.v ? T.accent : T.textMuted, cursor: "pointer", fontSize: 13, fontFamily: fb, fontWeight: 500 }}>{x.l}</button>
          ))}
        </div>
        <div style={{ background: T.surface, border: "1px solid " + T.border, borderRadius: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <Table columns={[
            { key: "id", label: "№", render: v => <span style={{ fontFamily: fm, fontWeight: 700 }}>{v}</span> },
            { key: "type", label: "Тип", render: v => <Badge color={v === "people" ? T.slate : T.earth}>{v === "people" ? "Люди" : "Транспорт"}</Badge> },
            { key: "persons", label: "Лица / ТС", render: v => <span style={{ fontWeight: 500 }}>{v}</span> },
            { key: "dateFrom", label: "Период", render: (v, r) => <span style={{ fontFamily: fm }}>{v} – {r.dateTo}</span> },
            { key: "requester", label: "Заявитель", render: (v, r) => <div><div style={{ fontWeight: 600 }}>{v}</div><div style={{ fontSize: 11, color: T.textDim }}>{r.dept}</div></div> },
            { key: "status", label: "Статус", render: v => { const s = { active: { c: T.success, l: "Действует" }, expired: { c: T.textDim, l: "Истёк" }, revoked: { c: T.danger, l: "Отозван" } }; return <Badge color={s[v]?.c || T.textDim}>{s[v]?.l || v}</Badge>; } },
          ]} data={fd2} onRowClick={r => setPanel({ type: "passDetail", data: r })} />
        </div>
      </div>
    );
  };

  /* ── Access ── */
  const AccessPage = () => {
    const [search, setSearch] = useState("");
    const fd2 = search ? employees.filter(e => e.name.toLowerCase().includes(search.toLowerCase()) || e.tabN.includes(search) || e.card.includes(search)) : employees;
    return (
      <div>
        <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: T.bg, border: "1px solid " + T.border, borderRadius: 10, padding: "8px 16px", flex: 1 }}>
            <Icon name="search" size={16} color={T.textDim} />
            <input placeholder="Поиск по ФИО, таб. номеру, номеру карты..." value={search} onChange={e => setSearch(e.target.value)} style={{ flex: 1, background: "none", border: "none", color: T.text, fontSize: 14, fontFamily: fb, outline: "none" }} />
          </div>
        </div>
        <div style={{ background: T.surface, border: "1px solid " + T.border, borderRadius: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <Table columns={[
            { key: "tabN", label: "Таб. №", render: v => <span style={{ fontFamily: fm, fontWeight: 600 }}>{v}</span> },
            { key: "name", label: "ФИО", render: (v, r) => <div><div style={{ fontWeight: 600 }}>{v}</div><div style={{ fontSize: 11, color: T.textDim }}>{r.position} • {r.dept}</div></div> },
            { key: "card", label: "Карта СКУД", render: v => <span style={{ fontFamily: fm, fontSize: 12 }}>{v}</span> },
            { key: "access", label: "Зоны доступа" },
            { key: "level", label: "Уровень", render: v => { const l = { standard: { c: T.slate, l: "Стандарт" }, extended: { c: T.accent, l: "Расширенный" }, limited: { c: T.textDim, l: "Ограниченный" } }; return <Badge color={l[v]?.c}>{l[v]?.l}</Badge>; } },
            { key: "status", label: "Статус", render: v => v === "active" ? <span style={{ display: "flex", alignItems: "center", gap: 6 }}><StatusDot color={T.success} />Активна</span> : <span style={{ display: "flex", alignItems: "center", gap: 6 }}><StatusDot color={T.danger} />Заблокирована</span> },
          ]} data={fd2} onRowClick={r => setPanel({ type: "employeeDetail", data: r })} />
        </div>
      </div>
    );
  };

  /* ── Vehicles ── */
  const VehiclesPage = () => (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
        <Btn icon="plus" onClick={() => setPanel({ type: "vehicleForm" })}>Досмотр ТС</Btn>
      </div>
      <div style={{ background: T.surface, border: "1px solid " + T.border, borderRadius: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
        <Table columns={[
          { key: "plate", label: "Гос. номер", render: v => <span style={{ fontFamily: fm, fontWeight: 700, fontSize: 14 }}>{v}</span> },
          { key: "driver", label: "Водитель" },
          { key: "type", label: "Тип ТС" },
          { key: "dir", label: "Напр.", render: v => <span style={{ color: v === "Въезд" ? T.success : T.accent, fontWeight: 600 }}>{v === "Въезд" ? "→" : "←"} {v}</span> },
          { key: "time", label: "Время", render: v => <span style={{ fontFamily: fm }}>{v}</span> },
          { key: "cargo", label: "Груз" },
          { key: "pass", label: "Пропуск", render: v => <span style={{ fontFamily: fm }}>{v}</span> },
          { key: "status", label: "Досмотр", render: v => <Badge color={v === "passed" ? T.success : T.danger}>{v === "passed" ? "ОК" : "Нарушение"}</Badge> },
        ]} data={vehicles} onRowClick={r => setPanel({ type: "vehicleDetail", data: r })} />
      </div>
    </div>
  );

  /* ═══ PANELS ═══ */
  const renderPanel = () => {
    if (!panel) return null;
    const { type, data } = panel;

    if (type === "registerVisitor") return (
      <SlideOver title="Регистрация входа" onClose={() => setPanel(null)} wide>
        <Input big label="ФИО посетителя" placeholder="Иванов Пётр Сергеевич" value="" onChange={() => {}} />
        <Input label="ИИН" placeholder="850412301245" value="" onChange={() => {}} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Input label="Документ" select options={[{ value: "id", label: "Удостоверение" }, { value: "p", label: "Паспорт" }, { value: "d", label: "Вод. удостоверение" }]} value="id" onChange={() => {}} />
          <Input label="Номер документа" placeholder="012345678" value="" onChange={() => {}} />
        </div>
        <Input label="Организация" placeholder="ТОО «СтройМонтаж»" value="" onChange={() => {}} />
        <Input label="Номер пропуска" placeholder="#302" value="" onChange={() => {}} />
        <Input label="Цель визита" placeholder="Ремонт дробилки" value="" onChange={() => {}} />
        <Input label="К кому (ФИО сотрудника)" placeholder="Каримов А.Б." value="" onChange={() => {}} />
        <Input label="СИЗ" select options={[{ value: "own", label: "Своё" }, { value: "issued", label: "Выдано на КПП" }, { value: "no", label: "Нет (не допускать)" }]} value="own" onChange={() => {}} />
        <div style={{ border: "2px dashed " + T.border, borderRadius: 12, padding: 20, textAlign: "center", marginBottom: 16, cursor: "pointer", background: T.bg }}>
          <Icon name="camera" size={28} color={T.textDim} /><div style={{ fontSize: 13, color: T.textMuted, marginTop: 6 }}>Фото посетителя</div>
        </div>
        <Input label="Примечания" textarea placeholder="Доп. информация..." value="" onChange={() => {}} />
        <Btn big icon="doorOpen" onClick={() => { setPanel(null); showToast("Вход зарегистрирован — бейдж В-0150 выдан"); }} style={{ width: "100%" }}>Зарегистрировать вход</Btn>
      </SlideOver>
    );

    if (type === "visitorDetail") return (
      <SlideOver title={"Посетитель — " + data.badge} onClose={() => setPanel(null)}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: 16, background: T.accentDim, border: "2px solid " + T.accentBorder, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}><Icon name="user" size={28} color={T.accent} /></div>
          <div style={{ fontSize: 18, fontWeight: 700, fontFamily: fd, color: T.text }}>{data.name}</div>
          <div style={{ fontSize: 13, color: T.textMuted, marginTop: 2 }}>{data.company}</div>
          <div style={{ marginTop: 8 }}><Badge color={T.success}>На территории с {data.timeIn}</Badge></div>
        </div>
        <DetailFields fields={[["ИИН", data.iin], ["Документ", data.doc], ["Цель визита", data.purpose], ["К кому", data.host], ["Бейдж", data.badge], ["СИЗ", data.siz]]} />
        <div style={{ marginTop: 24 }}>
          <Btn big variant="danger" icon="logout" onClick={() => { setPanel(null); showToast(data.name + " — выход зарегистрирован"); }} style={{ width: "100%" }}>Зарегистрировать выход</Btn>
        </div>
      </SlideOver>
    );

    if (type === "scanPass") return (
      <SlideOver title="Проверка пропуска" onClose={() => setPanel(null)}>
        <Input big label="Номер пропуска" placeholder="#302" value="" onChange={() => {}} />
        <div style={{ textAlign: "center", marginBottom: 20 }}><span style={{ fontSize: 13, color: T.textMuted }}>или</span></div>
        <div style={{ border: "2px dashed " + T.accent + "40", borderRadius: 14, padding: 28, textAlign: "center", marginBottom: 20, cursor: "pointer", background: T.accentDim }}>
          <Icon name="scan" size={36} color={T.accent} /><div style={{ fontSize: 15, fontWeight: 600, color: T.accent, marginTop: 10, fontFamily: fd }}>Сканировать QR / штрихкод</div>
        </div>
        <Btn big icon="search" onClick={() => showToast("Пропуск #302 — действителен. 3 чел., до 15.05.2026")} style={{ width: "100%" }}>Проверить</Btn>
      </SlideOver>
    );

    if (type === "checkEmployee") return (
      <SlideOver title="Проверка сотрудника" onClose={() => setPanel(null)}>
        <Input big label="Табельный номер / Номер карты" placeholder="PM-00142 или 4521-0142" value="" onChange={() => {}} />
        <div style={{ textAlign: "center", marginBottom: 20 }}><span style={{ fontSize: 13, color: T.textMuted }}>или</span></div>
        <div style={{ border: "2px dashed " + T.slate + "30", borderRadius: 14, padding: 28, textAlign: "center", marginBottom: 20, cursor: "pointer", background: T.slateDim }}>
          <Icon name="scan" size={36} color={T.slate} /><div style={{ fontSize: 15, fontWeight: 600, color: T.slate, marginTop: 10, fontFamily: fd }}>Приложить карту СКУД</div>
        </div>
        <Btn big icon="userCheck" variant="secondary" onClick={() => { setPanel({ type: "employeeDetail", data: employees[0] }); }} style={{ width: "100%" }}>Проверить</Btn>
      </SlideOver>
    );

    if (type === "passDetail") return (
      <SlideOver title={"Пропуск " + data.id} onClose={() => setPanel(null)}>
        <div style={{ padding: 16, borderRadius: 12, background: data.status === "active" ? T.successDim : data.status === "expired" ? T.bg : T.dangerDim, border: "1px solid " + (data.status === "active" ? T.success : data.status === "expired" ? T.border : T.danger) + "25", textAlign: "center", marginBottom: 20 }}>
          <Badge color={data.status === "active" ? T.success : data.status === "expired" ? T.textDim : T.danger}>{data.status === "active" ? "ДЕЙСТВУЕТ" : data.status === "expired" ? "ИСТЁК" : "ОТОЗВАН"}</Badge>
        </div>
        <DetailFields fields={[["Номер", data.id], ["Тип", data.type === "people" ? "Люди" : "Транспорт"], ["Кол-во", String(data.count)], ["Период", data.dateFrom + " – " + data.dateTo], ["Заявитель", data.requester], ["Подразделение", data.dept], ["Утвердил", data.approved], ["Основание", data.reason]]} />
        <div style={{ marginTop: 16, padding: 14, background: T.bg, borderRadius: 10, border: "1px solid " + T.borderLight }}>
          <div style={{ fontSize: 11, color: T.textDim, fontFamily: fm, textTransform: "uppercase", marginBottom: 6 }}>Лица / ТС</div>
          <div style={{ fontSize: 14, color: T.text, fontWeight: 600 }}>{data.persons}</div>
        </div>
      </SlideOver>
    );

    if (type === "employeeDetail") return (
      <SlideOver title="Карточка сотрудника" onClose={() => setPanel(null)}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ width: 60, height: 60, borderRadius: 16, background: "linear-gradient(135deg," + T.accent + "," + T.earth + ")", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, color: "#FFF", fontFamily: fd, margin: "0 auto 12px" }}>{data.name.split(" ").map(w => w[0]).join("").slice(0, 2)}</div>
          <div style={{ fontSize: 18, fontWeight: 700, fontFamily: fd, color: T.text }}>{data.name}</div>
          <div style={{ fontSize: 13, color: T.textMuted, marginTop: 2 }}>{data.position} • {data.dept}</div>
          <div style={{ marginTop: 8 }}>
            {data.status === "active" ? <Badge color={T.success}>Карта активна</Badge> : <Badge color={T.danger}>Карта заблокирована</Badge>}
          </div>
        </div>
        <DetailFields fields={[
          ["Таб. №", data.tabN], ["Карта СКУД", data.card],
          ["Зоны доступа", data.access], ["Уровень", { standard: "Стандарт", extended: "Расширенный", limited: "Ограниченный" }[data.level]],
          ["Смена", data.shift], ["Телефон", data.phone],
        ]} />
        {data.status === "active" && <div style={{ marginTop: 20, padding: 16, borderRadius: 12, background: T.successDim, border: "1px solid " + T.success + "25", textAlign: "center" }}>
          <Icon name="doorOpen" size={24} color={T.success} />
          <div style={{ fontSize: 15, fontWeight: 700, color: T.success, marginTop: 6, fontFamily: fd }}>Доступ разрешён</div>
          <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>Зоны: {data.access}</div>
        </div>}
        {data.status === "blocked" && <div style={{ marginTop: 20, padding: 16, borderRadius: 12, background: T.dangerDim, border: "1px solid " + T.danger + "25", textAlign: "center" }}>
          <Icon name="ban" size={24} color={T.danger} />
          <div style={{ fontSize: 15, fontWeight: 700, color: T.danger, marginTop: 6, fontFamily: fd }}>Доступ запрещён</div>
          <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>Карта заблокирована. Обратитесь к нач. СБ.</div>
        </div>}
      </SlideOver>
    );

    if (type === "vehicleForm") return (
      <SlideOver title="Досмотр транспорта" onClose={() => setPanel(null)} wide>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          <Input label="Гос. номер" placeholder="А 123 ВС 01" value="" onChange={() => {}} />
          <Input label="Тип ТС" select options={[{ value: "c", label: "Легковой" }, { value: "t", label: "Грузовой" }, { value: "b", label: "БелАЗ" }, { value: "s", label: "Спецтехника" }]} value="c" onChange={() => {}} />
          <Input label="Направление" select options={[{ value: "in", label: "Въезд" }, { value: "out", label: "Выезд" }]} value="in" onChange={() => {}} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Input label="Водитель" placeholder="Мухамедов А.Н." value="" onChange={() => {}} />
          <Input label="Номер пропуска" placeholder="#302" value="" onChange={() => {}} />
        </div>
        <Input label="Груз / ТМЦ" textarea placeholder="Описание груза..." value="" onChange={() => {}} />
        <Input label="ТТН / накладная" placeholder="ТТН-2026-0547" value="" onChange={() => {}} />
        <div style={{ marginBottom: 16 }}><label style={{ display: "block", fontSize: 11, color: T.textMuted, marginBottom: 10, fontFamily: fm, textTransform: "uppercase" }}>Результат</label>
          <div style={{ display: "flex", gap: 10 }}>{[{ l: "Без нарушений", c: T.success, i: "check" }, { l: "Нарушение", c: T.danger, i: "alert" }].map(r => <button key={r.l} style={{ flex: 1, padding: "14px", borderRadius: 10, border: "2px solid " + r.c + "30", background: r.c + "06", cursor: "pointer", fontSize: 14, fontWeight: 600, color: r.c, fontFamily: fb, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}><Icon name={r.i} size={18} color={r.c} />{r.l}</button>)}</div>
        </div>
        <div style={{ border: "2px dashed " + T.border, borderRadius: 12, padding: 20, textAlign: "center", marginBottom: 16, cursor: "pointer", background: T.bg }}>
          <Icon name="camera" size={28} color={T.textDim} /><div style={{ fontSize: 13, color: T.textMuted, marginTop: 6 }}>Фото досмотра</div>
        </div>
        <Input label="Комментарий" textarea placeholder="Заметки..." value="" onChange={() => {}} />
        <Btn big icon="check" onClick={() => { setPanel(null); showToast("Акт досмотра сохранён"); }} style={{ width: "100%" }}>Сохранить акт</Btn>
      </SlideOver>
    );

    if (type === "vehicleDetail") return (
      <SlideOver title="Запись о ТС" onClose={() => setPanel(null)}>
        <DetailFields fields={[["Гос. номер", data.plate], ["Тип ТС", data.type], ["Водитель", data.driver], ["Направление", data.dir], ["Время", data.time], ["Груз", data.cargo], ["Пропуск", data.pass], ["Досмотр", data.status === "passed" ? "Пройден" : "Нарушение", data.status === "passed" ? T.success : T.danger], ["Примечание", data.notes]]} />
      </SlideOver>
    );

    return null;
  };

  /* ═══ LAYOUT ═══ */
  const pages = { [TABS.LIVE]: LivePage, [TABS.PASSES]: PassesPage, [TABS.ACCESS]: AccessPage, [TABS.VEHICLES]: VehiclesPage };
  const Page = pages[tab];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: T.bg, color: T.text, fontFamily: fb, overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:${T.bg}}::-webkit-scrollbar-thumb{background:${T.border};border-radius:3px}
        @keyframes slideIn{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes slideRight{from{transform:translateX(100%)}to{transform:translateX(0)}}
        select option{background:${T.surface};color:${T.text}} input::placeholder,textarea::placeholder{color:${T.textDim}}
      `}</style>

      {/* ─── Header ─── */}
      <div style={{ height: 62, background: T.sidebarBg, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Logo size={34} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#F0EBE4", fontFamily: fd }}>Polymetal СБ</div>
            <div style={{ fontSize: 10, color: T.sidebarText, fontFamily: fm, letterSpacing: "0.06em", opacity: 0.6 }}>РАБОЧЕЕ МЕСТО ОХРАННИКА • КПП-1</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px", background: "rgba(45,125,70,0.15)", borderRadius: 7, border: "1px solid rgba(45,125,70,0.3)" }}>
            <StatusDot color={T.success} /><span style={{ fontSize: 10, color: "#6BBF7E", fontFamily: fm, fontWeight: 600 }}>ОНЛАЙН</span>
          </div>
          <div style={{ color: "#F0EBE4", fontFamily: fm, fontSize: 20, fontWeight: 700, letterSpacing: "0.05em" }}>{timeStr}</div>
          {/* Bell */}
          <div style={{ position: "relative" }}>
            <button onClick={() => { setNotifOpen(!notifOpen); setUserOpen(false); }} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, cursor: "pointer", padding: 7, display: "flex" }}>
              <Icon name="bell" size={18} color="#C8BEB4" />
              <span style={{ position: "absolute", top: 3, right: 3, width: 8, height: 8, borderRadius: "50%", background: T.danger, border: "2px solid " + T.sidebarBg }} />
            </button>
            {notifOpen && <div style={{ position: "absolute", top: 44, right: 0, width: 360, background: T.surface, border: "1px solid " + T.border, borderRadius: 12, zIndex: 200, boxShadow: "0 16px 48px rgba(30,26,22,0.2)", maxHeight: 380, overflow: "auto" }}>
              <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid " + T.borderLight, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 15, fontWeight: 700, fontFamily: fd, color: T.text }}>Уведомления</span><Badge color={T.danger}>{NOTIFS.length}</Badge>
              </div>
              {NOTIFS.map((n, i) => <div key={i} style={{ padding: "11px 16px", borderBottom: "1px solid " + T.borderLight, display: "flex", gap: 10, alignItems: "flex-start" }}><StatusDot color={n.color} /><div><div style={{ fontSize: 13, color: T.text, lineHeight: 1.4 }}>{n.text}</div><div style={{ fontSize: 11, color: T.textDim, marginTop: 3 }}>{n.time} назад</div></div></div>)}
            </div>}
          </div>
          {/* User */}
          <div style={{ position: "relative" }}>
            <div onClick={() => { setUserOpen(!userOpen); setNotifOpen(false); }} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", padding: "4px 8px", borderRadius: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg," + T.accent + "," + T.earth + ")", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#FFF", fontFamily: fd }}>СБ</div>
              <div><div style={{ fontSize: 12, fontWeight: 600, color: "#F0EBE4", fontFamily: fd }}>Серіков Б.Т.</div><div style={{ fontSize: 10, color: T.sidebarText }}>Охранник КПП-1</div></div>
            </div>
            {userOpen && <div style={{ position: "absolute", top: 48, right: 0, width: 280, background: T.surface, border: "1px solid " + T.border, borderRadius: 12, zIndex: 200, boxShadow: "0 16px 48px rgba(30,26,22,0.18)", overflow: "hidden" }}>
              <div style={{ padding: 18, background: T.bg, borderBottom: "1px solid " + T.border, textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg," + T.accent + "," + T.earth + ")", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#FFF", fontFamily: fd, margin: "0 auto 10px" }}>СБ</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: T.text, fontFamily: fd }}>Серіков Бауыржан Т.</div>
                <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Охранник КПП-1</div>
              </div>
              <div style={{ padding: 14 }}>
                {[["Таб. №", "PM-00201"], ["Смена", "Дневная (08:00–20:00)"], ["Телефон", "+7 701 123 4567"], ["Филиал", "Кызыл"]].map(([l, v], i) => <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: i < 3 ? "1px solid " + T.borderLight : "none" }}><span style={{ fontSize: 12, color: T.textMuted }}>{l}</span><span style={{ fontSize: 12, color: T.text, fontWeight: 600 }}>{v}</span></div>)}
              </div>
              <div style={{ padding: "0 14px 14px" }}><Btn variant="danger" icon="logout" onClick={() => showToast("Выход из системы", "danger")} style={{ width: "100%", justifyContent: "center" }}>Завершить смену</Btn></div>
            </div>}
          </div>
        </div>
      </div>

      {/* ─── Tab Bar ─── */}
      <div style={{ background: T.surface, borderBottom: "1px solid " + T.border, padding: "0 24px", display: "flex", gap: 0, flexShrink: 0 }}>
        {tabs.map(t => {
          const active = tab === t.id;
          return (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              display: "flex", alignItems: "center", gap: 8, padding: "14px 20px",
              background: "transparent", border: "none", borderBottom: active ? "3px solid " + T.accent : "3px solid transparent",
              cursor: "pointer", transition: "all 0.15s",
            }}>
              <Icon name={t.icon} size={18} color={active ? T.accent : T.textMuted} />
              <span style={{ fontSize: 14, fontFamily: fb, fontWeight: active ? 700 : 500, color: active ? T.text : T.textMuted }}>{t.label}</span>
              {t.badge && <span style={{ background: T.success, color: "#FFF", fontSize: 10, fontWeight: 700, borderRadius: 10, padding: "2px 7px", fontFamily: fm }}>{t.badge}</span>}
            </button>
          );
        })}
      </div>

      {/* ─── Content ─── */}
      <div style={{ flex: 1, overflow: "auto", padding: 24 }} onClick={() => { setNotifOpen(false); setUserOpen(false); }}>
        <Page />
      </div>

      {renderPanel()}
      {toast && <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 3000, background: "#FFF", border: "1px solid " + (toast.type === "danger" ? T.danger : T.success) + "30", borderLeft: "4px solid " + (toast.type === "danger" ? T.danger : T.success), borderRadius: 10, padding: "14px 22px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 8px 32px rgba(30,26,22,0.15)", animation: "slideIn 0.3s ease" }}>
        <Icon name={toast.type === "danger" ? "x" : "check"} size={18} color={toast.type === "danger" ? T.danger : T.success} /><span style={{ fontSize: 14, color: T.text, fontFamily: fb, fontWeight: 600 }}>{toast.msg}</span>
      </div>}
    </div>
  );
}
