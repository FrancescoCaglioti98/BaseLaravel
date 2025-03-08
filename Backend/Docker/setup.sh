#!/bin/bash

echo "🚀 Avvio stack Docker..."
docker-compose up -d --build

echo "⌛ Attendere il caricamento dei container..."
sleep 10

echo "🎼 Installazione delle dipendenze PHP con Composer..."
docker-compose run --rm composer

echo "🔑 Generazione della chiave dell'app..."
docker-compose run --rm artisan key:generate

echo "🔧 Eseguo migrazioni e seed del database..."
docker-compose run --rm artisan migrate --force

echo "🎨 Installazione dei pacchetti NPM e build di Vue..."
docker-compose run --rm node

echo "🔗 Creazione del link a storage..."
docker-compose run --rm artisan storage:link

echo "🛠 Pulizia della cache..."
docker-compose run --rm artisan config:clear
docker-compose run --rm artisan cache:clear

echo "✅ Setup completato!"
