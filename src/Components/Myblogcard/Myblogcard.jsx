import { CiSquareRemove } from "react-icons/ci";
import { MdOutlineReadMore } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";

const Myblogcard = ({ blog , handleDelete , setMyblog, myblog }) => {
  const { title, category, image, author, content, _id  } = blog;
  return ( 
    <div className="card bg-white dark:bg-gray-800 dark:text-white sm:w-full  lg:w-96 shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt="Blog" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-gray-800 text-white rounded-full text-xs px-3 py-1">
            {category}
          </span>
          <span className="text-gray-600 dark:text-gray-400 text-sm">By {author}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {content.length > 115 ? `${content.substring(0, 115)}...` : content}
        </p>
        <div className="flex justify-evenly items-center mt-4">
          <Link to={`/update-blog/${_id}`}>
            <TbEdit className="text-orange-500 hover:text-blue-700 text-4xl" />
          </Link>
          <Link to={`/blog/${_id}`} className="text-blue-500 hover:text-blue-700">
            <MdOutlineReadMore className="text-5xl" />
          </Link>
          <CiSquareRemove className="text-green-600 hover:text-blue-700 text-5xl" onClick={() => handleDelete(_id)} />
        </div>
      </div>
    </div>
  );
};

export default Myblogcard;
