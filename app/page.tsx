"use client";

import Card from "@/components/card";
import InputField from "@/components/input";

const mockCards = [
  {
    title: "Card 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    title: "Card 2",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    title: "Card 3",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    title: "Card 4",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center h-full w-fit min-w-2/5 space-y-8 max-w-5xl">
      <h1 className="text-4xl font-bold mb-16">AI投行分析機器人</h1>

      <InputField />

      <section className="grid grid-cols-2 gap-4 w-full">
        {mockCards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </section>
    </div>
  );
}
