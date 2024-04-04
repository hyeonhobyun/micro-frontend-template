#!/bin/bash

# 커밋 메시지 가져오기
COMMIT_MSG=$(git log -1 --pretty=%B)

echo "Commit Message: $COMMIT_MSG"

echo "DEPLOY_PROJECT_ORDER=false" >> deploy-envs.txt
echo "DEPLOY_PROJECT_PAYMENT=false" >> deploy-envs.txt
echo "DEPLOY_PROJECT_ROOT=false" >> deploy-envs.txt
echo "DEPLOY_PROJECT_ROUTING=false" >> deploy-envs.txt
echo "DEPLOY_PROJECT_USER=false" >> deploy-envs.txt

# 커밋 메시지에 따라 프로젝트 배포 플래그 설정
if [[ "$COMMIT_MSG" =~ "[order]" ]]; then
  echo "DEPLOY_PROJECT_ORDER=true" >> deploy-envs.txt
  echo "ORDER_VERCEL_PROJECT_ID=prj_5r5V16jOa2EOkzeS4oJy5vt7zVfP" >> deploy-envs.txt
  echo "ORDER_VERCEL_ORG_ID=team_VdGd1pTyZjyxczcju5Kv8S5l" >> deploy-envs.txt
fi

if [[ "$COMMIT_MSG" =~ "[payment]" ]]; then
  echo "DEPLOY_PROJECT_PAYMENT=true" >> deploy-envs.txt
  echo "PAYMENT_VERCEL_PROJECT_ID=prj_mSw8NSiaN0N0GNfRUF2UMvHaS8G8" >> deploy-envs.txt
  echo "PAYMENT_VERCEL_ORG_ID=team_VdGd1pTyZjyxczcju5Kv8S5l" >> deploy-envs.txt
fi

if [[ "$COMMIT_MSG" =~ "[root]" ]]; then
  echo "DEPLOY_PROJECT_ROOT=true" >> deploy-envs.txt
  echo "ROOT_VERCEL_PROJECT_ID=prj_DQ5a3YG21voecWY8krcnWN3yjtsx" >> deploy-envs.txt
  echo "ROOT_VERCEL_ORG_ID=team_VdGd1pTyZjyxczcju5Kv8S5l" >> deploy-envs.txt
fi

if [[ "$COMMIT_MSG" =~ "[routing]" ]]; then
  echo "DEPLOY_PROJECT_ROUTING=true" >> deploy-envs.txt
  echo "ROUTING_VERCEL_PROJECT_ID=prj_WeEFQmCUHbo8sg3xi0HodNeoHCFn" >> deploy-envs.txt
  echo "ROUTING_VERCEL_ORG_ID=team_VdGd1pTyZjyxczcju5Kv8S5l" >> deploy-envs.txt
fi

if [[ "$COMMIT_MSG" =~ "[user]" ]]; then
  echo "DEPLOY_PROJECT_USER=true" >> deploy-envs.txt
  echo "USER_VERCEL_PROJECT_ID=prj_BxiWaZTkWH1kgxaW135DomAzunEG" >> deploy-envs.txt
  echo "USER_VERCEL_ORG_ID=team_VdGd1pTyZjyxczcju5Kv8S5l" >> deploy-envs.txt
fi
