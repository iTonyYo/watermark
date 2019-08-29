import execa from 'execa';

// cross-env NODE_ENV=test npx nyc mocha --require @babel/register --no-opts --no-package 'src/**/?(*.)+(spec|test).[tj]s?(x)'
(async () => {
  try {
    const result = await execa('npx', [
      'nyc',
      '--require',
      '@babel/register',
      'mocha',
      '--require',
      '@babel/register',
      '--no-opts',
      'test/?(*-)+(spec|test).[tj]s?(x)',
    ]);

    console.log(result.all);
  } catch (error) {
    throw error;
  }
})();
