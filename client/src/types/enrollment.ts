export interface Enrollment {
    studentName: string;
    email: string;
    courseName: string;
    classesInAMonth: number;
    createdAt: Date;
}

export interface AllUserEnrollments {
  courseName: string;
  courseId: string;
  classDays: string[];
  subscriptionId: string;
  createdAt: Date;
}