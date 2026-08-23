import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const leaveTimer = setTimeout(() => setLeaving(true), 1600);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 2400);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={"intro-loader" + (leaving ? " is-leaving" : "")}>
      <div className="intro-loader-inner">
        <span className="intro-loader-eyebrow">Muding · Kerobokan · Bali</span>
        <h1 className="intro-loader-title">Muding Room</h1>
        <span className="intro-loader-line" />
      </div>
    </div>
  );
}