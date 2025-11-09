import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import Header from "../components/Header";

import Cards from "../components/Cards";

const app = () => {
  const router = useRouter();
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     router.replace("/login");
  //   }, 100); // 100ms delay
  //   return () => clearTimeout(timeout);
  // }, []);

  const cardContents = [
    {
      title: "Ke Wedaj",
    },
    {
      title: "Ende Wedaj",
    },
    {
      title: "Monthly",
    },
    {
      title: "Daily",
    },
    {
      title: "Daily",
    },
  ];

  return (
    <View className="w-[100%] h-[100%] bg-white">
      <Header />
      <Text className="text-gray-700 font-bold text-3xl pt-10 pl-10">
        Loan Screen
      </Text>
      <Text className="text-gray-400 text-lg  pl-10">
        Select Your Loan Type
      </Text>

      <View className=" w-full flex flex-row flex-wrap justify-center my-16 gap-7">
        {cardContents.map((content, index) => {
          return <Cards title={content.title} id={index} />;
        })}
      </View>
    </View>
  );
};

export default app;
