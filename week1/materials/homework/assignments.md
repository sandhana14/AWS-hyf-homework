#### Example asignment

command: `lambda list-functions`

doc: `https://docs.aws.amazon.com/cli/latest/reference/lambda/list-functions.html`

## Mandatory assignments

**Assignment 1:**

command: `aws s3 ls`

doc: `https://docs.aws.amazon.com/cli/latest/reference/s3/ls.html`

number of buckets: `11`

**Assignment 2:**
filename: `hello-hyf.txt`

## Optional Assignments

command: `aws s3 presign s3://hyf-products-bucket/hello-hyf.txt`

url: `https://hyf-products-bucket.s3.us-east-1.amazonaws.com/hello-hyf.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=%16AKIA2F346X675XN7OAVQ%2F20210905%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210905T134532Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=240e53129e074bd788cd3789b51e91a3e98feb16a654776045d92ec1ab3584a5 `

Command for human-readable,summarize and total size of the bucket:
`aws s3 ls s3://hyf-products-bucket --recursive --human-readable --summarize`
