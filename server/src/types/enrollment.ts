export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  createdAt: Date;
}

export interface EnrollmentWithCourseName extends Enrollment {
  courseName: string;
}


export interface EnrollmentWithUserDetails {
  classesInAMonth: number;
  createdAt: Date;
  email: string;
  courseName: string;
  studentName?: string;
}