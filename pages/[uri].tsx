import Head from 'next/head'
import Footer from '../components/Footer'
import { getPostByUri } from '../lib/test-data';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client'
import Header from '../components/Header';

// @ts-ignore
export default function SlugPage({ post }) {

  return (
    <div>
     <Header/>
     <div className="px-[24px] md:px-[40px] lg:px-[60px] pt-[70px] xl:pt-[120px]">
       <main>
         <div>
           <h1>
             {post.title}
           </h1>
           {/*<div>✍️  &nbsp;&nbsp;{`${post.author.node.firstName} ${post.author.node.lastName}`} | 🗓️ &nbsp;&nbsp;{ new Date(post.date).toLocaleDateString() }</div>*/}
         </div>
         <div dangerouslySetInnerHTML={{__html: post.content}}>
         </div>
       </main>
     </div>

      <Footer/>

    </div>
  )
}


// @ts-ignore
export async function getStaticProps({ params }){
  const GET_POST_BY_URI = gql`
  query GetPostByURI($id: ID!){
  post(id: $id, idType: URI){
    title
    content 
    date 
    uri 
    author{
      node{
        firstName 
        lastName
      }
    }
  }
}
  `

  const response =  await client.query({
    query: GET_POST_BY_URI,
    variables:{
      id: params.uri
    }
  })
  const post = response?.data?.post
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths(){
  const paths: never[] = []
  return {
    paths,
    fallback: 'blocking'
  }
}
