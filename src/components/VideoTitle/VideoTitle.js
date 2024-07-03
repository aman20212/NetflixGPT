const VideoTitle = ({ title, description }) => {
    return (
        <div className="w-full aspect-video pt-32 px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-5xl font-semibold">{title}</h1>
            <p className="py-6 text-md w-1/3">{description}</p>
            <div className="flex gap-1">
                <button className="bg-white text-black p-2 px-12 text-lg  rounded-md 
                hover:bg-opacity-80"><i className="fa fa-play"></i>&nbsp;Play</button>
                <button className="bg-gray-500 text-white p-2 px-12 text-lg rounded-md">ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;