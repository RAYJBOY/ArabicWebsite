import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CourseCategories = {
    arabic: string[];
    islamicStudies: string[];
    quran: string[];
  };

const COURSES: CourseCategories = {
  arabic: [
    "Beginner",
    "Advanced",
    "Quranic Arabic Words",
    "Conversation",
    "Level 1",
    "Level 2",
    "Level 3",
  ],
  islamicStudies: [
    "Fiqh",
    "Seera",
    "Hadeeth",
    "Aqeeda",
    "Tafseer",
    "Islamic History",
  ],
  quran: ["How To Read", "Recitation", "Memorization", "Tajweed"],
};

export const initialiseCourseTable = async () => {
  try {
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
          },
        });
      }
    }
  } catch (error) {
    console.error("Error while initialising DB: ", error);
  }
};

initialiseCourseTable();
