# Используем базовый образ с поддержкой Node.js
FROM node:20.9.0

# Устанавливаем директорию приложения в контейнере
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json (если есть) в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

EXPOSE 8000

# Копируем все файлы из текущего рабочего каталога в контейнер
COPY . .

# Запускаем приложение
CMD ["npm", "run", "dev"]
