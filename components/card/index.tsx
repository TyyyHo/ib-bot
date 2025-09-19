"use client";

type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className="rounded bg-neutral-200 text-neutral-800 p-4 space-y-2">
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
