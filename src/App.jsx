import { useState, useEffect, useRef } from "react";

const C = {
  copper: "#B5722C",
  copperLight: "#CC8B45",
  copperDark: "#8B5A1E",
  copperDeep: "#6B4415",
  brown: "#7A5C3E",
  brownDark: "#4A3520",
  brownDeep: "#2E1E10",
  cream: "#F0DCC8",
  creamLight: "#FAF3EB",
  creamWarm: "#E8CDAE",
  creamDark: "#D4B896",
  gold: "#D4A043",
  goldLight: "#E8C06A",
  goldPale: "#F0D48A",
  goldGlow: "#FFD98E",
  teal: "#2A9D8F",
  tealDark: "#1E7A6F",
  black: "#1A1410",
  blackWarm: "#231B14",
  blackSoft: "#2C221A",
};

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function Reveal({ children, delay = 0, direction = "up", style = {} }) {
  const [ref, vis] = useInView(0.08);
  const t = {
    up: "translateY(60px)", down: "translateY(-40px)",
    left: "translateX(60px)", right: "translateX(-60px)",
    scale: "scale(0.92)", none: "none",
  };
  return (
    <div ref={ref} style={{
      ...style,
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : t[direction],
      transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

function MashrabiyaPattern({ color = C.cream, opacity = 0.08, height = 60 }) {
  return (
    <div style={{ width: "100%", height, overflow: "hidden", opacity }}>
      <svg viewBox="0 0 480 60" preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%", display: "block" }}>
        <defs>
          <pattern id="mash" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="12" fill="none" stroke={color} strokeWidth="0.8" />
            <circle cx="30" cy="30" r="4" fill="none" stroke={color} strokeWidth="0.6" />
            <line x1="30" y1="0" x2="30" y2="18" stroke={color} strokeWidth="0.6" />
            <line x1="30" y1="42" x2="30" y2="60" stroke={color} strokeWidth="0.6" />
            <line x1="0" y1="30" x2="18" y2="30" stroke={color} strokeWidth="0.6" />
            <line x1="42" y1="30" x2="60" y2="30" stroke={color} strokeWidth="0.6" />
            <line x1="10" y1="10" x2="21" y2="21" stroke={color} strokeWidth="0.5" />
            <line x1="39" y1="21" x2="50" y2="10" stroke={color} strokeWidth="0.5" />
            <line x1="10" y1="50" x2="21" y2="39" stroke={color} strokeWidth="0.5" />
            <line x1="39" y1="39" x2="50" y2="50" stroke={color} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="480" height="60" fill="url(#mash)" />
      </svg>
    </div>
  );
}

function MashrabiyaBand({ color = C.gold }) {
  return (
    <div style={{ width: "100%", height: 70, overflow: "hidden", opacity: 0.12 }}>
      <svg viewBox="0 0 600 70" preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%" }}>
        <defs>
          <pattern id="mashB" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="8" fill="none" stroke={color} strokeWidth="1" />
            <circle cx="20" cy="20" r="2.5" fill={color} opacity="0.3" />
            <line x1="20" y1="0" x2="20" y2="12" stroke={color} strokeWidth="0.7" />
            <line x1="20" y1="28" x2="20" y2="40" stroke={color} strokeWidth="0.7" />
            <line x1="0" y1="20" x2="12" y2="20" stroke={color} strokeWidth="0.7" />
            <line x1="28" y1="20" x2="40" y2="20" stroke={color} strokeWidth="0.7" />
            <line x1="6" y1="6" x2="13" y2="13" stroke={color} strokeWidth="0.5" />
            <line x1="27" y1="13" x2="34" y2="6" stroke={color} strokeWidth="0.5" />
            <line x1="6" y1="34" x2="13" y2="27" stroke={color} strokeWidth="0.5" />
            <line x1="27" y1="27" x2="34" y2="34" stroke={color} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="600" height="70" fill="url(#mashB)" />
      </svg>
    </div>
  );
}

function CoffeeBeanLogo({ size = 120, color = C.cream }) {
  return (
    <svg viewBox="0 0 200 240" width={size} height={size * 1.2}>
      <ellipse cx="100" cy="95" rx="38" ry="52" fill="none" stroke={color} strokeWidth="3.5" transform="rotate(-8 100 95)" />
      <path d="M 95 50 Q 80 75 100 95 Q 120 115 105 140" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="150" r="6" fill="none" stroke={color} strokeWidth="2.5" />
      <text x="42" y="118" fontFamily="'Amiri', serif" fontSize="18" fill={color} opacity="0.8">20</text>
      <text x="150" y="118" fontFamily="'Amiri', serif" fontSize="18" fill={color} opacity="0.8">26</text>
      <defs><path id="tA" d="M 30 170 Q 100 220 170 170" /></defs>
      <text fontSize="16" fill={color} fontFamily="'Amiri', serif" letterSpacing="4" opacity="0.9">
        <textPath href="#tA" startOffset="50%" textAnchor="middle">SHUBBAK CAFE</textPath>
      </text>
    </svg>
  );
}

function Particles() {
  const ps = Array.from({ length: 10 }).map(() => ({
    s: 2 + Math.random() * 5, x: 5 + Math.random() * 90,
    d: 10 + Math.random() * 15, dl: Math.random() * 8,
    o: 0.06 + Math.random() * 0.1,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1 }}>
      {ps.map((p, i) => (
        <div key={i} style={{
          position: "absolute", width: p.s, height: p.s, borderRadius: "50%",
          background: C.gold, opacity: p.o, left: `${p.x}%`, bottom: "-5%",
          animation: `floatP ${p.d}s ease-in-out ${p.dl}s infinite`,
        }} />
      ))}
    </div>
  );
}

// ===== STOREFRONT SIGN COMPONENT =====
function StorefrontSign({ glowing = true }) {
  return (
    <div style={{
      position: "relative",
      width: "min(380px, 85vw)",
      padding: "0",
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      {/* Sign board - mimics the actual illuminated storefront */}
      <div style={{
        width: "100%",
        background: `linear-gradient(180deg, ${C.blackSoft}ee, ${C.blackWarm}ee, ${C.brownDeep}dd)`,
        borderRadius: 8,
        padding: "36px 24px 28px",
        position: "relative",
        overflow: "hidden",
        border: `1px solid ${C.copper}22`,
        boxShadow: glowing ? `
          0 0 60px ${C.goldGlow}22,
          0 0 120px ${C.goldGlow}11,
          0 20px 60px rgba(0,0,0,0.5),
          inset 0 0 80px ${C.goldGlow}05
        ` : `0 10px 40px rgba(0,0,0,0.4)`,
      }}>
        {/* Subtle texture */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: `radial-gradient(circle, ${C.cream} 0.5px, transparent 0.5px)`,
          backgroundSize: "12px 12px",
        }} />

        {/* Arabic calligraphy name - main sign */}
        <div style={{
          textAlign: "center",
          position: "relative", zIndex: 2,
        }}>
          <div style={{
            fontFamily: "'Aref Ruqaa', 'Amiri', serif",
            fontSize: "clamp(52px, 14vw, 80px)",
            fontWeight: 700,
            color: C.creamLight,
            lineHeight: 1.1,
            textShadow: glowing ? `
              0 0 20px ${C.goldGlow}66,
              0 0 40px ${C.goldGlow}33,
              0 0 80px ${C.goldGlow}18,
              0 2px 4px rgba(0,0,0,0.3)
            ` : `0 2px 4px rgba(0,0,0,0.3)`,
            letterSpacing: 2,
          }}>
            شُبّاك
          </div>
          {/* Decorative diamond between arabic and english */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 12, margin: "8px 0 6px",
          }}>
            <div style={{
              width: 40, height: 1,
              background: `linear-gradient(90deg, transparent, ${C.goldGlow}55)`,
            }} />
            <div style={{
              width: 6, height: 6,
              background: C.goldGlow,
              transform: "rotate(45deg)",
              opacity: 0.5,
              boxShadow: glowing ? `0 0 8px ${C.goldGlow}88` : "none",
            }} />
            <div style={{
              width: 40, height: 1,
              background: `linear-gradient(270deg, transparent, ${C.goldGlow}55)`,
            }} />
          </div>
          {/* English name */}
          <div style={{
            fontFamily: "'Amiri', serif",
            fontSize: "clamp(14px, 3.5vw, 20px)",
            color: C.creamDark,
            letterSpacing: 6,
            fontWeight: 400,
            textShadow: glowing ? `0 0 15px ${C.goldGlow}33` : "none",
            opacity: 0.85,
          }}>
            Shubbak Coffee
          </div>
        </div>
      </div>

      {/* Subtle light spill below sign (like real backlit signs) */}
      {glowing && (
        <div style={{
          width: "70%", height: 30,
          background: `radial-gradient(ellipse, ${C.goldGlow}12 0%, transparent 70%)`,
          marginTop: -2,
        }} />
      )}
    </div>
  );
}

// ============================================================
// MAIN EXPORT
// ============================================================
export default function ShubbakCoffee() {
  const [phase, setPhase] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const mainRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => setPhase(3), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const h = () => setScrollY(el.scrollTop);
    el.addEventListener("scroll", h, { passive: true });
    return () => el.removeEventListener("scroll", h);
  }, [phase]);

  const menuData = [
    {
      cat: "قهوة", catEn: "Coffee",
      items: [
        { n: "قهوة مختصة أثيوبي", e: "Ethiopian Coffee", d: "حار / بارد · نوتات فاكهية مميزة", ic: "☕" },
        { n: "قهوة مختصة كولومبي", e: "Colombian Coffee", d: "حار / بارد · قوام غني ومتوازن", ic: "☕" },
        { n: "V60", e: "V60 Pour Over", d: "حار / بارد · تقطير يدوي يبرز نوتات البُن", ic: "💧" },
        { n: "أيس كركديه", e: "Iced Hibiscus", d: "مشروب كركديه بارد منعش", ic: "🌺" },
      ],
    },
    {
      cat: "المخبوزات والحلا", catEn: "Sweets & Bakery",
      items: [
        { n: "كروسان", e: "Croissant", d: "سادة · زعتر · فيتا · شيدر", ic: "🥐" },
        { n: "باوند كيك", e: "Pound Cake", d: "ليمون · ماربل", ic: "🍰" },
        { n: "مافن", e: "Muffin", d: "ڤانيليا · شوكلت", ic: "🧁" },
        { n: "بيكان كراميل", e: "Pecan Caramel", d: "كراميل / تشوكليت", ic: "🍫" },
        { n: "براونيز", e: "Brownies", d: "شوكولاتة غنية ومكثّفة", ic: "🟫" },
        { n: "كوكيز", e: "Cookies", d: "طازجة ومقرمشة", ic: "🍪" },
      ],
    },
    {
      cat: "بوكسات وإضافات", catEn: "Boxes & More",
      items: [
        { n: "بوكس قهوة 2 لتر", e: "Coffee Box 2L", d: "مثالي للتجمّعات والمناسبات", ic: "📦" },
        { n: "بوكس كركديه 2 لتر", e: "Hibiscus Box 2L", d: "كركديه منعش للمشاركة", ic: "🫖" },
        { n: "ماء", e: "Water", d: "مياه معبأة", ic: "💧" },
      ],
    },
  ];

  return (
    <div style={{
      height: "100vh", background: C.black,
      fontFamily: "'Tajawal', sans-serif",
      direction: "rtl", overflow: "hidden", position: "relative",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&family=Amiri:wght@400;700&family=Aref+Ruqaa:wght@400;700&family=Reem+Kufi:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulseGlow {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(212,160,67,0.3); }
          50% { opacity: 0.5; box-shadow: 0 0 0 10px rgba(212,160,67,0); }
        }
        @keyframes floatP {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0.2); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes signGlow {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(255,217,142,0.2)); }
          50% { filter: drop-shadow(0 0 30px rgba(255,217,142,0.4)); }
        }
        @keyframes slideItem {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInSign {
          0% { opacity: 0; transform: scale(0.95); filter: brightness(0.3); }
          60% { opacity: 1; transform: scale(1); filter: brightness(0.6); }
          100% { opacity: 1; transform: scale(1); filter: brightness(1); }
        }
        *::-webkit-scrollbar { width: 3px; }
        *::-webkit-scrollbar-track { background: ${C.blackWarm}; }
        *::-webkit-scrollbar-thumb { background: ${C.copper}55; border-radius: 3px; }
      `}</style>

      {/* ████ SHUTTER OVERLAY ████ */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex",
        pointerEvents: phase >= 2 ? "none" : "auto",
        opacity: phase >= 3 ? 0 : 1,
        transition: "opacity 0.7s ease",
      }}>
        <div style={{
          width: "50%", height: "100%",
          background: `linear-gradient(160deg, ${C.copperDark}, ${C.copper}, ${C.copperLight}44)`,
          boxShadow: "inset -20px 0 60px rgba(0,0,0,0.4)",
          transform: phase >= 2 ? "translateX(-115%)" : "translateX(0)",
          transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
          willChange: "transform",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.05 }}>
            <MashrabiyaPattern color={C.cream} opacity={1} height="100%" />
          </div>
          <div style={{
            position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
            width: 5, height: 90, borderRadius: 5,
            background: `linear-gradient(180deg, ${C.gold}, ${C.goldLight}, ${C.gold})`,
            opacity: phase >= 1 ? 0.8 : 0,
            transition: "opacity 0.6s",
            boxShadow: `0 0 20px ${C.gold}55`,
          }} />
        </div>
        <div style={{
          width: "50%", height: "100%",
          background: `linear-gradient(200deg, ${C.copperDark}, ${C.copper}, ${C.copperLight}44)`,
          boxShadow: "inset 20px 0 60px rgba(0,0,0,0.4)",
          transform: phase >= 2 ? "translateX(115%)" : "translateX(0)",
          transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
          willChange: "transform",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.05 }}>
            <MashrabiyaPattern color={C.cream} opacity={1} height="100%" />
          </div>
          <div style={{
            position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
            width: 5, height: 90, borderRadius: 5,
            background: `linear-gradient(180deg, ${C.gold}, ${C.goldLight}, ${C.gold})`,
            opacity: phase >= 1 ? 0.8 : 0,
            transition: "opacity 0.6s",
            boxShadow: `0 0 20px ${C.gold}55`,
          }} />
        </div>
        {phase >= 1 && phase < 2 && (
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)", zIndex: 60,
            textAlign: "center",
            animation: "breathe 2.5s ease-in-out infinite",
          }}>
            <CoffeeBeanLogo size={80} color={C.cream} />
          </div>
        )}
      </div>

      {/* ████ MAIN CONTENT ████ */}
      <div ref={mainRef} style={{
        height: "100vh",
        overflowY: phase >= 2 ? "auto" : "hidden",
        overflowX: "hidden",
        opacity: phase >= 2 ? 1 : 0,
        transition: "opacity 1.2s ease 0.3s",
        position: "relative", zIndex: 10,
      }}>

        {/* NAV */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "10px 16px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          background: scrollY > 80 ? `${C.blackWarm}f2` : "transparent",
          backdropFilter: scrollY > 80 ? "blur(24px) saturate(1.4)" : "none",
          transition: "all 0.5s",
          borderBottom: scrollY > 80 ? `1px solid ${C.copper}15` : "1px solid transparent",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              fontFamily: "'Aref Ruqaa', serif",
              fontSize: 22, color: C.creamLight, fontWeight: 700,
              textShadow: `0 0 12px ${C.goldGlow}33`,
            }}>شُبّاك</div>
            <div style={{
              opacity: scrollY > 80 ? 0.6 : 0,
              transition: "opacity 0.3s",
              fontSize: 11, color: C.creamDark, fontWeight: 300,
              fontFamily: "'Amiri', serif", letterSpacing: 2,
            }}>Shubbak Coffee</div>
          </div>
          <div style={{
            display: "flex", gap: 5, alignItems: "center",
            background: `${C.gold}12`,
            border: `1px solid ${C.gold}20`,
            padding: "6px 16px", borderRadius: 50,
            fontSize: 11, color: C.goldLight, fontWeight: 500,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: C.goldLight,
              animation: "pulseGlow 2s infinite",
            }} />
            قريبًا
          </div>
        </nav>

        {/* ━━━━ HERO ━━━━ */}
        <section style={{
          minHeight: "100vh",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          position: "relative",
          background: `
            radial-gradient(ellipse at 50% 35%, ${C.copperDark}44 0%, transparent 55%),
            radial-gradient(ellipse at 50% 80%, ${C.brownDark}33 0%, transparent 55%),
            linear-gradient(180deg, ${C.black}, ${C.blackWarm})
          `,
          padding: "80px 20px 60px",
          overflow: "hidden",
        }}>
          <Particles />

          {/* Rotating ring */}
          <div style={{
            position: "absolute",
            width: "min(500px, 95vw)", height: "min(500px, 95vw)",
            borderRadius: "50%",
            border: `1px solid ${C.copper}0a`,
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "rotSlow 80s linear infinite",
            zIndex: 0,
          }}>
            <div style={{ position: "absolute", top: -4, left: "50%", width: 8, height: 8, borderRadius: "50%", background: C.gold, opacity: 0.2 }} />
          </div>

          <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
            <MashrabiyaPattern color={C.gold} opacity={0.05} />
          </div>

          {/* ★ STOREFRONT SIGN ★ */}
          <Reveal delay={0.3} direction="scale">
            <div style={{
              animation: phase >= 3 ? "fadeInSign 1.5s ease-out forwards" : "none",
              marginBottom: 24,
              position: "relative", zIndex: 2,
            }}>
              <StorefrontSign glowing={true} />
            </div>
          </Reveal>

          {/* Bean logo below */}
          <Reveal delay={0.6} direction="scale">
            <div style={{
              margin: "0 auto 28px",
              animation: "signGlow 4s ease-in-out infinite",
              position: "relative", zIndex: 2,
            }}>
              <CoffeeBeanLogo size={60} color={`${C.goldLight}cc`} />
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.8}>
            <h1 style={{
              fontFamily: "'Reem Kufi', serif",
              fontSize: "clamp(24px, 5vw, 48px)",
              color: C.cream, fontWeight: 700,
              textAlign: "center", lineHeight: 1.5,
              margin: "0 0 6px",
              position: "relative", zIndex: 2,
            }}>
              <span style={{
                display: "block", fontWeight: 300, fontSize: "0.55em",
                color: C.creamWarm, marginBottom: 4,
                fontFamily: "'Aref Ruqaa', serif",
              }}>من الشباك ..</span>
              تبدأ الرحلة
            </h1>
          </Reveal>

          <Reveal delay={0.95}>
            <div style={{
              width: 60, height: 2, margin: "16px auto",
              background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
              position: "relative", zIndex: 2,
            }} />
          </Reveal>

          <Reveal delay={1.05}>
            <p style={{
              color: C.creamDark, fontSize: "clamp(13px, 2.2vw, 16px)",
              fontWeight: 300, maxWidth: 380,
              margin: "0 auto 26px", lineHeight: 2.2,
              textAlign: "center", position: "relative", zIndex: 2,
            }}>
              قهوة مختصة «على السريع» بنكهات موزونة ونوتات واضحة
              <br />
              <span style={{ color: C.teal, fontSize: "0.9em", fontWeight: 400 }}>
                📍 القصيري · داون تاون أم الحمام · القطيف
              </span>
            </p>
          </Reveal>

          <Reveal delay={1.2}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 14,
              background: `linear-gradient(135deg, ${C.copper}28, ${C.copperDark}38)`,
              border: `1px solid ${C.gold}28`,
              borderRadius: 60, padding: "15px 36px",
              position: "relative", zIndex: 2,
              boxShadow: `0 8px 40px ${C.copper}18`,
              backdropFilter: "blur(10px)",
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: "50%",
                background: C.goldLight,
                animation: "pulseGlow 2s infinite",
              }} />
              <span style={{
                color: C.cream, fontSize: 15, fontWeight: 600,
                fontFamily: "'Reem Kufi', sans-serif",
              }}>الافتتاح قريبًا جدًا</span>
            </div>
          </Reveal>

          <div style={{
            position: "absolute", bottom: 22,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
            opacity: 0.25, zIndex: 2,
          }}>
            <span style={{ color: C.cream, fontSize: 10 }}>اسكرول</span>
            <div style={{
              width: 1, height: 32,
              background: `linear-gradient(180deg, ${C.gold}88, transparent)`,
              animation: "breathe 2.5s ease-in-out infinite",
            }} />
          </div>

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
            <MashrabiyaPattern color={C.copper} opacity={0.04} />
          </div>
        </section>

        {/* ━━━━ FEATURES ━━━━ */}
        <section style={{
          padding: "50px 20px",
          background: `linear-gradient(180deg, ${C.blackWarm}, ${C.blackSoft})`,
          position: "relative",
        }}>
          <MashrabiyaBand color={C.copper} />
          <div style={{
            maxWidth: 920, margin: "0 auto",
            display: "flex", flexWrap: "wrap",
            gap: 16, justifyContent: "center",
          }}>
            {[
              { ic: "☕", t: "مختصة", d: "حبوب مختارة من أجود المزارع", c: C.copper },
              { ic: "⚡", t: "على السريع", d: "قهوتك جاهزة بسرعة وإتقان", c: C.gold },
              { ic: "🏘️", t: "من حيّكم", d: "في قلب حي القصيري العريق", c: C.teal },
              { ic: "✨", t: "نوتات واضحة", d: "كل كوب بنكهة مميزة ومختلفة", c: C.goldLight },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div style={{
                  width: 185, padding: "28px 16px",
                  background: `${f.c}08`, border: `1px solid ${f.c}12`,
                  borderRadius: 16, textAlign: "center",
                }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{f.ic}</div>
                  <div style={{
                    fontFamily: "'Reem Kufi', serif",
                    color: f.c, fontSize: 14, fontWeight: 600, marginBottom: 5,
                  }}>{f.t}</div>
                  <div style={{
                    color: C.creamDark, fontSize: 11, fontWeight: 300, lineHeight: 1.7, opacity: 0.65,
                  }}>{f.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ━━━━ STORY ━━━━ */}
        <section style={{
          padding: "90px 20px",
          background: `linear-gradient(180deg, ${C.blackSoft}, ${C.brownDeep}66, ${C.blackSoft})`,
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 50, right: 0, width: 50, height: 280, opacity: 0.03, overflow: "hidden",
          }}><MashrabiyaPattern color={C.gold} opacity={1} height={280} /></div>
          <div style={{
            position: "absolute", bottom: 50, left: 0, width: 50, height: 280, opacity: 0.03, overflow: "hidden",
          }}><MashrabiyaPattern color={C.teal} opacity={1} height={280} /></div>

          <div style={{ maxWidth: 660, margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 52 }}>
                <div style={{
                  fontSize: 11, color: C.gold, letterSpacing: 5, fontWeight: 500,
                  marginBottom: 14, fontFamily: "'Amiri', serif",
                }}>OUR STORY</div>
                <h2 style={{
                  fontFamily: "'Aref Ruqaa', serif",
                  fontSize: "clamp(28px, 5vw, 44px)",
                  color: C.cream, fontWeight: 700, marginBottom: 12,
                }}>حكاية شُبّاك</h2>
                <div style={{
                  width: 50, height: 2,
                  background: `linear-gradient(90deg, ${C.copper}, ${C.gold})`,
                  margin: "0 auto", borderRadius: 1,
                }} />
              </div>
            </Reveal>

            {[
              { ico: "🏠", c: C.copper, t: "من مكان بسيط تبدأ الحكاية",
                p: "في حارات القطيف العتيقة، حيث تتنفّس الجدران تاريخًا عميقًا وتحكي الشبابيك قصصًا لا تنتهي.. من هذي الروح الأصيلة وُلدت فكرة شُبّاك — نافذة تُطل على عالم القهوة المختصة، بأسلوب يحترم المكان ويقدّم الجودة" },
              { ico: "☕", c: C.gold, t: "قهوة بروح مختلفة",
                p: "نؤمن إن القهوة المختصة ما لازم تكون معقّدة أو بعيدة. «على السريع» هو وعدنا لك — نختار أجود الحبوب من مزارع مختارة حول العالم، نحمّصها محلّيًا بدقّة عالية، ونقدمها بنكهات موزونة ونوتات واضحة" },
              { ico: "📍", c: C.teal, t: "من حيّكم لكم",
                p: "اخترنا حي القصيري — الحي النابض في داون تاون أم الحمام — لأن شُبّاك ينتمي لهذا المكان. مو بس كوفي شوب.. هو نافذة تطل على حيّكم بنكهة جديدة، مكان يجمع أصالة الحارة مع إتقان القهوة المختصة" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.15} direction={i % 2 === 0 ? "right" : "left"}>
                <div style={{
                  display: "flex", gap: 18, alignItems: "flex-start",
                  flexWrap: "wrap", justifyContent: "center",
                  marginBottom: 36, padding: "26px 22px",
                  background: `${s.c}06`, border: `1px solid ${s.c}10`,
                  borderRadius: 20,
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `linear-gradient(135deg, ${s.c}22, ${s.c}08)`,
                    border: `1px solid ${s.c}25`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24, flexShrink: 0,
                  }}>{s.ico}</div>
                  <div style={{ flex: 1, minWidth: 220 }}>
                    <h3 style={{
                      fontFamily: "'Reem Kufi', serif",
                      color: C.cream, fontSize: 18, fontWeight: 600, marginBottom: 8,
                    }}>{s.t}</h3>
                    <p style={{
                      color: C.creamDark, fontSize: 13, lineHeight: 2.2, fontWeight: 300, opacity: 0.75,
                    }}>{s.p}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div style={{
                textAlign: "center", padding: "34px 26px",
                background: `linear-gradient(135deg, ${C.copper}0c, ${C.brownDark}1a)`,
                border: `1px solid ${C.copper}15`,
                borderRadius: 22, position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.025 }}>
                  <MashrabiyaPattern color={C.gold} opacity={1} height="100%" />
                </div>
                <div style={{
                  fontFamily: "'Amiri', serif", fontSize: 50, color: C.gold,
                  opacity: 0.18, position: "absolute", top: 5, right: 16, lineHeight: 1,
                }}>"</div>
                <p style={{
                  fontFamily: "'Aref Ruqaa', serif",
                  fontSize: "clamp(18px, 3vw, 28px)",
                  color: C.cream, lineHeight: 1.8, fontWeight: 400,
                  position: "relative",
                }}>
                  صباحك يبدأ من الشُبّاك
                  <br />
                  <span style={{
                    background: `linear-gradient(90deg, ${C.gold}, ${C.goldLight})`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>قهوة ترد لك روحك</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ━━━━ MENU ━━━━ */}
        <section style={{
          padding: "90px 20px",
          background: `linear-gradient(180deg, ${C.blackSoft}, ${C.copperDeep}14, ${C.blackSoft})`,
          position: "relative",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
            <MashrabiyaPattern color={C.copper} opacity={0.04} />
          </div>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 46 }}>
                <div style={{
                  fontSize: 11, color: C.copperLight, letterSpacing: 5, fontWeight: 500,
                  marginBottom: 14, fontFamily: "'Amiri', serif",
                }}>— Menu —</div>
                <h2 style={{
                  fontFamily: "'Aref Ruqaa', serif",
                  fontSize: "clamp(28px, 5vw, 44px)",
                  color: C.cream, fontWeight: 700, marginBottom: 12,
                }}>
                  شُبّاك قهوة
                </h2>
                <div style={{
                  width: 50, height: 2,
                  background: `linear-gradient(90deg, ${C.copper}, ${C.gold})`,
                  margin: "0 auto 12px", borderRadius: 1,
                }} />
                <p style={{ color: C.creamDark, fontSize: 12, fontWeight: 300, opacity: 0.6 }}>
                  قهوة مختصة «على السريع» · مخبوزات طازجة
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{
                display: "flex", gap: 10, justifyContent: "center",
                flexWrap: "wrap", marginBottom: 32,
              }}>
                {menuData.map((cat, i) => (
                  <button key={i}
                    onClick={() => setActiveMenu(activeMenu === i ? null : i)}
                    style={{
                      background: activeMenu === i
                        ? `linear-gradient(135deg, ${C.copper}, ${C.copperDark})`
                        : `${C.cream}08`,
                      color: activeMenu === i ? C.creamLight : C.creamDark,
                      border: `1px solid ${activeMenu === i ? C.copper : C.cream + '10'}`,
                      borderRadius: 50, padding: "9px 20px",
                      fontSize: 13, fontWeight: activeMenu === i ? 600 : 400,
                      cursor: "pointer", fontFamily: "'Tajawal', sans-serif",
                      transition: "all 0.4s",
                      boxShadow: activeMenu === i ? `0 4px 20px ${C.copper}30` : "none",
                    }}>
                    {cat.cat}
                  </button>
                ))}
              </div>
            </Reveal>

            {menuData.map((cat, ci) => (
              <div key={ci} style={{
                maxHeight: activeMenu === ci ? 700 : 0,
                overflow: "hidden",
                transition: "max-height 0.6s cubic-bezier(0.4,0,0.2,1)",
              }}>
                <div style={{
                  fontSize: 10, color: C.copperLight, letterSpacing: 3,
                  textAlign: "center", marginBottom: 14, fontFamily: "'Amiri', serif",
                }}>{cat.catEn}</div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(165px, 1fr))",
                  gap: 12, marginBottom: 18,
                }}>
                  {cat.items.map((item, idx) => (
                    <div key={idx} style={{
                      background: `linear-gradient(160deg, ${C.cream}0a, ${C.cream}03)`,
                      border: `1px solid ${C.cream}0a`,
                      borderRadius: 16, padding: "24px 14px",
                      textAlign: "center",
                      animation: activeMenu === ci ? `slideItem 0.5s ease ${idx * 0.08}s both` : "none",
                    }}>
                      <div style={{ fontSize: 28, marginBottom: 10 }}>{item.ic}</div>
                      <div style={{
                        fontFamily: "'Reem Kufi', serif",
                        color: C.cream, fontSize: 14, fontWeight: 600, marginBottom: 2,
                      }}>{item.n}</div>
                      <div style={{
                        color: C.copperLight, fontSize: 9.5,
                        letterSpacing: 1, fontWeight: 300, marginBottom: 7,
                      }}>{item.e}</div>
                      <div style={{
                        color: C.creamDark, fontSize: 11,
                        lineHeight: 1.7, fontWeight: 300, opacity: 0.65,
                      }}>{item.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {activeMenu === null && (
              <Reveal delay={0.15}>
                <div style={{
                  textAlign: "center", padding: "32px 20px",
                  background: `${C.copper}05`, border: `1px dashed ${C.copper}12`,
                  borderRadius: 20,
                }}>
                  <div style={{ fontSize: 32, marginBottom: 10, opacity: 0.4 }}>☕</div>
                  <p style={{ color: C.creamDark, fontSize: 13, fontWeight: 300, opacity: 0.6 }}>
                    اختر فئة من الأعلى لاستعراض قائمتنا
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* ━━━━ COMING SOON ━━━━ */}
        <section style={{
          padding: "80px 20px",
          background: `linear-gradient(180deg, ${C.blackSoft}, ${C.brownDeep}55)`,
          textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          <Particles />
          <div style={{ position: "absolute", inset: 0, opacity: 0.02 }}>
            <MashrabiyaPattern color={C.gold} opacity={1} height="100%" />
          </div>
          <Reveal>
            <div style={{
              fontFamily: "'Aref Ruqaa', serif",
              fontSize: "clamp(26px, 5vw, 42px)",
              color: C.cream, lineHeight: 1.6, marginBottom: 14,
              position: "relative", zIndex: 2,
            }}>اقتربت ساعة الشباك</div>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{
              color: C.creamDark, fontSize: 14, fontWeight: 300, lineHeight: 2,
              maxWidth: 380, margin: "0 auto 22px",
              position: "relative", zIndex: 2, opacity: 0.75,
            }}>
              قريبًا يفتح شُبّاك أبوابه في حي القصيري
              <br />تابعنا عشان تكون أول من يعرف
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{
              fontFamily: "'Reem Kufi', serif",
              fontSize: "clamp(28px, 6vw, 50px)",
              marginBottom: 28, position: "relative", zIndex: 2,
              background: `linear-gradient(90deg, ${C.gold}, ${C.goldPale}, ${C.gold})`,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              animation: "shimmer 3s linear infinite",
            }}>قريبًا جدًا ✨</div>
          </Reveal>
        </section>

        {/* ━━━━ FOOTER ━━━━ */}
        <footer style={{
          padding: "50px 20px 34px",
          background: C.brownDeep, position: "relative",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
            <MashrabiyaBand color={C.copper} />
          </div>
          <div style={{ maxWidth: 460, margin: "40px auto 0", textAlign: "center" }}>
            <Reveal>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 24, marginBottom: 26, flexWrap: "wrap",
              }}>
                {/* Mini storefront sign */}
                <div style={{
                  background: `${C.blackSoft}cc`,
                  borderRadius: 6, padding: "14px 22px",
                  border: `1px solid ${C.copper}18`,
                  textAlign: "center",
                  boxShadow: `0 0 30px ${C.goldGlow}0c`,
                }}>
                  <div style={{
                    fontFamily: "'Aref Ruqaa', serif",
                    fontSize: 26, color: C.creamLight, fontWeight: 700,
                    textShadow: `0 0 12px ${C.goldGlow}33`,
                  }}>شُبّاك</div>
                  <div style={{
                    fontSize: 8, color: C.creamDark, letterSpacing: 3,
                    fontFamily: "'Amiri', serif", marginTop: 2,
                  }}>Shubbak Coffee</div>
                </div>
                <CoffeeBeanLogo size={44} color={C.creamDark} />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <a href="https://instagram.com/shubakcoffee.sa"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: `linear-gradient(135deg, ${C.copper}, ${C.copperDark})`,
                  color: C.cream, padding: "13px 32px",
                  borderRadius: 50, textDecoration: "none",
                  fontSize: 13, fontWeight: 500,
                  boxShadow: `0 6px 28px ${C.copper}40`,
                  marginBottom: 18,
                }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                تابعنا @shubakcoffee.sa
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                color: C.teal, fontSize: 11, fontWeight: 300, marginBottom: 24,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                القصيري · داون تاون أم الحمام · القطيف
              </div>
            </Reveal>
            <div style={{
              width: "100%", height: 1,
              background: `linear-gradient(90deg, transparent, ${C.cream}10, transparent)`,
              marginBottom: 18,
            }} />
            <div style={{ color: C.creamDark, fontSize: 10, opacity: 0.25, fontWeight: 300 }}>
              شُبّاك كوفي © ٢٠٢٦ · جميع الحقوق محفوظة
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
