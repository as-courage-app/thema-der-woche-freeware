export type PodcastEpisode = {
  themeNumber: number;
  title: string;
  description?: string;
  audioSrc: string;
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    themeNumber: 1,
    title: "Thema 1 – Anerkennung (Podcast)",
    description: "Beispiel-Episode für die kostenlose Version.",
    audioSrc: "/podcast/thema-01.mp3",
  },
  {
    themeNumber: 2,
    title: "Thema 2 (Podcast)",
    description: "Beispiel-Episode für die kostenlose Version.",
    audioSrc: "/podcast/thema-02.mp3",
  },
  {
    themeNumber: 3,
    title: "Thema 3 (Podcast)",
    description: "Beispiel-Episode für die kostenlose Version.",
    audioSrc: "/podcast/thema-03.mp3",
  },
  {
    themeNumber: 4,
    title: "Thema 4 (Podcast)",
    description: "Beispiel-Episode für die kostenlose Version.",
    audioSrc: "/podcast/thema-04.mp3",
  },
];