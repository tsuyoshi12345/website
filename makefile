build: 
	docker compose run --rm frontend sh -c "cd react-project && npm run build" 
restart:
	docker compose stop && docker compose up -d