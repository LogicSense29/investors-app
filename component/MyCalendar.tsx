import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Platform } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { GRAY } from '../constants/Colors';

interface MyCalendarProps {
  value?: any;
  onDateSelect?: (date: any) => any;
  minDate?: string;
  maxDate?: string;
  placeholder?: string;
  disabled?: boolean;
  disabledDates?: string[];
  initialDate?: string;
  markedDates?: {
    [key: string]: {
      selected?: boolean;
      marked?: boolean;
      selectedColor?: string;
    };
  };
  calendarTheme?: {
    backgroundColor?: string;
    calendarBackground?: string;
    textSectionTitleColor?: string;
    selectedDayBackgroundColor?: string;
    selectedDayTextColor?: string;
    todayTextColor?: string;
    dayTextColor?: string;
    textDisabledColor?: string;
    dotColor?: string;
    selectedDotColor?: string;
    monthTextColor?: string;
    textDayFontFamily?: string;
    textMonthFontFamily?: string;
    textDayHeaderFontFamily?: string;
    textDayFontSize?: number;
    textMonthFontSize?: number;
    textDayHeaderFontSize?: number;
  };
}

const MyCalendar: React.FC<MyCalendarProps> = ({
  value,
  onDateSelect,
  minDate,
  maxDate,
  placeholder = 'Select a date',
  disabled = false,
  disabledDates = [],
  initialDate,
  markedDates = {},
  calendarTheme = {}
}) => {
  const [selectedDate, setSelectedDate] = useState(value || initialDate || '');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDayPress = useCallback((day: DateData) => {
    const newDate = day.dateString;
    setSelectedDate(newDate);
    setShowCalendar(false);
    onDateSelect?.(newDate);
  }, [onDateSelect]);

  // Combine default marked dates with custom marked dates
  const allMarkedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: true,
      selectedColor: '#007AFF',
      ...markedDates[selectedDate]
    }
  };

  // Create disabled dates object
  const disabledDatesObject = disabledDates.reduce((acc, date) => ({
    ...acc,
    [date]: { disabled: true }
  }), {});

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => !disabled && setShowCalendar(true)}
        style={[
          styles.dateInput,
          disabled && styles.disabledInput
        ]}
        disabled={disabled}
      >
        <Text style={[
          styles.selectedDateText,
          !selectedDate && styles.placeholderText,
          disabled && styles.disabledText
        ]}>
          {selectedDate || placeholder}
        </Text>
        <Feather 
          name="calendar" 
          size={24} 
          color={disabled ? GRAY : 'black'} 
        />
      </TouchableOpacity>

      <Modal
        visible={showCalendar}
        transparent
        animationType="fade"
        onRequestClose={() => setShowCalendar(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowCalendar(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.calendarHeader}>
              <Text style={styles.headerText}>Select Date</Text>
              <TouchableOpacity
                onPress={() => setShowCalendar(false)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
            </View>
            
            <Calendar
              onDayPress={handleDayPress}
              markedDates={{ ...allMarkedDates, ...disabledDatesObject }}
              minDate={minDate}
              maxDate={maxDate}
              theme={{
                todayTextColor: '#007AFF',
                selectedDayBackgroundColor: '#007AFF',
                selectedDayTextColor: '#ffffff',
                textDayFontFamily: 'System',
                textMonthFontFamily: 'System',
                textDayHeaderFontFamily: 'System',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 14,
                ...calendarTheme
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: GRAY,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    minHeight: 48,
  },
  disabledInput: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E5E7EB',
  },
  selectedDateText: {
    fontSize: 14,
    color: '#1A1A1A',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'normal',
  },
  placeholderText: {
    color: '#9CA3AF',
  },
  disabledText: {
    color: '#9CA3AF',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    maxWidth: 400,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
});

export default MyCalendar;
