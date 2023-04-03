export const Title = (props) => {
  const { uncolored, colored } = props;
  return (
    <div className="section-title">
      <h2>
        {uncolored} <span>{colored}</span>
      </h2>
    </div>
  );
};
