import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            eveniet! Facilis illo ex blanditiis excepturi? Possimus
            exercitationem quidem quam voluptatum!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1708601/pexels-photo-1708601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          illum, magnam consectetur quis tenetur est veritatis sapiente atque
          fugit voluptatibus? Doloribus quidem cupiditate quibusdam eius
          laboriosam, eum deleniti suscipit doloremque expedita. Vel, sed optio.
          Nostrum aspernatur quibusdam assumenda eos voluptatem libero,
          perferendis nulla nesciunt. Laboriosam sit cumque dolorem repellat
          omnis.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
