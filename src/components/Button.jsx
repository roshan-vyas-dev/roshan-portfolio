function Button({
  children,
  variant = "primary",
  className = "",
  href,
}) {
  const baseClasses =
    "rounded-lg px-5 py-3 text-sm font-medium transition-colors";

  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    secondary:
      "border border-gray-300 text-gray-900 hover:bg-gray-100",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}

export default Button;