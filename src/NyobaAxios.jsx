import { useState, useEffect } from "react";
import axios from "axios";

// the exact URL is https://jsonplaceholder.typicode.com/posts/1

const API_URL = "https://jsonplaceholder.typicode.com/posts/";
const api = axios.create({
	baseURL: API_URL,
	url: '',
});

function APIshow({post}) {
	console.log(post);

	return (
		<div>
			<h1>{post._id}</h1>
			<h1>{post.name}</h1>
			<h1>{post.age}</h1>
			<h1>{post.sex}</h1>
			<h2>{post.address}</h2>
		</div>
	);
}

export default function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await api.get();
				setPosts(res.data);
				// console.log(res.data);
			} catch (err) {
				if (err.res) {
          // Not in the 200 response range 
          throw new Error(err.res.data, err.res.status, err.res.headers);
        } else {
          throw new Error(err.stack);
        }
			}
		};

		fetchPosts();
	}, []);
	
	console.log(posts);
	const rows = [];

	posts.forEach((post) => {
		rows.push(
			<APIshow key={post.id} post={post} />
		);
	});

	// return <APIshow posts={posts} />
	return (
		<>{rows}</>
	);
}