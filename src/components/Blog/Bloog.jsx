const Bloog = ({ blog }) => {
  console.log(blog);
  return <div></div>;
};
Bloog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Bloog;
