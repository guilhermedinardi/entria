import React, { useState } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import styled from 'styled-components';

import { default as usePostCreateMutation } from './PostCreateMutation'

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`

const Input = styled.input`
	width: 100%;
	height: 2em;
	font-size: 1em;
	margin-bottom: 1.3em;
	margin-top: 0.4em;
	border-radius: 5px;
	border: 1px solid #B8B8B8;
	background-color: #b8b8b836;
	color: #000000;
`

const Content = styled.textarea`
	width: 100%;
	height: 20%;
	font-family: inherit;
	font-size: 1em;
	margin-bottom: 1.3em;
	margin-top: 0.4em;
	border-radius: 5px;
	border: 1px solid #B8B8B8;
	background-color: #b8b8b836;
	color: #000000;
`

const Button = styled.button`
	border: none;
	border-radius: 15px;
	width: 10em;
	height: 2.5em;
	background-color: #474747;
	color: #ffffff;
	cursor: pointer;
	font-size: 0.9em;
	align-self: center;
	&:hover{
		background: #ffffff;
		color: #474747;
}

`

const PostCreate = (props) => {
	const post = useFragment(
		graphql` 
			fragment PostCreate_post on Post {
					title
					content
					tag
					link
					id
			},
		`,
		props.post,
	); 

	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [tag, setTag] = useState('')
	const [link, setLink] = useState('') 

	const [addTool] = usePostCreateMutation()

	const handlePostCreate = (event) => {
		event.preventDefault()
		const payload = { 
				title,
				content,
				tag,
				link,
		}    
		addTool(payload)
	}
	return (
		<Form onSubmit={handlePostCreate}>
					
			<Input 
			value={title}
			onChange={(e) => setTitle(e.target.value)}
			title={"title"}
			type={"text"}
			placeholder={"Title"}
			/>
			
			<Content 
			value={content}
			onChange={(e) => setContent(e.target.value)}
			title={"Content"}
			type={"text"}
			placeholder={"Content"}
			/>
			
			<Input 
			value={tag}
			onChange={(e) => setTag(e.target.value)}
			title={"tag"}
			type={"text"}
			placeholder={"Tag"}
			/>
			
			<Input 
			value={link}
			onChange={(e) => setLink(e.target.value)}
			title={"Link"}
			type={"text"}
			placeholder={"Link"}
			/>
			<Button type='submit'>
					+Add Tool
			</Button>
		</Form>
	)
}
export default PostCreate