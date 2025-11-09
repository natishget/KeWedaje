import { Link } from "expo-router";
import { Handshake } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native"; // Add Text for better accessibility

const Cards = ({ title, id }) => {
  // 1. Define base styles and default route
  const baseStyle =
    "shadow-xl w-[40%] p-8 border border-gray-100/70 rounded-xl text-white flex flex-col gap-3";
  let specificStyle = "";
  let route = "/default"; // Ensure a fallback route

  // 2. Assign route and specific gradient style based on ID
  if (id === 0) {
    route = "/(loanForm)/kewedajeLoan";
    specificStyle = "bg-gradient-to-r from-green-600 to-green-300";
  } else if (id === 1) {
    route = "/(loanForm)/endewedajeLoan";
    specificStyle = "bg-gradient-to-r from-indigo-600 to-indigo-300";
  } else if (id === 2) {
    route = "/(loanForm)/loanTypeTwo";
    specificStyle = "bg-gradient-to-r from-red-500 to-red-300";
  } else if (id === 3) {
    route = "/(loanForm)/loanTypeThree";
    specificStyle = "bg-gradient-to-r from-purple-500 to-purple-300";
  } else if (id === 4) {
    route = "/(loanForm)/fullWidthLoan";
    // Overriding the width for ID 4
    specificStyle =
      "w-[85%] text-white p-8 rounded-xl text-white shadow-xl flex flex-col  bg-gradient-to-r from-yellow-800 to-yellow-600";
  } else {
    // Hidden cards should not render
    return null;
  }

  // Conditionally include the special width for id 4
  const finalStyle = id === 4 ? specificStyle : `${baseStyle} ${specificStyle}`;

  return (
    <View className={finalStyle}>
      <Handshake color="white" size={32} />
      <Link href={route} asChild>
        {/* Use Text inside Link for correct linking behavior */}
        <Text className="font-bold text-white">{title}</Text>
      </Link>
    </View>
  );
};

export default Cards;
