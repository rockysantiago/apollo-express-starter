import 'dotenv/config';
import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  if (__DEV__) {
    console.log('> in development');
  }

  console.log(`> listening on port ${port}`);
});
