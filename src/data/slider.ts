const sliderData = [
    {
        id:1,
        title:"Summer Sale Collections",
        description:"Sale! Up to 50% off!",
        img:"https://images.pexels.com/photos/10107538/pexels-photo-10107538.jpeg?auto=compress&cs=tinysrgb&w=800",
        url:"/",
        bg:"bg-gradient-to-r from-yellow-100 to-pink-100",
    },
    {
        id:2,
        title:"Winter Sale Collections",
        description:"Sale! Up to 50% off!",
        img:"https://images.pexels.com/photos/4702570/pexels-photo-4702570.jpeg?auto=compress&cs=tinysrgb&w=800",
        url:"/",
        bg:"bg-gradient-to-r from-pink-100 to-blue-100",
    },
    {
        id:3,
        title:"Spring Sale Collections",
        description:"Sale! Up to 50% off!",
        img:"https://images.pexels.com/photos/8714494/pexels-photo-8714494.jpeg?auto=compress&cs=tinysrgb&w=800",
        url:"/",
        bg:"bg-gradient-to-r from-blue-100 to-yellow-100",
    },

]

export const getSlider = () => {
    return sliderData;
}