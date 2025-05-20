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
import { signIn } from "./features/users/userSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        dispatch(signIn(user));
      } catch (error) {
        console.log('HAMZA: error: ', error);
        dispatch(
          signIn({ id: undefined, name: undefined, isAuthenticated: false })
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
          <Route path="/myCourses" element={<MyCourses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
