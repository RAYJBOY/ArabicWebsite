export interface Enrollment {
    studentName: string;
    email: string;
    courseName: string;
    classDay: string;
    startTime: string;
    endTime: string;
    enrollmentDate: Date;
    monthlyClasses: number;
}

export interface AllUserEnrollments {
  courseName: string;
  courseId: string;
  classDays: {
    dayOfTheWeek: string;
    startTime: string;
    endTime: string;
  }[];
  subscriptionId: string;
  createdAt: Date;
  studentName: string;
}

export interface EnrollmentWithUserDetails {
  classesInAMonth: number;
  createdAt: Date;
  email: string;
  courseName: string;
  classDays: {
    dayOfTheWeek: string;
    startTime: string;
    endTime: string;
  }[];
  studentName: string;
}