import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Box from './Box'
export default function Home(props) {
  let [articles, setArticles] = useState([])
  let [totalResults, setTotalResults] = useState([])
  let [page, setPage] = useState(1)

  async function getAPIData() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&pageSize=12&sortBy=publishedAt&language=${props.language}&apiKey=3b7a311ca6c84193a63a1940ea46c699`)
    response = await response.json()

    if (response.articles) {
      setArticles(response.articles.filter((x) => x.title !== "[Removed]"))
      setTotalResults(response.totalResults)
    }
  }

  async function fetchData() {
    setPage(page + 1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&pageSize=12&page=${page}sortBy=publishedAt&language=${props.language}&apiKey=3b7a311ca6c84193a63a1940ea46c699`)
    response = await response.json()

    if (response.articles)
      setArticles(articles.concat(response.articles.filter((x) => x.title !== "[Removed]")))
  }

useEffect(()=>{
  getAPIData()
},[props])
  return (
    <>
      <div className='container-fluid my-1'>
        <h5 className='background text-light text-center p-2 my-1 text-capitalize'>{props.search ? props.search : props.q}News Articles</h5>
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={<h4>Loading...</h4>}

        >

          <div className='row'>
            {
              articles.map((item, index) => {
                return <Box key={index}
                  source={item.source.name}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage}
                  date={item.publishedAt}

                />
              })

            }
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}

