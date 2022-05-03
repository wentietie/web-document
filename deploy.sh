# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git checkout -b main
git add .
git commit -m 'deploy'
git remote add origin https://github.com/wentietie/wentietie.github.io

# 如果你想要部署到 https://USERNAME.github.io
git push -f origin main

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -