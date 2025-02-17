interface IEmptyChatList {
  text: string;
  textClassName?: string;
  additionalText: string;
  additionalClassName?: string;
}


const EmptyChatList: React.FC<IEmptyChatList> = ({
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

export default EmptyChatList;
