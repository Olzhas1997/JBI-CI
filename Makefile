up:
	docker-compose up -d
stop:
	docker-compose stop

init: up app-grant-write-permission app-composer-install app-migrations app-storage-link app-seeders app-swagger app-generate-swagger

swagger: app-generate-swagger

#app-jwt
#app-add-admin

app-composer-install:
	docker-compose run --rm laravel composer install
	docker-compose run --rm laravel composer run-script post-root-package-install
	docker-compose run --rm laravel composer run-script post-create-project-cmd

app-migrations:
	docker-compose run --rm laravel php artisan migrate --force

app-swagger:
	docker-compose run --rm laravel php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"

app-generate-swagger:
	docker-compose run --rm laravel php artisan l5-swagger:generate

app-seeders:
	docker-compose run --rm laravel php artisan db:seed

app-add-admin:
	docker-compose run --rm laravel php artisan user:create

app-storage-link:
	docker-compose run --rm laravel php artisan storage:link

app-grant-write-permission:
	docker-compose run --rm laravel chmod -R 777 ./
	docker-compose run --rm front chmod -R 777 ./



app-jwt:
	docker-compose run --rm laravel php artisan jwt:secret
# 	docker-compose run --rm laravel php artisan jwt:generate-certs

bash:
	docker-compose run --rm --user root laravel bash

bash-nginx:
	docker-compose run --rm nginx bash

nginx-reload:
	docker exec -it app_nginx service nginx reload

logs:
	docker logs masharov_next_1 --follow

# Production
up-prod:
	docker compose -f docker-compose.prod.yml up -d

app-grant-write-permission-prod:
	docker compose -f docker-compose.prod.yml run --rm laravel chmod -R 777 ./
	docker compose -f docker-compose.prod.yml run --rm front chmod -R 777 ./

app-composer-install-prod:
	docker compose -f docker-compose.prod.yml run --rm laravel composer install
	docker compose -f docker-compose.prod.yml run --rm laravel composer run-script post-root-package-install
	docker compose -f docker-compose.prod.yml run --rm laravel composer run-script post-create-project-cmd

app-migrations-prod:
	docker compose -f docker-compose.prod.yml run --rm laravel php artisan migrate --force

app-storage-link-prod:
	docker compose -f docker-compose.prod.yml run --rm laravel php artisan storage:link

app-jwt-prod:
	docker compose -f docker-compose.prod.yml run --rm laravel php artisan jwt:secret
stop-prod:
	docker compose -f docker-compose.prod.yml stop
bash-prod:
	docker compose -f docker-compose.prod.yml run --rm --user root laravel bash

init-prod: up-prod app-grant-write-permission-prod app-composer-install-prod app-migrations-prod app-storage-link-prod app-jwt

supervizor: docker-compose -f docker-compose.yml run --rm --user root laravel service supervisor start
