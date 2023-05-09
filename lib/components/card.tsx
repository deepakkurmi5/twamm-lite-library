import React from "react";

interface CardProps {
  title: string;
}

export default function Card(props: CardProps) {
  return <div>{props.title}</div>;
}
