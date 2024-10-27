import { defineStore } from 'pinia';

export const useStudentStore = defineStore('students', () => {
  const students = [
    {
      name: 'Okigwe Ebube Ireneaus',
      id: '123123',
      gender: 'Male',
      age: 20,
      contact: '09061982520',
      position: '1st',
      remark: 'v.good',
    },
    {
      name: 'Amina Yusuf',
      id: '123124',
      gender: 'Female',
      age: 19,
      contact: '08034567890',
      position: '2nd',
      remark: 'excellent',
    },
    {
      name: 'Chukwuemeka John',
      id: '123125',
      gender: 'Male',
      age: 21,
      contact: '07011223344',
      position: '3rd',
      remark: 'good',
    },
    {
      name: 'Eze Grace Chidera',
      id: '123126',
      gender: 'Female',
      age: 20,
      contact: '08055667788',
      position: '4th',
      remark: 'average',
    },
    {
      name: 'Abubakar Aliyu',
      id: '123127',
      gender: 'Male',
      age: 22,
      contact: '08123456789',
      position: '5th',
      remark: 'satisfactory',
    },
  ];

  return {
    students
  }
});
