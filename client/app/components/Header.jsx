import React from "react";
import { Text, View } from "react-native";

import { CircleUser } from "lucide-react-native";
const Header = () => {
  return (
    <View
      // style={styles.headerNav}
      className="w-full flex flex-row justify-between items-center p-6 border-b border-gray-200 shadow-lg"
    >
      <View>
        <Text className="font-bold text-lg">
          We<Text className="text-green-600">Daje</Text>
        </Text>
      </View>
      <View>
        <Text>Hello Natnael!</Text>
      </View>
      <View>
        <CircleUser />
      </View>
    </View>
  );
};

export default Header;
