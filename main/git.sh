#! /bin/bash
# 提交代码 并且带提交内容
git add -A
if [ $2 = "N" ]; then
git commit -m "$1" --no-verify
else
git commit -m "$1"
fi
git push
