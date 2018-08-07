import React from 'react';
import Link from 'gatsby-link';
const ReactDisqusThread = require('react-disqus-thread');


export default function Template({data}) {
	const post = data.markdownRemark

	return (
		<div className="page-container">
		<Link to="/blog">Go Back</Link>
		<hr/>
		<h1>{post.frontmatter.title}</h1>
		<h4>Posted by {post.frontmatter.author} on { post.frontmatter.date} </h4>
		<div dangerouslySetInnerHTML={{ __html:post.html }}/>

		<ReactDisqusThread
       		 shortname="brigzdev-com"
          identifier={post.frontmatter.path}
          title={post.frontmatter.title}
          url="brigzdev.com"
          />
		</div>
		)
}

export const postQuery = graphql `
query BlogPostByPath($path: String!) {
	markdownRemark(frontmatter: {path: {eq: $path}}){
		html
		frontmatter {
			path
			title
			author
			date
		}
	}
}
`