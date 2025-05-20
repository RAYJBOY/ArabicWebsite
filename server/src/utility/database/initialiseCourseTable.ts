import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CourseCategories = {
    'Arabic': string[];
    'Islamic Studies': string[];
    'Quran': string[];
  };

const COURSES: CourseCategories = {
  'Arabic': [
    "Beginner",
    "Advanced",
    "Quranic Arabic Words",
    "Conversation",
    "Level 1",
    "Level 2",
    "Level 3",
  ],
  'Islamic Studies': [
    "Fiqh",
    "Seera",
    "Hadeeth",
    "Aqeeda",
    "Tafseer",
    "Islamic History",
  ],
  'Quran': ["How To Read", "Recitation", "Memorization", "Tajweed"],
};

export const initialiseCourseTable = async () => {
  try {
    await prisma.course.deleteMany({});
    for (const category in COURSES) {
      for (const course of COURSES[category as keyof CourseCategories]) {
        console.log('Creating entry in db: ');
        console.log('course name: ', course);
        console.log('category: ', category);
        await prisma.course.create({
          data: {
            courseName: course,
            category: category,
            description: "Test description",
            price: 50,
          },
        });
      }
    }
  } catch (error) {
    console.error("Error while initialising DB: ", error);
  }
};

initialiseCourseTable();
