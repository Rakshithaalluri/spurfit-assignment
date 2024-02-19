import "./index.css";

const EmotionCard = (props) => {
  const { emotionDetails, isHighlighted } = props;
  const { title, description, imageUrl, cardColor } = emotionDetails;
  const highlightedEmotionTitle = isHighlighted && "highlighted-emotion-title";
  const highlightedEmotionDescription =
    isHighlighted && "highlighted-emotion-title";
  const highlightedEmotionCard = isHighlighted && "highlighted-emotion-card";
  return (
    <li
      className={`emotion-card ${highlightedEmotionCard}`}
      style={{ backgroundColor: cardColor }}
    >
      <img src={imageUrl} className="emotion-image" alt="emotion" />
      <p className={`emotion-title ${highlightedEmotionTitle}`}>{title}</p>
      <p className={`emotion-description ${highlightedEmotionDescription}`}>
        {description}
      </p>
    </li>
  );
};

export default EmotionCard;
