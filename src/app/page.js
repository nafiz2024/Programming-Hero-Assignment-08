
import Banner from "@/components/Banner";
import { getAllCourses, getBannerData, getInstructorData } from "@/lib/data";


export default async function Home() {
  const bannerData = await getBannerData();


  return (
    <div>
     <Banner bannerData={bannerData} />

    </div>
  );
}
