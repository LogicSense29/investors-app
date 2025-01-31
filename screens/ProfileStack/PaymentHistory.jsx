import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Modal, RefreshControl } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import Press from "../../component/Press";
import Back from "../../component/Back";
import MyInput from "../../component/Inputs";
import MyCalendar from "../../component/MyCalendar";
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9, Icon10, 
         Icon11, Icon12, Icon13, Icon14, Icon15, Icon16, Icon17, Icon18, Icon19, Icon20 } from "../../component/Svg";

const COLORS = {
  MAIN: "#007AFF",
  ERROR: "#FF0000",
  TEXT: "#1A1A1A"
};

const tabs = ['All', 'Credit', 'Debit', 'Failed'];


const TransactionItem = ({ icon: Icon, title, category, amount, date, isError, isFailed }) => (
  
  <Press 
    onPress={() => router.push('/private/(tabs)/budget/EditTransaction')}
    className="flex-row items-center justify-between mt-5 first:mt-2"
  >
    <View className="flex-row gap-2">
      <Icon />
      <View>
        <Text className="text-base text-black">{title}</Text>
        <Text className={`text-xs font-medium ${isFailed ? 'text-red-500' : ''}`}>
          {isFailed ? 'Failed due to insufficient balance' : category}
        </Text>
      </View>
    </View>
    <View>
      <Text className={`font-semibold text-right ${
        isError ? 'text-red-500' : isFailed ? 'text-[#1A1A1A]' : 'text-[#007AFF]'
      }`}>
        {amount}
      </Text>
      <Text className={`text-xs font-medium ${
        isFailed ? 'text-[#1A1A1A]' : ''
      }`}>
        {date}
      </Text>
    </View>
  </Press>
);

const TabButton = ({ tab, isActive, onPress }) => (
  <Press className='ml-[-10] mr-[6]' onPress={onPress}>
    <Text className={`mx-[8] text-center h-[21px] rounded-3xl w-full font-semibold ${
      isActive 
        ? 'bg-black text-white' 
        : 'bg-white text-black border border-black'
    }`}>
      {tab}
    </Text>
  </Press>
);



const PaymentHistory = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false); 


   // Handle the pull-to-refresh action
   const onRefresh = async () => {
    setRefreshing(true);
    await fetchEvents(); // Re-fetch the events when user pulls to refresh
    setRefreshing(false);
  };

  const renderContent = () => {
    const transactionData = {
      All: [
        { icon: Icon1, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isError: true },
        { icon: Icon2, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isError: false },
        { icon: Icon2, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isFailed: true  },
        { icon: Icon2, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isError: true },
        { icon: Icon2, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isError: false },
        // Add more transactions as needed
      ],
      Credit: [
        { icon: Icon6, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023" },
        { icon: Icon7, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023" },
        { icon: Icon7, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023" },
        { icon: Icon7, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023" },
        { icon: Icon7, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023" },
        // Add more transactions as needed
      ],
      Debit: [
        { icon: Icon11, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isError: true },
        { icon: Icon12, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isError: true },
        { icon: Icon12, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isError: true },
        { icon: Icon12, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isError: true },
        { icon: Icon12, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isError: true },
        // Add more transactions as needed
      ],
      Failed: [
        { icon: Icon16, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isFailed: true },
        { icon: Icon17, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isFailed: true },
        { icon: Icon17, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isFailed: true },
        { icon: Icon17, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isFailed: true },
        { icon: Icon17, title: "Netflix subscription", category: "Bills", amount: "-N3,600", date: "12 Aug 2023", isFailed: true },
        // Add more transactions as needed
      ]
    };

    const transactions = transactionData[tabs[selectedIndex]];

    return (
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <View>
          {transactions.map((transaction, index) => (
            <TransactionItem key={index} {...transaction} />
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-6">
        <View className="mx-4 my-4">
          <View className="items-center justify-center mt-6">
            <Text className="font-bold text-2xl text-center text-[#890709]">
              Payment History
            </Text>
            <View />
          </View>

          <View className="flex-row justify-between mt-6 mb-3">
            {tabs.map((tab, index) => (
              <TabButton 
                key={tab}
                tab={tab}
                isActive={selectedIndex === index}
                onPress={() => setSelectedIndex(index)}
              />
            ))}
          </View>

          {renderContent()}
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default PaymentHistory;
