interface Props {
  buttonText: string;
  onClick?: () => void;
}

const Button = ({ buttonText, onClick }: Props) => {
  return (
    <button
      style={{
        backgroundColor: 'var(--theme-color-red)',
        borderRadius: '4px',
        padding: '8px 12px'
      }}
      onClick={onClick}
    >
      <p
        style={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          color: 'var(--theme-color-pink)'
        }}
      >
        {buttonText}
      </p>
    </button>
  );
};

export default Button;
