## backend
build-backend:
	cd backend && docker build --no-cache -t backendimage . && cd ..

start-backend: build-backend
	docker run -d --name backend-container -p 8080:8080 backendimage && cd ..

remove:
	docker stop backend-container

image = $(shell docker images | grep 'backendimage')
# image = $(shell docker rmi docker images 'myimage')
stop: remove
	docker rmi -f ${image}
	docker rm -f backend-container

## frontend
build-frontend:
	cd frontend && docker build --no-cache -t frontendimage . && cd ..

start-frontend: build-frontend
	docker run -d --name frontend-container -p 3000:3000 frontendimage && cd ..


## both containers
start: start-backend start-frontend
