# Deploy Next.js with SST

This is a Next.js template which can be deployed with [SST](https://sst.dev) as a container.

## Deploying to SST

This will deploy your Next.js app to AWS Fargate with Amazon ECS.

1. Create an AWS account
1. Configure your [AWS credentials](https://sst.dev/docs/iam-credentials#credentials)
1. Install the SST CLI: `pnpm i -g sst`
1. Install SST providers: `sst install`
1. Install [Docker](https://docs.docker.com/get-docker/) on your machine
1. Build your container: `docker build -t nextjs-docker .`
1. Deploy: `sst deploy --stage production`

For more information, see the Next.js [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying#self-hosting).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
