export function Tweet({name, content, like, onDelete}) {
  const onLike = () => {
    console.log("LIKE", name);
  };

  return (
  <div className="tweet" o>
    <button className="delete">❌</button>
    <h3>{name}</h3>
    <p>{content}</p>
    <button onClick={ () => onLike()}>{like}💙</button>
  </div>
  );
}
