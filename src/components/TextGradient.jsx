function TextGradient(props) {
  const from = props.from || "from-blue-500";
  const via = props.via || "via-slate-600";
  const to = props.to || "to-slate-200";

  return (
    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r ${from} ${via} ${to} bg-300% animate-text-gradient`}
    >
      {props.text}
    </span>
  );
}

export default TextGradient;
