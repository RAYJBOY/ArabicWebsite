export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  createdAt: Date;
}

export interface AllUserEnrollments {
  courseName: string;
  courseId: string;
  classDays: string[];
  subscriptionId: string;
  createdAt: Date;
}

export interface EnrollmentWithUserDetails {
  classesInAMonth: number;
  createdAt: Date;
  email: string;
  courseName: string;
  studentName?: string;
}

export interface ChosenEnrollmentTimes {
  day: string;
  time: string;
};

export interface FreeSlot {
  start: string;
  end: string;
}