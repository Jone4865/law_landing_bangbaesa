import styles from "./Item.module.scss";
import className from "classNames/bind";
import Content_Part from "./Content_Part/Content_Part";
import Image from "next/image";
import React from "react";

const cx = className.bind(styles);

type Props = {
  title: React.ReactNode;
  content: React.ReactNode;
  img_name: string;
  item_top?: boolean;
  logo_color?: "white" | "orange";
};

export default function Item({
  title,
  content,
  img_name,
  item_top = false,
  logo_color = "white",
}: Props) {
  return (
    <div
      className={cx(
        logo_color === "white" ? "container_white" : "container_orange"
      )}
    >
      <div className={cx("wrap")}>
        <Content_Part title={title} content={content} logo_color={logo_color} />
        <div className={cx(item_top ? "image_top" : "image")}>
          <Image src={`/img/bg/${img_name}.png`} fill alt="바디 이미지" />
        </div>
      </div>
    </div>
  );
}
