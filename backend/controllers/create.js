import express from 'express'
import Post from '../models/post.js'
const router = express.Router()

export const createPost = async (req, res) => {

	const post = req.body
	console.log(post)
	if(!post.description){
		return res.status(400).json({ message: 'Description is required' })
	} else if(!post.title){
		return res.status(400).json({ message: 'Title is required' })
	} else if(!post.image){
		return res.status(400).json({ message: 'Image is required' })
	} else if(!post.price && !post.bid){
		return res.status(400).json({ message: 'Price or Bid is required' })
	} else if(post.price && post.bid){
		return res.status(400).json({ message: 'Price and Bid cannot be used together' })
	} else if((post.price && post.price < 0) || (post.bid && post.bid < 0)){
		return res.status(400).json({ message: 'Price or Bid must be greater than 0' })
	}

	const newPost = new Post({
		...post,
		creator: req.userId,
		createdAt: new Date().toISOString(),
	})

	try {
		await newPost.save()

		res.status(201).json(newPost)
	} catch (error) {
		res.status(409).json({ message: error.message })
	}
}

export default router
