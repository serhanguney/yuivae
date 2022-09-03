export type Story = {
  title: string;
  details: string;
  tags: Array<{ name: string; hasFocus: boolean }>;
};

export const stories: Story[] = [
  {
    title: "A boutique jewelry store",
    details:
      "A family business that has roughly 10000 incoming visitors per year.",
    tags: [
      { name: "Teamwork", hasFocus: true },
      { name: "Marketing", hasFocus: true },
    ],
  },
];
