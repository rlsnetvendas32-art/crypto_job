// src/components/ui/Button.jsx
export function Button({ children, variant = "solid", style = {}, ...props }) {
  const base = {
    padding: "12px 20px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.2)",
    fontWeight: 700,
    cursor: "pointer",
    background:
      variant === "solid"
        ? "linear-gradient(90deg, #22c55e, #3b82f6)"
        : "transparent",
    color: "#fff",
    transition: "transform 120ms ease, opacity 120ms ease",
    ...style,
  };
  const onMouseDown = (e) => (e.currentTarget.style.transform = "scale(0.98)");
  const onMouseUp = (e) => (e.currentTarget.style.transform = "scale(1)");
  return (
    <button
      style={base}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      {...props}
    >
      {children}
    </button>
  );
}
