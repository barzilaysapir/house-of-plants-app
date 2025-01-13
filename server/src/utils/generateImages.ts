import axios from "axios";
import fs from "fs";
import path from "path";
import houseplants from "./data.json";
import dotenv from "dotenv";

dotenv.config();

const API_URL = "https://api.openai.com/v1/images/generations";
// const API_KEY = process.env.OPENAI_API_KEY;
const API_KEY =
  "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";

const Size = {
  LARGE: "1024x1024",
  MEDIUM: "512x512",
  SMALL: "256x256",
} as const;

// Function to generate an image for a plant
const generateImage = async (plantName: string): Promise<string | null> => {
  try {
    const response = await axios.post(
      API_URL,
      {
        // prompt: plantName,
        // prompt: `A detailed and realistic illustration of a ${plantName} in a modern pot, placed in a bright indoor setting.`,
        prompt: `An illustration of a ${plantName} (plant).`,
        n: 1,
        size: Size.MEDIUM,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const imageUrl = response.data.data[0].url;
    console.log(`Generated image for ${plantName}: ${imageUrl}`);
    return imageUrl;
  } catch (error: any) {
    console.error(`Error generating image for ${plantName}:`, error.message);
    return null;
  }
};

const saveImage = async (
  plantName: string,
  imageUrl: string
): Promise<void> => {
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const filePath = path.join(
      __dirname,
      `images/round-3`,
      `${plantName.replace(/\s+/g, "_")}.png`
    );
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, response.data);
    console.log(`Saved image for ${plantName} at ${filePath}`);
  } catch (error: any) {
    console.error(`Error saving image for ${plantName}:`, error.message);
  }
};

const generateAllImages = async (): Promise<void> => {
  for (const { common_name } of houseplants) {
    const imageUrl = await generateImage(common_name);
    if (imageUrl) {
      await saveImage(common_name, imageUrl);
    }
  }
};

generateAllImages();
