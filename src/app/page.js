import styles from "./page.module.css";
import Strapi from "./strapi/api";

export default async function Home() {
  const { data, meta } = await Strapi("todos");
  data.map((item) => {
    console.log(item.attributes.todo);
  });
  return (
    <main className={styles.main}>
      {data.map((item) => (
        <p>{item.attributes.todo}</p>
      ))}
    </main>
  );
}
