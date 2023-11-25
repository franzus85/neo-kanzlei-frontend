const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.PUBLIC_API_TOKEN}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const Strapi = async (slug) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:1337/api/${slug}`,
      requestOptions
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default Strapi;
