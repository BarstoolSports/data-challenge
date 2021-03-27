# Barstool Data Challenge

The goal of this challenege is to scrape podcast data from a provided list of rss feeds and store it in a Snowflake data warehouse using the [Stitch Import API](https://www.stitchdata.com/docs/developers/import-api/).

## Credentials

You will need the following credentials to successfully complete this project.

#### Snowflake

| Key | Value |
| --- | ----- |
| Console | https://tla60658.us-east-1.snowflakecomputing.com |
| Username | `DATA_EXPERT` |
| Password | `BarstoolSports!2021` |

#### Stitch Data

| Key | Value |
| --- | ----- |
| Token | `61df9635fca22916d96dc1ccb990c210e7b35b1acc82f9f968a5d2d6cea766fc` |

## RSS Feeds

| Podcast | RSS |
| ------- | --- |
| The Daily | https://feeds.simplecast.com/54nAGcIl |
| NPR News Now | https://feeds.npr.org/500005/podcast.xml |
| Up First | https://feeds.npr.org/510318/podcast.xml |
| The Ben Shapiro Show | https://feeds.megaphone.fm/WWO8086402096 |
| Stuff You Should Know | https://feeds.megaphone.fm/stuffyoushouldknow |
| Dateline NBC | https://podcastfeeds.nbcnews.com/dateline-nbc |
| This American Life | http://feed.thisamericanlife.org/talpodcast |
| The Dan Bongino Show | https://feeds.megaphone.fm/WWO3519750118 |
| NPR Politics | https://feeds.npr.org/510310/podcast.xml |
| Call Her Daddy | https://mcsorleys.barstoolsports.com/feed/call-her-daddy |
| Pardon My Take | https://mcsorleys.barstoolsports.com/feed/pardon-my-take |

## Part 1

Your goal is to write a scraper that scrapes each RSS feed listed above, parse the episodes in each feed, and store them in Snowflake by hitting the Stitch data API.

An example implementation of storing data in Snowflake is provided in the `stitch-example.js` file. The example is written in Node.js but feel free to use any language of your choosing to complete this. It's important to follow the same table schema in the example implementation otherwise the data might not save correctly.

> **Note:** After importing data via the Stitch data API it can take up to 5 minutes to show up in the Snowflake console.

## Part 2

1. Login to the Snowflake dashboard using the credentials provided above.
2. Navigate to the Worksheets tab where you will see a basic SQL query: https://tla60658.us-east-1.snowflakecomputing.com/console#/internal/worksheet
3. Run this query to make sure it returns data. You should see all of the data you imported in Part 1.
4. Below this query you will see a series of questions. Copy these questions to a new worksheet with your name as the title of the worksheet.
5. Write the correct sql to answer each question.
