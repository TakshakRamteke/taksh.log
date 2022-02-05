import { NextPage, GetStaticProps, NextApiResponse } from "next";
import Link from "next/link";


type Data = {
    blogCollection : {
        items : [
            tittle : string,
            slug : string
        ]
    }
  }

export const getStaticProps: GetStaticProps = async () => {
    const query = `{
        blogCollection{
          items{
            tittle
            slug
          }
        }
      }`;

    const response: NextApiResponse = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}/environments/master`,
        {
            method : 'POST',
            headers : {
                "Content-Type":"application/json",
                Authorization : `Bearer ${process.env.ACCESSTOKEN}`,
            },
            body: JSON.stringify({query})
        }
    ).then((res) => res.json());

    console.log(response);

    return {
        props: {
            blogs : []
        },
    };
}

const Blogs: NextPage = (blogs) =>{
    return (
        <div>
            <h1>This will be the page to browse all the blog's </h1>
            <p>{JSON.stringify(blogs)}</p>
            <Link href='/'>
                <a>←</a>
            </Link>
        </div>
    )
}

export default Blogs ;