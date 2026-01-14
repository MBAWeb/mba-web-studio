export function BrandMark({ variant = "default", className = "" }) {
  const isMicro = variant === "micro";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="relative inline-flex items-center justify-center rounded-lg bg-surface px-3 py-2 ring-1 ring-white/15">
        {!isMicro && (
          <>
            {/* Cyan corner accents */}
            <span className="pointer-events-none absolute -top-px -left-px h-2.5 w-2.5 rounded-tl-md border-l-2 border-t-2 border-accent" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 rounded-br-md border-b-2 border-r-2 border-accent" />
          </>
        )}

        <span
          className={`font-semibold tracking-[0.18em] text-text ${
            isMicro ? "text-xs" : "text-sm"
          }`}
        >
          MBA
        </span>
      </span>

      {variant === "default" && (
        <span className="ml-3 text-sm text-text/80">Web Studio</span>
      )}
    </span>
  );
}
