import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Header } from '../components/Header'

import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginng';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateDatesFromYearBeginning();
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysTofill = minimumSummaryDatesSizes - datesFromYearStart.length

import { HabitDay, DAY_SIZE } from '../components/HabitDay';

export default function Home() {
    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <Header />

            <View className="flex-row mt-6 mb-2">
                {
                    weekDays.map((weekDay, i) => (
                        <Text
                            key={`${weekDay}-${i}`}
                            className="text-zinc-400 text-xl font-bold text-center mx-1"
                            style={{ width: DAY_SIZE }}
                        >
                            {weekDay}
                        </Text>
                    ))
                }
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <View className="flex-row flex-wrap">
                    {
                        datesFromYearStart.map(date => (
                            <HabitDay
                                key={date.toISOString()}
                            />
                        ))
                    }
                    {
                        amountOfDaysTofill > 0 && Array
                            .from({ length: amountOfDaysTofill })
                            .map((_, index) => (
                                <View
                                    className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                                    style={{ width: DAY_SIZE, height: DAY_SIZE }}
                                />
                            ))
                    }
                </View>
            </ScrollView>


            <HabitDay />
        </View>
    )
}
