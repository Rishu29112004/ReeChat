import { Ellipsis, MessageCircle, Send, ThumbsUp, X } from 'lucide-react'
import React from 'react'

// postsData.js
export const postsData = [
    {
        id: 1,
        userName: "Rishu Yadav",
        userImg: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        postImg: "https://images.unsplash.com/photo-1741889837997-7693b272e26d?fm=jpg&q=60&w=3000",
        description: "Feeling grateful for the little things in life. 🌸✨ Today was a peaceful day filled with smiles and laughter. Cherishing every moment that brings happiness.",
        video: "https://videos.pexels.com/video-files/855534/855534-hd_1280_720_30fps.mp4"
    },
    {
        id: 2,
        userName: "Anjali Verma",
        userImg: "https://randomuser.me/api/portraits/women/65.jpg",
        postImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&q=80&w=2000",
        description: "Exploring new places and making memories. 🌍💫 Life is all about discovering beauty in every corner and capturing the moments that inspire you.",
        video: "https://vod-progressive.akamaized.net/exp=1697652615~acl=%2Fvimeo-prod-skyfire-std-us%2F02%2F5678%2F987654321%2F987654321.mp4~hmac=xxxxxx/video.mp4"
    },
    {
        id: 3,
        userName: "Rohan Singh",
        userImg: "https://randomuser.me/api/portraits/men/51.jpg",
        postImg: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&q=80&w=2000",
        description: "Just a regular day turned extraordinary! 🌟 Enjoying the little adventures and simple joys that life offers. Stay positive and keep smiling!",
        video: "https://youtu.be/fWH5VUAM1Dc?si=3YE-G3hS0KISKlM5://vod-progressive.akamaized.net/exp=1697652615~acl=%2Fvimeo-prod-skyfire-std-us%2F03%2F9101%2F112233445%2F112233445.mp4~hmac=xxxxxx/video.mp4"
    },
];



const VideoPage = () => {
    return (
        <div className='w-full min-h-screen bg-gray-100'>
            <div className='max-w-4xl mx-auto px-4 py-8'>
                <div className='flex w-full'>
                    <p className="font-mono text-green-500 font-bold text-lg">Video</p>
                </div>
                <div className='py-5 flex flex-col gap-5'>
                    {postsData.map((t, index) => (
                        <div key={index} className='flex bg-white flex-col w-full rounded-md'>

                            <div className='flex items-center justify-between px-4 '>
                                <div className='flex items-center gap-2 my-2'>
                                    <img
                                        className="w-10 h-10 rounded-full shadow-sm shadow-[#0CAF60]"
                                        src={t.userImg}
                                        alt="Neon Avatar"
                                    />
                                    <p className='font-mono'>{t.userName}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Ellipsis />
                                </div>
                            </div>
                            <div className='mb-2 px-2'>
                                <p className='max-w-3xl'>{t.description}</p>
                            </div>
                            <div className='w-full flex items-center justify-center'>
                                {/* <img src={t.video} className='h-[600px] w-full' alt="" /> */}
                                <video
                                    src="https://res.cloudinary.com/dl9r2fs0r/video/upload/v1740903096/zogtpiail17pkq9cz0b4.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    controls      // 👈 ye add karo
                                    className=" h-[500px] aspect-video object-cover rounded-lg"
                                />
                            </div>

                            <div className='flex items-center justify-around gap-5 pl-5 py-4 w-full'>
                                <div className='flex items-center gap-2'>
                                    <ThumbsUp className="text-green-500" size={20} />
                                    <p className="font-mono font-semibold text-gray-700">Like</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MessageCircle className="text-green-500" size={20} />
                                    <p className="font-mono font-semibold text-gray-700">Comment</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Send className="text-green-500" size={20} />
                                    <p className="font-mono font-semibold text-gray-700">Share</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default VideoPage