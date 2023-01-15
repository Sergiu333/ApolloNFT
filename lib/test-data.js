
export async function getAllPosts(){
  const posts = postsGenerator()
  const response = {
    data: {
      posts: {
        nodes: posts
      }
    }
  }
  return response

}

export async function getPostByUri(uri){
  const posts = postsGenerator()
  const post = posts.filter(post => post.uri === `/${uri}`)[0]
  const response = {
    data: {
      post
    }
  }
  return response
}

function postsGenerator(){
  return [
    {
      title:"Blog Post Title 1",
      content: loremIpsum,
      uri: "/title-1",
      author: {
        node: {
          firstName: "Jeff",
          lastName: "Everhart"
        }
      },
      date: "02/31/2022"
    },
    {
      title:"Blog Post Title 2",
      content: loremIpsum,
      uri: "/title-2",
      author: {
        node: {
          firstName: "Jeff",
          lastName: "Everhart"
        }
      },
      date: "02/31/2022"
    },
    {
      title:"Blog Post Title 3",
      content: loremIpsum,
      uri: "/title-3",
      author: {
        node: {
          firstName: "Jeff",
          lastName: "Everhart"
        }
      },
      date: "02/31/2022"
    },
    {
      title:"Blog Post Title 4",
      content: loremIpsum,
      uri: "/title-4",
      author: {
        node: {
          firstName: "Jeff",
          lastName: "Everhart"
        }
      },
      date: "02/31/2022"
    }
  ]
}


const loremIpsum = "lorem "
