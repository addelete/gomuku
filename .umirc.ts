import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  disableCSSModules: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        title: '五子棋',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};

export default config;
