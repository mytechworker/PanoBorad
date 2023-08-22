#!/bin/sh

ssh -o StrictHostKeyChecking=no ubuntu@$EC2_PUBLIC_IP_ADDRESS << 'ENDSSH'
  cd /home/ubuntu
  unzip build.zip
  rm -rf front build.zip
  mv build front
  touch mamadinkarmikone.me
  echo "it's done baby"
ENDSSH
