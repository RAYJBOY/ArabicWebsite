export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  createdAt: Date;
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

export interface ChosenEnrollmentTimes {
  day: string;
  time: string;
}

export interface ChosenEnrollmentTimesWithCalendarEventId {
  day: string;
  time: string;
  calendarEventId: string;
}

export interface FreeSlot {
  start: string;
  end: string;
}
