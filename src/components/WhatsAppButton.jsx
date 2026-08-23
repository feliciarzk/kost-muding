export default function WhatsAppButton({
  phone,
  message = "Hi! I saw your room listing and I'd like to ask a few questions.",
  children = "Chat on WhatsApp",
  variant, // "sage" | undefined
  block = false,
  floating = false,
  className = "",
}) {
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  if (floating) {
    return (
      <a className="float-wa" href={link} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp">
        <WaIcon />
      </a>
    );
  }

  const classNames = ["btn-wa", variant ? `variant-${variant}` : "", block ? "block" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classNames} href={link} target="_blank" rel="noopener noreferrer">
      <WaIcon />
      {children}
    </a>
  );
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.06a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-3.14.82.84-3.06-.19-.31a8.14 8.14 0 0 1-1.25-4.28c0-4.5 3.66-8.15 8.16-8.15 4.5 0 8.15 3.66 8.15 8.15 0 4.5-3.66 8.15-8.15 8.15Zm4.47-6.1c-.24-.12-1.44-.71-1.67-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
