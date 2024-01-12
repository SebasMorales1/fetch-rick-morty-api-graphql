export default function Character({ name, image }) {
  return (
    <div>
      <img src={image} alt={`${name}'s image`} />
      <h3>{name}</h3>
    </div>
  )
}