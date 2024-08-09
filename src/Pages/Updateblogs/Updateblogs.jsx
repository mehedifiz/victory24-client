import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../Auth/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";

const Updateblogs = () => {
    const { user } = useContext(Authcontext);
    const blog = useLoaderData();
    const { title, category, image, author, content, date, _id } = blog;

    const handleUpdateBlogs = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const image = form.image.value;
        const author = form.author.value;
        const date = form.date.value;
        const content = form.content.value;
        const email = user.email;

        const updatedBlog = { title, category, image, author, date, content, email };
        console.log(updatedBlog);

        axios.put(`http://localhost:4000/blogsByEmail/${_id}`, updatedBlog)
            .then(data => {
                Swal.fire({
                    icon: "success",
                    title: "Huuuuee!",
                    text: "Your blog has been updated.",
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 sm:p-8">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full max-w-2xl p-6">
                <h1 className="text-2xl font-bold dark:text-white mb-4">Update Blog: {title}</h1>
                <form onSubmit={handleUpdateBlogs} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={title}
                            placeholder="Write the title here"
                            className="mt-1 block w-full py-3 border-gray-300 dark:border-gray-800 dark:bg-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Category</label>
                        <select
                            name="category"
                            defaultValue={category}
                            className="mt-1 py-3 block w-full border-gray-300 dark:border-gray-800 dark:bg-gray-600 rounded-md shadow-sm dark:text-white focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="Technology">Technology</option>
                            <option value="Health">Health</option>
                            <option value="Finance">Finance</option>
                            <option value="Travel">Travel</option>
                            <option value="Food">Food</option>
                            <option value="Education">Education</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            defaultValue={image}
                            placeholder="Image URL"
                            className="mt-1 block w-full py-3 border-gray-300 dark:border-gray-800 dark:bg-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Author</label>
                        <input
                            type="text"
                            name="author"
                            defaultValue={author}
                            placeholder="Author Name"
                            className="mt-1 block w-full py-3 border-gray-300 dark:border-gray-800 dark:bg-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Date</label>
                        <input
                            type="date"
                            name="date"
                            defaultValue={date}
                            className="mt-1 block w-full py-3 border-gray-300 dark:border-gray-800 dark:bg-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:text-white"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Content</label>
                        <textarea
                            name="content"
                            defaultValue={content}
                            placeholder="Write the blog content"
                            className="mt-1 block w-full py-3 border-gray-300 dark:border-gray-800 dark:bg-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            rows="6"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 bg-blue-800 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Updateblogs;
