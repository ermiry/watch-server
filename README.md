# Watch Server

### Push Service
```
sudo docker run \
  -it \
  --name push --rm \
  -p 5000:5000 --net worker \
  -v /home/ermiry/Documents/ermiry/Projects/watch-server/push-service:/home/push \
  -e RUNTIME=development \
  -e PORT=5000 \
  -e CERVER_RECEIVE_BUFFER_SIZE=4096 -e CERVER_TH_THREADS=4 \
  -e CERVER_CONNECTION_QUEUE=4 \
  -e MONGO_APP_NAME=push -e MONGO_DB=worker \
  -e MONGO_URI=mongodb://push:password@mongo:27017/worker \
  -e CONNECT_TO_REDIS=true -e REDIS_HOSTNAME=redis \
  ermiry/push-service:development /bin/bash
```

### Watch Service
```
sudo docker run \
  -it \
  --name watch --rm \
  -p 5001:5001 --net worker \
  -v /home/ermiry/Documents/ermiry/Projects/watch-server/watch-service:/home/watch \
  -e RUNTIME=development \
  -e PORT=5001 \
  -e CERVER_RECEIVE_BUFFER_SIZE=4096 -e CERVER_TH_THREADS=4 \
  -e CERVER_CONNECTION_QUEUE=4 \
  -e MONGO_APP_NAME=watch -e MONGO_DB=worker \
  -e MONGO_URI=mongodb://watch:password@mongo:27017/worker \
  -e CONNECT_TO_REDIS=true -e REDIS_HOSTNAME=redis \
  ermiry/watch-service:development /bin/bash
```
