const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">M</span>
        </div>
        <span className="font-bold text-foreground text-lg tracking-tight">
          Magic<span className="text-primary">Trick</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://t.me/MagicTrick01"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-muted transition-all duration-200 flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.561l-2.95-.924c-.64-.204-.654-.64.136-.953l11.57-4.461c.537-.194 1.006.131.836.025z"/>
          </svg>
          Канал
        </a>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-primary/40"
        >
          Заказать
        </button>
      </div>
    </header>
  );
};

export default Header;