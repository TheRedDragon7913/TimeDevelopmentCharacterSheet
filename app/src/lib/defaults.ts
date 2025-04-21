import { BlorboSettings } from "./blorbo";

export const GetDefaultSettings = (): BlorboSettings => ({
  name: "Character name here",

  mindsetOutset:
    sliders: [
    {
      negativePole: "center of the world",
      positivePole: "my life isn't relevant",
      amount: 0,
    },
    {
      negativePole: "only see enemies",
      positivePole: "only see friends",
      amount: 0,
    },
    {
      negativePole: "overthink everything",
      positivePole: "impulsive to action",
      amount: 0,
    },
    {
      negativePole: "unilateral decisions",
      positivePole: "command me, please",
      amount: 0,
    },
    {
      negativePole: "can't ask for help",
      positivePole: "too reliant on others",
      amount: 0,
    },
    {
      negativePole: "weapon maker",
      positivePole: "tool maker",
      amount: 0,
    },
    {
      negativePole: "pessimist spot-finder",
      positivePole: "optimist upside fan",
      amount: 0,
    },
    {
      negativePole: "abysmal company",
      positivePole: "decent to others",
      amount: 0,
    },
    {
      negativePole: "morality is irrelevant",
      positivePole: "always in the right",
      amount: 0,
    },
  ], 

  mindsetPresent:
    sliders: [
    {
      negativePole: "center of the world",
      positivePole: "my life isn't relevant",
      amount: 0,
    },
    {
      negativePole: "only see enemies",
      positivePole: "only see friends",
      amount: 0,
    },
    {
      negativePole: "overthink everything",
      positivePole: "impulsive to action",
      amount: 0,
    },
    {
      negativePole: "unilateral decisions",
      positivePole: "command me, please",
      amount: 0,
    },
    {
      negativePole: "can't ask for help",
      positivePole: "too reliant on others",
      amount: 0,
    },
    {
      negativePole: "weapon maker",
      positivePole: "tool maker",
      amount: 0,
    },
    {
      negativePole: "pessimist spot-finder",
      positivePole: "optimist upside fan",
      amount: 0,
    },
    {
      negativePole: "abysmal company",
      positivePole: "decent to others",
      amount: 0,
    },
    {
      negativePole: "morality is irrelevant",
      positivePole: "always in the right",
      amount: 0,
    },
  ], 

  mindsetEndgame:
    sliders: [
    {
      negativePole: "center of the world",
      positivePole: "my life isn't relevant",
      amount: 0,
    },
    {
      negativePole: "only see enemies",
      positivePole: "only see friends",
      amount: 0,
    },
    {
      negativePole: "overthink everything",
      positivePole: "impulsive to action",
      amount: 0,
    },
    {
      negativePole: "unilateral decisions",
      positivePole: "command me, please",
      amount: 0,
    },
    {
      negativePole: "can't ask for help",
      positivePole: "too reliant on others",
      amount: 0,
    },
    {
      negativePole: "weapon maker",
      positivePole: "tool maker",
      amount: 0,
    },
    {
      negativePole: "pessimist spot-finder",
      positivePole: "optimist upside fan",
      amount: 0,
    },
    {
      negativePole: "abysmal company",
      positivePole: "decent to others",
      amount: 0,
    },
    {
      negativePole: "morality is irrelevant",
      positivePole: "always in the right",
      amount: 0,
    },
  ], 

  circumstanceOutset:
    sliders: [
    {
      negativePole: "generally terrible",
      positivePole: "generally excellent",
      amount: 0,
    },
    {
      negativePole: "need for changes",
      positivePole: "passive tolerance",
      amount: 0,
    },
    {
      negativePole: "no agency in action",
      positivePole: "decisions are huge",
      amount: 0,
    },
    {
      negativePole: "stakes are deadly",
      positivePole: "mistakes solvable",
      amount: 0,
    },
    {
      negativePole: "needs go unmet",
      positivePole: "attended with care",
      amount: 0,
    },
    {
      negativePole: "regarded poorly",
      positivePole: "regarded well",
      amount: 0,
    },
    {
      negativePole: "nothing changes",
      positivePole: "changes in seconds",
      amount: 0,
    },
  ], 

  circumstancePresent:
    sliders: [
    {
      negativePole: "generally terrible",
      positivePole: "generally excellent",
      amount: 0,
    },
    {
      negativePole: "need for changes",
      positivePole: "passive tolerance",
      amount: 0,
    },
    {
      negativePole: "no agency in action",
      positivePole: "decisions are huge",
      amount: 0,
    },
    {
      negativePole: "stakes are deadly",
      positivePole: "mistakes solvable",
      amount: 0,
    },
    {
      negativePole: "needs go unmet",
      positivePole: "attended with care",
      amount: 0,
    },
    {
      negativePole: "regarded poorly",
      positivePole: "regarded well",
      amount: 0,
    },
    {
      negativePole: "nothing changes",
      positivePole: "changes in seconds",
      amount: 0,
    },
  ], 

  circumstanceEndgame:
    sliders: [
    {
      negativePole: "generally terrible",
      positivePole: "generally excellent",
      amount: 0,
    },
    {
      negativePole: "need for changes",
      positivePole: "passive tolerance",
      amount: 0,
    },
    {
      negativePole: "no agency in action",
      positivePole: "decisions are huge",
      amount: 0,
    },
    {
      negativePole: "stakes are deadly",
      positivePole: "mistakes solvable",
      amount: 0,
    },
    {
      negativePole: "needs go unmet",
      positivePole: "attended with care",
      amount: 0,
    },
    {
      negativePole: "regarded poorly",
      positivePole: "regarded well",
      amount: 0,
    },
    {
      negativePole: "nothing changes",
      positivePole: "changes in seconds",
      amount: 0,
    },
  ], 
  
  growthChangesPast: [
    "place",
    "power",
    "bonds",
    "beliefs",
    "hurts",
    "hopes",
    "fears",
    "goals",
  ].map((name) => ({
    name,
    selected: false,
  })),
  
  growthSlidersPast: [
    {
      negativePole: " ",
      positivePole: "self-awareness",
      amount: 0,
    },
    {
      negativePole: " ",
      positivePole: "relationships",
      amount: 0,
    },
    {
      negativePole: " ",
      positivePole: "knowledge",
      amount: 0,
    },
    {
      negativePole: " ",
      positivePole: "social standing",
      amount: 0,
    },
    {
      negativePole: " ",
      positivePole: "skills and abilities",
      amount: 0,
    },
    {
      negativePole: " ",
      positivePole: "agency in life",
      amount: 0,
    },
    {
      negativePole: " ",
      positivePole: "outlook",
      amount: 0,
    },
    {
      negativePole: " ",
      positivePole: "goal progress",
      amount: 0,
    },
  ],

  growthSlidersFuture: [
    {
      negativePole: "self-awareness",
      positivePole: " ",
      amount: 0,
    },
    {
      negativePole: "relationships",
      positivePole: " ",
      amount: 0,
    },
    {
      negativePole: "knowledge",
      positivePole: " ",
      amount: 0,
    },
    {
      negativePole: "social standing",
      positivePole: " ",
      amount: 0,
    },
    {
      negativePole: "skills and abilities",
      positivePole: " ",
      amount: 0,
    },
    {
      negativePole: "agency in life",
      positivePole: " ",
      amount: 0,
    },
    {
      negativePole: "outlook",
      positivePole: " ",
      amount: 0,
    },
    {
      negativePole: "goal progress",
      positivePole: " ",
      amount: 0,
    },
  ],

  growthChangesFuture: [
    "place",
    "power",
    "bonds",
    "beliefs",
    "hurts",
    "hopes",
    "fears",
    "goals",
  ].map((name) => ({
    name,
    selected: false,
  })),

  
});
