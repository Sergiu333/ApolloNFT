import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/test-data';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import { Key } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// @ts-ignore
export default function Blog({ posts }) {
  // @ts-ignore
  return (
    <div>
      <Header />
      <div className='px-[24px] md:px-[40px] lg:px-[60px] pt-[70px] xl:pt-[120px]'>
        <div className="grid">
          <div className='grid grid-cols-3 gap-2'>
            {
              posts.map((post: { uri: Key | null | undefined; }) => {
                return (
                  <div className="mt-2 border p-2 hover:bg-yellow-800">
                    <PostCard key={post.uri} post={post}></PostCard>
                  </div>);
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export async function getStaticProps() {

  const Get_Posts = gql`
  query getAllPosts{
  posts{
    nodes{
      title
      content
      uri
      date
    }
  }
}
  `;

  const response = await client.query({
    query: Get_Posts
  });
  const posts = response?.data?.posts?.nodes;
  return {
    props: {
      posts
    }
  };
}
