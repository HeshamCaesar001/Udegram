import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.RDS_USERNAME}`,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  db_Port: process.env.RDS_PORT,
  port:process.env.PORT,
  host: process.env.RDS_HOSTNAME,
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
