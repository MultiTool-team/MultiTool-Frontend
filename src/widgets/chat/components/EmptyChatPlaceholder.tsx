interface IEmptyChatPlaceholder {
  text: string;
  textClassName?: string;
  additionalText: string;
  additionalClassName?: string;
}


const EmptyChatPlaceholder: React.FC<IEmptyChatPlaceholder> = ({
  text,
  textClassName,
  additionalText,
  additionalClassName,
}) => {
  return (
    <h2 className={`${textClassName ?? textClassName} text-alt`}>
      {text}
      <br />
      <strong
        className={`${additionalClassName ?? additionalClassName} text-alt`}
      >
        {additionalText}
      </strong>
    </h2>
  );
};

export default EmptyChatPlaceholder;
