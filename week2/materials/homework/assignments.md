## Mandatory assignments

**Assignment 4:**

Sync your changes to s3 and write down your s3 bucket url.

bucket url: `https://s3.console.aws.amazon.com/s3/buckets/sandhana-homework-week2?region=us-east-1&tab=objects`

**Assignment 5:**

Right now, the website does not support https. Explain which other AWS service needs to be integrated in order to achieve this.

service name: `AWS Certificate Manager`

**Assignment 6:**

Figure out and write down the price per month of storing 51TB on S3.

Price: `$1,173`

Total size of website: `495.4KiB`
(aws s3 ls --summarize --human-readable --recursive s3://sandhana-homework-week2/)

**Assignment 7:**

Write down the main cost factors for S3

brief description: `six Amazon S3 cost components to consider when storing and managing your data:storage pricing,request and data retrieval pricing,data transfer and transfer acceleration pricing,data management and analytics pricing,the price to process your data with S3 Object Lambda`

**Assignment 8:**

The file `week2/assignments/products.json` needs to be uploaded Inside the bucket `hyf-serverless-course-week-2`. Upload the file through the CLI and write down the command needed.

docs: `aws s3 cp C:/Users/mural/desktop/AWS/AWS-hyf-homework/week2/materials/homework/products.json s3://sandhana-homework-week2`

**Assignment 9:**
Write down a brief use case on when S3 could be used for a data engineering assignment:

use case: `AWS Data Engineering ensures fast querying to run Data Analytics on a massive volume of data and feed data to different Business Intelligence Tools, Dashboards, and other applications. Used to store performance-sensitive data that should have a retrieval time of milliseconds. Standard Infrequent Access: Used to store infrequently accessed data. One Zone-Infrequent Access: Used for infrequently used objects that need lower durability.`

command:

## Optional assignments:

**Assignment 10:**

What can be done to reduce the pricing for S3 when hosting a large number of files?

brief description: `Clean up incomplete multipart uploads,Delete previous versions of objects that you don't need,Review your storage-class transition costs,Review your data retrieval costs,Track the requests made to your bucket,Check for changes in the size of your bucket,Review the cost of individual buckets,Understand how your usage relates to your charges.`

**Assignment 11:**

There are many security features built into S3. Find your favourite feature, documentation for it, and explain briefly why.

brief description of favourite security feature: `Identity and Access Management.All Amazon S3 resources—buckets, objects, and related subresources —are private: only the resource owner, an AWS account that created it, can access the resource.`
