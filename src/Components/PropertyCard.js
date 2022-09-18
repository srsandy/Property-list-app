const PropertyCard = ({ property, id, deleteFn = () => {} }) => (
  <div>
    <div>Name: {property.Name}</div>
    <div>Description: {property.Description}</div>
    <div>Size: {property.Size}</div>
    <button onClick={() => deleteFn(id)}>delete</button>
  </div>
);

export default PropertyCard;
