import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { QuranCourse } from "./pages/courses/quran/QuranCourse";
import { ArabicCourse } from "./pages/courses/arabic/ArabicCourse";
import { IslamicCourse } from "./pages/courses/islamic/IslamicCourse";
import { ArabicBeginnerCourse } from "./pages/courses/arabic/arabic-course-details/ArabicBeginnerCourse";
import { ArabicAdvancedCourse } from "./pages/courses/arabic/arabic-course-details/ArabicAdvancedCourse";
import { QuranicArabicWordsCourse } from "./pages/courses/arabic/arabic-course-details/QuranicArabicWordsCourse";
import { ArabicConversationCourse } from "./pages/courses/arabic/arabic-course-details/ArabicConversationCourse";
import { ArabicLevelOneCourse } from "./pages/courses/arabic/arabic-course-details/ArabicLevelOneCourse";
import { ArabicLevelTwoCourse } from "./pages/courses/arabic/arabic-course-details/ArabicLevelTwoCourse";
import { ArabicLevelThreeCourse } from "./pages/courses/arabic/arabic-course-details/ArabicLevelThreeCourse";
import { IslamicFiqhCourse } from "./pages/courses/islamic/islamic-course-details/IslamicFiqhCourse";
import { IslamicSeeraCourse } from "./pages/courses/islamic/islamic-course-details/IslamicSeeraCourse";
import { IslamicHadeethCourse } from "./pages/courses/islamic/islamic-course-details/IslamicHadeethCourse";
import { IslamicAqeedaCourse } from "./pages/courses/islamic/islamic-course-details/IslamicAqeedaCourse";
import { IslamicTafseerCourse } from "./pages/courses/islamic/islamic-course-details/IslamicTafseerCourse";
import { IslamicHistoryCourse } from "./pages/courses/islamic/islamic-course-details/IslamicHistoryCourse";
import { QuranHowToReadCourse } from "./pages/courses/quran/quran-course-details/QuranHowToReadCourse";
import { QuranRecitationCourse } from "./pages/courses/quran/quran-course-details/QuranRecitationCourse";
import { QuranMemorizationCourse } from "./pages/courses/quran/quran-course-details/QuranMemorizationCourse";
import { QuranTajweedCourse } from "./pages/courses/quran/quran-course-details/QuranTajweedCourse";
import { EnrollmentPage } from "./pages/EnrollmentPage";
import { Header } from "./components/header/Header";
import { MyCourses } from "./pages/MyCourses";
import { useAppDispatch } from "./hooks";
import { getCurrentUser } from "./utilities/user";
import { signIn, UserState } from "./features/users/userSlice";
import { ContactUsPage } from "./pages/ContactUsPage";
import { MyStudents } from "./pages/MyStudents";
import { User } from "./types/user";

function App() {
  const dispatch = useAppDispatch();

  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        console.log('HAMZA: got user: ', user);
        setUser(user);
        dispatch(signIn(user as UserState));
      } catch (error) {
        console.log('HAMZA: error: ', error);
        dispatch(
          signIn({ id: undefined, name: undefined, isAdmin: undefined })
        );
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Router>
        <Header displayTitle={true} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* All Arabic routes */}
          <Route path="/arabic" element={<ArabicCourse />} />
          <Route
            path="/arabic/beginnerLevel"
            element={<ArabicBeginnerCourse />}
          />
          <Route
            path="/arabic/advancedLevel"
            element={<ArabicAdvancedCourse />}
          />
          <Route
            path="/arabic/quranicArabicWords"
            element={<QuranicArabicWordsCourse />}
          />
          <Route
            path="/arabic/conversation"
            element={<ArabicConversationCourse />}
          />
          <Route path="/arabic/levelOne" element={<ArabicLevelOneCourse />} />
          <Route path="/arabic/levelTwo" element={<ArabicLevelTwoCourse />} />
          <Route
            path="/arabic/levelThree"
            element={<ArabicLevelThreeCourse />}
          />

          {/* All Islamic routes */}
          <Route path="/islamicstudies" element={<IslamicCourse />} />
          <Route path="/islamicstudies/fiqh" element={<IslamicFiqhCourse />} />
          <Route
            path="/islamicstudies/seera"
            element={<IslamicSeeraCourse />}
          />
          <Route
            path="/islamicstudies/hadeeth"
            element={<IslamicHadeethCourse />}
          />
          <Route
            path="/islamicstudies/aqeeda"
            element={<IslamicAqeedaCourse />}
          />
          <Route
            path="/islamicstudies/tafseer"
            element={<IslamicTafseerCourse />}
          />
          <Route
            path="/islamicstudies/islamicHistory"
            element={<IslamicHistoryCourse />}
          />

          {/* All Quran routes */}
          <Route path="/quran" element={<QuranCourse />} />
          <Route path="/quran/howToRead" element={<QuranHowToReadCourse />} />
          <Route path="/quran/recitation" element={<QuranRecitationCourse />} />
          <Route
            path="/quran/memorization"
            element={<QuranMemorizationCourse />}
          />
          <Route path="/quran/tajweed" element={<QuranTajweedCourse />} />

          {/* Enrollment route */}
          <Route path="/enroll" element={<EnrollmentPage />} />
          {!user?.isAdmin && <Route path="/myCourses" element={<MyCourses />} />}

          {/* Contact Us route */}
          <Route path="/contact" element={<ContactUsPage/>}/>

          {/* Admin routes */}
          {user?.isAdmin && <Route path="/myStudents" element={<MyStudents />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
