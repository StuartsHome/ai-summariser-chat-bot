build:
	cd backend && docker build --no-cache -t myimage . && cd ..

start: build
	docker run -d --name mycontainer -p 8080:8080 myimage && cd ..

remove:
	docker stop mycontainer

image = $(shell docker images | grep 'myimage')
# image = $(shell docker rmi docker images 'myimage')
stop: remove
	docker rmi -f ${image}
	docker rm -f mycontainer