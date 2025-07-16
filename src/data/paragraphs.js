export const paragraphs = [
  "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet and is commonly used for typing practice and font testing.",
  
  "Technology has revolutionized the way we communicate, work, and live. From smartphones to artificial intelligence, innovation continues to shape our future in remarkable ways.",
  
  "The art of writing requires patience, creativity, and dedication. Every great author began with a single word, then a sentence, building their craft one paragraph at a time.",
  
  "Ocean waves crash against the rocky shore, creating a symphony of natural sounds. The salty breeze carries stories from distant lands across the vast blue expanse.",
  
  "Reading books opens doors to countless worlds and perspectives. Each page turned is a step into the imagination of another mind, expanding our own understanding.",
  
  "The ancient art of cooking brings families together around shared meals. Recipes passed down through generations carry the essence of culture and tradition.",
  
  "Mountain peaks pierce the morning sky like nature's skyscrapers. Climbers challenge themselves against these giants, seeking both adventure and self-discovery.",
  
  "Music has the power to transport us across time and space. A single melody can evoke memories, emotions, and connections that transcend language barriers.",
  
  "The night sky reveals countless stars, each one a distant sun with its own story. Astronomers dedicate their lives to unraveling the mysteries of the cosmos.",
  
  "Gardens teach us patience as we nurture seeds into flourishing plants. The cycle of growth reflects life's own rhythm of seasons, challenges, and renewal.",
  
  "Photography captures fleeting moments and preserves them for eternity. Behind every great image lies a story waiting to be discovered and shared.",
  
  "The rhythm of rain against windows creates a peaceful soundtrack for contemplation. Each drop carries with it the promise of growth and renewal.",
  
  "Libraries stand as temples of knowledge, housing centuries of human wisdom. Between their shelves lie adventures, discoveries, and answers to questions yet unasked.",
  
  "The gentle hum of bees in a flower garden speaks to nature's perfect harmony. These tiny workers sustain ecosystems while creating golden treasures.",
  
  "Dawn breaks slowly over the horizon, painting the sky in brilliant shades of orange and pink. A new day brings fresh opportunities and endless possibilities.",
  
  "The fragrance of freshly baked bread fills the kitchen with warmth and comfort. Simple ingredients transformed by heat become sustenance for both body and soul.",
  
  "Rivers carve their paths through landscapes with persistent determination. Like time itself, they shape the world around them through constant, gentle pressure.",
  
  "The laughter of children playing in the park echoes pure joy and innocence. Their carefree spirit reminds us to find wonder in the simplest moments.",
  
  "Autumn leaves dance on the wind before settling into colorful carpets. This season teaches us that letting go can be beautiful and necessary for growth.",
  
  "The craftsman's hands move with practiced precision, shaping raw materials into works of art. Years of dedication transform simple tools into extensions of creativity."
];

export const getRandomParagraph = () => {
  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  return paragraphs[randomIndex];
};