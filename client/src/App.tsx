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

          {/* All Quran routes */}
          <Route path="/quran" element={<QuranCourse/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
