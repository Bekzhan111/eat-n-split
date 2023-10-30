function Button({ children, onPress }) {
  return (
    <button onClick={onPress} className="button">
      {children}
    </button>
  );
}

export default Button;
