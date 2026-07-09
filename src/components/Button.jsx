function Button({ children, variant = "primary" }) {
  return (
    <button>
      {children}
    </button>
  );
}

export default Button;