const FilledButton: React.FC<{ className?: string; name: string }> = (
  props
) => {
  return <button className={props.className}>{props.name}</button>;
};

export default FilledButton;
