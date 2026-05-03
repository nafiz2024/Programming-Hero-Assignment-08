export const getBannerData = async () => {
    const res = await fetch("https://online-learning-platfrom-server-1.onrender.com/bannerSlides");
    const data = await res.json();
    return data;
}

export const getAllCourses = async () => {
    const res = await fetch("https://online-learning-platfrom-server-1.onrender.com/course");
    const data = await res.json();
    return data;
}

export const getInstructorData = async () => {
    const res = await fetch("https://online-learning-platfrom-server-1.onrender.com/instructor");
    const data = await res.json();
    return data;
}