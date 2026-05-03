import PopularCourses from "@/components/PopularCourses";
import Banner from "@/components/Banner";
import { getAllCourses, getBannerData, getInstructorData } from "@/lib/data";
import LearningTips from "@/components/LearningTips";
import Instructor from "@/components/Instructor";

export default async function Home() {
  const bannerData = await getBannerData();
  const allCourses = await getAllCourses();
  const allInstructorData = await getInstructorData();

  return (
    <div>
     <Banner bannerData={bannerData} />
     <PopularCourses allCourses={allCourses} allInstructorData={allInstructorData} />
     <LearningTips />
     <Instructor allInstructorData={allInstructorData} />
    </div>
  );
}
