import { EC_Card, EC_CardProps } from '../components/ui/ec_card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EC_Card> = {
  component: EC_Card,
};

export const DefaultCard: StoryObj<EC_CardProps> = {
  args: {
    variant: 'default',
    size: 'medium',
    title: 'AI-Powered Educational Tool',
    subtitle: "Adapt to individual learning styles and provides customized resources.",
    projects: "Project By",
    contributorImages: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_0k9DtftiEdHgeVogynKFSuH8HDpll9Lrw&s",
      "https://d28wu8o6itv89t.cloudfront.net/images/VineetaSinghjpg-1709202897464.jpeg",
      "https://imgk.timesnownews.com/media/1548510473-Ratan_Tata_Tata_Sons.jpg?tr=w-400,h-300,fo-auto"

    ],
    contributorCount: 50,
    features: "features",
    postCount: "125K+",
    eventCount: 60,
    projectCount: 42,
    resourceCount: 250,

  },
};

export const StyledCard: StoryObj<EC_CardProps> = {
  args: {
    size: 'large',
  },
};

export default meta;
