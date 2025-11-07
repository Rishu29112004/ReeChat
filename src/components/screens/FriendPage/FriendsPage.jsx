import React from 'react'

// friendsData.js
export const friendsData = [
    {
        id: 1,
        name: "Lorain Lilly",
        img: "https://img.freepik.com/free-photo/vertical-shot-pensive-curly-haired-woman-focused-daydreams-about-something-poses-outdoors-urban-place-wears-jacket-jeans-listens-music-via-headphones-people-hobby-lifestyle_273609-57784.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        id: 2,
        name: "Rishu Yadav",
        img: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
        id: 3,
        name: "Anjali Verma",
        img: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        id: 4,
        name: "Rohan Singh",
        img: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
        id: 5,
        name: "Neha Sharma",
        img: "https://randomuser.me/api/portraits/women/66.jpg"
    },
    {
        id: 6,
        name: "Amit Kumar",
        img: "https://randomuser.me/api/portraits/men/53.jpg"
    },
    {
        id: 7,
        name: "Priya Patel",
        img: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    {
        id: 8,
        name: "Manoj Gupta",
        img: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
        id: 9,
        name: "Abhishek Rathi",
        img: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
        id: 10,
        name: "Sonal Mehta",
        img: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        id: 11,
        name: "Vikram Singh",
        img: "https://randomuser.me/api/portraits/men/56.jpg"
    },
    {
        id: 12,
        name: "Simran Kaur",
        img: "https://randomuser.me/api/portraits/women/69.jpg"
    },
    {
        id: 13,
        name: "Tarun Joshi",
        img: "https://randomuser.me/api/portraits/men/57.jpg"
    },
    {
        id: 14,
        name: "Ritika Sharma",
        img: "https://randomuser.me/api/portraits/women/70.jpg"
    },
    {
        id: 15,
        name: "Harshit Verma",
        img: "https://randomuser.me/api/portraits/men/58.jpg"
    },
    {
        id: 16,
        name: "Shreya Singh",
        img: "https://randomuser.me/api/portraits/women/71.jpg"
    },
    {
        id: 17,
        name: "Aditya Kumar",
        img: "https://randomuser.me/api/portraits/men/59.jpg"
    },
    {
        id: 18,
        name: "Ankita Patel",
        img: "https://randomuser.me/api/portraits/women/72.jpg"
    },
    {
        id: 19,
        name: "Karan Mehta",
        img: "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
        id: 20,
        name: "Pooja Sharma",
        img: "https://randomuser.me/api/portraits/women/73.jpg"
    },
    {
        id: 21,
        name: "Raghav Singh",
        img: "https://randomuser.me/api/portraits/men/61.jpg"
    },
    {
        id: 22,
        name: "Tanya Joshi",
        img: "https://randomuser.me/api/portraits/women/74.jpg"
    },
    {
        id: 23,
        name: "Siddharth Verma",
        img: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    {
        id: 24,
        name: "Nisha Patel",
        img: "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
        id: 25,
        name: "Vivek Sharma",
        img: "https://randomuser.me/api/portraits/men/63.jpg"
    }
];


const FriendsPage = () => {
    return (
        <div className='w-full min-h-screen bg-gray-100'>
            <div className='max-w-4xl mx-auto px-4 py-8'>
                <div className='flex items-center justify-between pb-4'>
                    <p className='text-green-500 font-bold text-lg'>People you may know</p>
                    <button className='text-black text-lg font-mono'>See all</button>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {friendsData.map((t, index) => (
                        <div key={index} className='border  hover:shadow-md hover:shadow-green-500 border-green-500 rounded-md shadow-md bg-white overflow-hidden'>
                            <div>
                                <img className='h-[200px] w-full object-cover' src={t.img} alt="" />
                                <p className='font-semibold py-1 px-4'>{t.name}</p>
                            </div>
                            <div className='flex items-center w-full justify-between gap-2 p-2'>
                                <button className='w-[50%] bg-gray-200 font-mono font-medium rounded-md'>Remove</button>
                                <button className='w-[50%] bg-green-500 text-white font-mono font-medium rounded-md'>Add friend</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center pt-4'>
                    <button className='bg-green-500 border px-5 font-mono font-semibold text-lg py-1 rounded-md text-white'>More</button>
                </div>
            </div>
        </div>
    )
}

export default FriendsPage