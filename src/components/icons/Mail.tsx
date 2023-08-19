interface MailProps {
  width?: number;
  color?: string;
}

const Mail = ({ width = 28, color = '#FFFFFF' }: MailProps) => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        width: `${width}px`,
        position: 'relative',
        alignItems: 'center',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 202 202"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.833 101C201.833 156.688 156.688 201.833 101 201.833C45.3113 201.833 0.166672 156.688 0.166672 101C0.166672 45.3113 45.3113 0.166672 101 0.166672C156.688 0.166672 201.833 45.3113 201.833 101ZM50.6338 70.75C50.6338 65.2042 55.1208 60.6667 60.6667 60.6667H141.333C146.879 60.6667 151.417 65.2042 151.417 70.75V131.25C151.417 136.796 146.879 141.333 141.333 141.333H60.6667C55.1208 141.333 50.5833 136.796 50.5833 131.25L50.6338 70.75ZM101 106.042L60.6668 80.833V131.25H141.333V80.833L101 106.042ZM101 95.9583L60.6668 70.7501H141.333L101 95.9583Z"
        />
      </svg>
    </div>
  );
};

export default Mail;
