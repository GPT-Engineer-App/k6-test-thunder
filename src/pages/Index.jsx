import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dog, Heart, Bone } from "lucide-react";

const popularBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "French Bulldog",
  "Bulldog",
  "Poodle",
  "Beagle",
  "Rottweiler",
  "Dachshund",
  "Siberian Husky",
];

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState(popularBreeds[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold mb-4 text-blue-800">Paw-some Pals</h1>
          <p className="text-xl text-gray-600">Discover the wonderful world of dogs!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Happy dogs"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-800">Loyal Companions</h2>
            <p className="text-lg text-gray-700 mb-6">
              Dogs have been our faithful friends for thousands of years. Their unwavering loyalty,
              playful spirit, and unconditional love make them the perfect companions for humans of all ages.
            </p>
            <div className="flex items-center space-x-4">
              <Heart className="text-red-500 w-8 h-8" />
              <Dog className="text-blue-500 w-8 h-8" />
              <Bone className="text-yellow-500 w-8 h-8" />
            </div>
          </motion.div>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-800">Breed Explorer</CardTitle>
            <CardDescription>Discover fascinating facts about different dog breeds</CardDescription>
          </CardHeader>
          <CardContent>
            <Select onValueChange={setSelectedBreed} defaultValue={selectedBreed}>
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Select a breed" />
              </SelectTrigger>
              <SelectContent>
                {popularBreeds.map((breed) => (
                  <SelectItem key={breed} value={breed}>
                    {breed}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <motion.div
              key={selectedBreed}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">{selectedBreed}</h3>
              <p className="text-gray-700">
                The {selectedBreed} is a wonderful breed known for its {getBreedTrait(selectedBreed)}.
                These dogs are {getBreedCharacteristic(selectedBreed)} and make excellent companions for {getBreedSuitability(selectedBreed)}.
              </p>
            </motion.div>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-blue-800">Did You Know?</CardTitle>
              <CardDescription>Fun facts about our canine friends</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-gray-700">A dog's sense of smell is up to 100,000 times stronger than humans.</li>
                <li className="text-gray-700">Dogs can understand up to 250 words and gestures.</li>
                <li className="text-gray-700">The Greyhound is the fastest dog breed, reaching speeds up to 45 mph.</li>
                <li className="text-gray-700">Dalmatians are born completely white and develop their spots as they grow older.</li>
                <li className="text-gray-700">The Basenji is the only dog breed that doesn't bark, but they can yodel!</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

const getBreedTrait = (breed) => {
  const traits = {
    "Labrador Retriever": "friendly nature and intelligence",
    "German Shepherd": "loyalty and versatility",
    "Golden Retriever": "gentle temperament and obedience",
    "French Bulldog": "charming personality and adaptability",
    "Bulldog": "calm demeanor and courage",
    "Poodle": "high intelligence and elegant appearance",
    "Beagle": "excellent sense of smell and friendly disposition",
    "Rottweiler": "strength and protective instincts",
    "Dachshund": "bold personality and curious nature",
    "Siberian Husky": "endurance and striking appearance",
  };
  return traits[breed] || "unique characteristics";
};

const getBreedCharacteristic = (breed) => {
  const characteristics = {
    "Labrador Retriever": "outgoing and eager to please",
    "German Shepherd": "confident and courageous",
    "Golden Retriever": "patient and kind",
    "French Bulldog": "playful and affectionate",
    "Bulldog": "docile and willful",
    "Poodle": "proud and active",
    "Beagle": "merry and even-tempered",
    "Rottweiler": "loyal and loving",
    "Dachshund": "clever and courageous",
    "Siberian Husky": "friendly and mischievous",
  };
  return characteristics[breed] || "full of personality";
};

const getBreedSuitability = (breed) => {
  const suitability = {
    "Labrador Retriever": "families and active individuals",
    "German Shepherd": "those seeking a working or guard dog",
    "Golden Retriever": "families with children and first-time dog owners",
    "French Bulldog": "apartment dwellers and those with a more relaxed lifestyle",
    "Bulldog": "families and individuals looking for a low-energy companion",
    "Poodle": "allergy sufferers and those who enjoy training",
    "Beagle": "active families and hunting enthusiasts",
    "Rottweiler": "experienced dog owners and those needing a protective companion",
    "Dachshund": "those who appreciate a small dog with a big personality",
    "Siberian Husky": "active owners and cold climate enthusiasts",
  };
  return suitability[breed] || "various lifestyles";
};

export default Index;
