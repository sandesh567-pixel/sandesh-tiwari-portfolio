interface Props {
  fromBg?: "background" | "secondary";
  toBg?: "background" | "secondary";
  flip?: boolean;
}

const SectionDivider = ({ fromBg = "background", toBg = "secondary", flip = false }: Props) => (
  <div className={`relative h-16 -mt-1 ${flip ? "rotate-180" : ""}`} style={{ background: `hsl(var(--${fromBg}))` }}>
    <svg viewBox="0 0 1440 64" fill="none" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
      <path
        d="M0 64H1440V0C1280 48 160 48 0 0V64Z"
        fill={`hsl(var(--${toBg}))`}
      />
    </svg>
  </div>
);

export default SectionDivider;
