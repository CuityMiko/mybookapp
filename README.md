# 安装命令

```
npx react-native init mybookapp --template react-native-template-typescript
```

# iOS CocoaPods

```
# https://mirrors.tuna.tsinghua.edu.cn/help/CocoaPods/
cd ios
# 进入自己的工程，ios目录中在自己工程的Podfile第一行加上：
source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'
```

# react-native 相关第三方库

```
# 多环境配置 react-native-config
# https://js.coach/package/react-native-config
# 安装依赖
yarn add react-native-config
# ios连接
cd ios
pod install
# android配置
cd android/app/build.gradle
# 文件最后添加如下代码
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```
