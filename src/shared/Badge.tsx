interface IBadges {
  text: string;
  className?: string;
}

const Badge: React.FC<IBadges> = ({ text, className }) => {
  return (
    <div
      className={`${className !== undefined ? className : ''} text flex items-center rounded-xl bg-[var(--bg-dark)] px-4 py-1 text-xs dark:bg-[var(--bg-light)]`}
    >
      {text}
    </div>
  );
};

export default Badge;
