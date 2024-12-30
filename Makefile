.PHONY: dev prod build

dev:
	docker-compose -f docker-compose.dev.yml up --build

prod:
	docker-compose -f docker-compose.prod.yml up --build -d

build:
	docker build -t my-next-app:latest .