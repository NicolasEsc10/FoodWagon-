interface ArrowProps {
  direction?: "left" | "right";
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ direction = "right", className = "" }) => {
  return direction === "right" ? (
    <svg
      className={className}
      width="19"
      height="16"
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.91797 7.21484L2.61328 12.5469C2.33984 12.793 1.92969 12.793 1.68359 12.5469L1.05469 11.918C0.808594 11.6719 0.808594 11.2617 1.05469 10.9883L5.26562 6.75L1.05469 2.53906C0.808594 2.26562 0.808594 1.85547 1.05469 1.60938L1.68359 0.980469C1.92969 0.734375 2.33984 0.734375 2.61328 0.980469L7.91797 6.3125C8.16406 6.55859 8.16406 6.96875 7.91797 7.21484Z"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg
      className={className}
      width="19"
      height="16"
      viewBox="0 0 18 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.878906 13.5938L13.3828 1.02539C14.0273 0.445312 14.9941 0.445312 15.5742 1.02539L17.0566 2.50781C17.6367 3.08789 17.6367 4.05469 17.0566 4.69922L7.13086 14.625L17.0566 24.6152C17.6367 25.2598 17.6367 26.2266 17.0566 26.8066L15.5742 28.2891C14.9941 28.8691 14.0273 28.8691 13.3828 28.2891L0.878906 15.7207C0.298828 15.1406 0.298828 14.1738 0.878906 13.5938Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Arrow;
