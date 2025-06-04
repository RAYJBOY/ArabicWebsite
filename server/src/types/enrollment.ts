export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  classesInAMonth: number;
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