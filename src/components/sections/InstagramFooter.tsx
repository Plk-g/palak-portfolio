export default function InstagramFooter() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)] pt-8">
      <div className="flex items-center gap-3">
        {/* Instagram gradient icon */}
        <div
          className="flex h-5 w-5 items-center justify-center rounded-md"
          style={{
            background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
          }}
        >
          <div className="h-2.5 w-2.5 rounded-[3px] border border-white/80" />
        </div>

        <a
          href="https://instagram.com/apaneerproblem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.9rem] text-accent transition-opacity hover:opacity-80"
        >
          @apaneerproblem
        </a>

        <span className="text-[0.8rem] text-text/40">
          — life, mostly documented
        </span>
      </div>
    </section>
  );
}
