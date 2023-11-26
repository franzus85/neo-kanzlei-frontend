const getURL = (slug) => {
  return process.env.STRAPI_URL + "api/" + slug;
};

const createHeaders = () => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${process.env.STRAPI_TOKEN}`);
  return myHeaders;
};

const getRequestOptions = (slug) => {
  return {
    method: "GET",
    url: getURL(slug),
    headers: createHeaders(),
    redirect: "follow", 
  };
};

const StrapiClient = async (slug) => {
  try {
    const response = await fetch(getRequestOptions(slug));
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default StrapiClient;
