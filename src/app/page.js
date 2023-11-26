import styles from "./page.module.css";
import StrapiClient from "./strapi/client";

export default async function Home() {
  const { data, meta } = await StrapiClient("todos");
  return (
    <main className={styles.main}>
      {data.map((item, index) => (
        <p key={index}>{item.attributes.todo}</p>
      ))}
    </main>
  );
}
