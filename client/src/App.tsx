import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          {/* All Arabic routes */}
          <Route path="/arabic" element={<ArabicCourse/>}/>
          <Route path="/arabic/beginnerLevel" element={<ArabicBeginnerCourse/>}/>
          <Route path="/arabic/advancedLevel" element={<ArabicAdvancedCourse/>}/>
          <Route path="/arabic/quranicArabicWords" element={<QuranicArabicWordsCourse/>}/>
          <Route path="/arabic/conversation" element={<ArabicConversationCourse/>}/>
          <Route path="/arabic/levelOne" element={<ArabicLevelOneCourse/>}/>
          <Route path="/arabic/levelTwo" element={<ArabicLevelTwoCourse/>}/>
          <Route path="/arabic/levelThree" element={<ArabicLevelThreeCourse/>}/>

          {/* All Islamic routes */}
          <Route path="/islamicstudies" element={<IslamicCourse/>}/>
          <Route path="/islamicstudies/fiqh" element={<IslamicFiqhCourse/>}/>
          <Route path="/islamicstudies/seera" element={<IslamicSeeraCourse/>}/>
          <Route path="/islamicstudies/hadeeth" element={<IslamicHadeethCourse/>}/>
          <Route path="/islamicstudies/aqeeda" element={<IslamicAqeedaCourse/>}/>
          <Route path="/islamicstudies/tafseer" element={<IslamicTafseerCourse/>}/>
          <Route path="/islamicstudies/islamicHistory" element={<IslamicHistoryCourse/>}/>

          {/* All Quran routes */}
          <Route path="/quran" element={<QuranCourse/>}/>

          {/* Enrollment route */}
          <Route path="/enroll" element={<QuranCourse/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
