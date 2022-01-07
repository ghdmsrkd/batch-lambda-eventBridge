FROM public.ecr.aws/lambda/nodejs:14

COPY . .

RUN npm run build

# You can overwrite command in `serverless.yml` template
CMD ["dist/lambda.run"]
