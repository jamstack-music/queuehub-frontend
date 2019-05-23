const extractUser = (data) => {
  const {
    display_name,
    id,
    images: [{
      url
    }],
  } = data;

  const [first, last] = display_name.split(" ");

  return {
    first,
    last,
    id,
    image: url,
  };
}

export default extractUser;
