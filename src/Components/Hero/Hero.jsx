import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="flex flex-col text-center items-center justify-center py-20 bg-[#004d40] dark:bg-gray-900">
            <h2 className="text-4xl font-bold mb-8 text-white bg-gradient-to-r from-green-600 via-red-500 to-gold-500 text-transparent bg-clip-text">
                ২০২৪ বাংলাদেশ কোটা এবং দেশ সংস্কার আন্দোলন
            </h2>
            <p className="text-xl w-4/5 leading-relaxed text-center text-white dark:text-gray-300 mb-10">
                ২০২৪ সালে বাংলাদেশের কোটা এবং দেশ সংস্কার আন্দোলনে যারা জীবন দিয়েছেন এবং আহত হয়েছেন, তাঁদের প্রতি শ্রদ্ধা জানাতে আমাদের এই সাইট। তাঁদের সংগ্রাম এবং অবদানের কথা স্মরণ করুন এবং তাঁদের গল্প শেয়ার করুন।
            </p>

            <div className="flex items-center space-x-4 shadow-md p-4 bg-green-800 dark:bg-gray-700 rounded-lg">
                <Link to="/post-blog">
                    <button className="btn bg-red-700 hover:bg-red-600 text-white border-none">
                         নিবন্ধন করুন
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
