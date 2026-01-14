export function BrandMark({ variant = "default", className = "" }) {
  const isMicro = variant === "micro";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="relative inline-flex items-center justify-center rounded-lg bg-surface px-3 py-2 ring-1 ring-white/15">
        {!isMicro && (
          <>
            <span className="brandCorner brandCornerTL" />
            <span className="brandCorner brandCornerBR" />
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
        <span className="ml-3 hidden sm:inline text-sm text-text/80">
          Web Studio
        </span>
      )}
    </span>
  );
}
